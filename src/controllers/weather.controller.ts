import { getCity } from "../services/weather.service";
import express from "express"
export const getCityHandler = async (req: express.Request, res: express.Response) =>  {
    const {city} = req.params;
    try {
        if (!city) {
            return res.status(400).send({message: 'Could not get the your weather details'})
        }
        const weather = await getCity({city})
        return res.status(200).send({message: "Successfully got the weather", weather})

    }   catch (err) {
        console.log(err);
        return res.status(500).send({ message: 'Internal server error.' });
      }
}