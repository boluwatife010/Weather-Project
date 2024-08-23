# Weather API

This project is a Node.js and TypeScript-based API for getting specific weather from different cities across the world. It includes functionality for getting weathers.

## Features

- Get Specific weathers from different cities across the world

## Technologies Used

- Node.js
- Express
- TypeScript
- MongoDB
- Mongoose
- Redis
- External API

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB Atlas account
- Redis account
- OpenweatherAPI account

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/boluwatife010/Weather-Project.git
    cd weather project
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file in the root of the project and add your environment variables:

    ```env
    MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority
    PORT=8089
    WEATHER_API_URL=https://api.openweathermap.org/data/2.5/weather
    WEATHER_API_KEY=<apikey>
    REDIS_URL=redis://:<password>@redis-14058.c341.af-south-1-1.ec2.redns.redis-cloud.com:14058

    ```

4. Start the server:

    ```sh
    npm start
    ts-node app
    ```
## Challenges and Solutions

### 1. TypeScript Integration

**Challenge**: Ensuring type safety while interacting with Mongoose models.
**Solution**: Defined TypeScript interfaces for request bodies and Mongoose models to maintain type safety across the application.

### 2. Handling Optional Fields in Interfaces

**Challenge**: TypeScript errors when dealing with optional fields.
**Solution**: Used type assertions and optional chaining to handle optional fields properly.

### 3. Connecting to MongoDB Atlas

**Challenge**: Difficulty in connecting to the cloud MongoDB instance.
**Solution**: Whitelisted IP addresses and used the correct connection string format provided by MongoDB Atlas.

### 3. Connecting to Redis

**Challenge**: Difficulty in connecting to the redis instance
**Solution**: Using the env route to better safe guard password instead of explicitly defining code.


## API Documentation

For detailed API documentation, please refer to the [API Documentation](https://documenter.getpostman.com/view/29099038/2sAXjF6trB) on Postman.

## License

This project is licensed under the MIT License.
