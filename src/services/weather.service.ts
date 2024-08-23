import { weatherModel } from "../model/weather.model"; 
import { getCityRequestBody } from "../interface/weather.interface";
import { redisClient } from "../../app";
import axios from 'axios';

export const getCity = async (body: getCityRequestBody) => {
    const city = body.city;
    const cachedWeather = await redisClient.get(city);
    if (cachedWeather) {
        return JSON.parse(cachedWeather); 
    }
    const weather = await weatherModel.findOne({ city });
    if (weather) {
        await redisClient.setEx(city, 43200, JSON.stringify(weather.data));
        return weather.data;
    }
    const apiUrl = process.env.WEATHER_API_URL || 'https://api.openweathermap.org/data/2.5/weather'; 
    const apiKey = process.env.WEATHER_API_KEY || ''; 

    try {
        const response = await axios.get(apiUrl, {
            params: {
                q: city,
                appid: apiKey
            }
        });

        const weatherData = response.data;
        await weatherModel.create({ city, data: weatherData });
        await redisClient.setEx(city, 43200, JSON.stringify(weatherData));

        return weatherData;
    } catch (error) {
        console.error(`Error fetching weather data for city ${city}:`, error);
        throw new Error(`Could not fetch weather data from the external API: ${error instanceof Error ? error.message : error}`);
    }
};
