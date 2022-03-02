import axios from 'axios';

const instace = axios.create({
    baseURL: "https://api.weatherbit.io/v2.0/",
    headers: {
        "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
        "x-rapidapi-key": "b82a5f48f8mshe83348e9b342ac0p12f317jsn196f5b3d07be"
    }
})

const FiveDaysForecast = () => {
    instace.get();
}

class WeatherAPI
{
    private baseUrl: string;

    constructor()
    {
        this.baseUrl = 'https://api.weatherbit.io/v2.0/';
    }

    weather(type: string, city?: string, country?: string)
    {
        return fetch(
            `${this.baseUrl + type}?city=${city}&country=${country}&key=${process.env.REACT_APP_API_KEY}`
        )
        .then(res => res.json())
    }
}

export default WeatherAPI;