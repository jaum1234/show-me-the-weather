export default interface IWeather {
    temp: number,
    min_temp: number,
    max_temp: number,
    weather: {
        description: string
    }, 
    city_name: string,
    country_code: string,
    valid_date: string
}

