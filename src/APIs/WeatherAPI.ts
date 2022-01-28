class WeatherAPI
{
    private baseUrl: string;

    constructor()
    {
        this.baseUrl = 'https://api.weatherbit.io/v2.0/';
    }

    weather(type: string, city: string, country?: string)
    {
        
        return fetch(
            `${this.baseUrl + type}?city=${city}&country=${country}&key=${process.env.REACT_APP_API_KEY}`
        )
        .then(res => res.json())

    
    }
}

export default WeatherAPI;