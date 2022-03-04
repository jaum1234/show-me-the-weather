import axios from 'axios';

const instace = axios.create({
    baseURL: "https://community-open-weather-map.p.rapidapi.com/",
    headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': 'b82a5f48f8mshe83348e9b342ac0p12f317jsn196f5b3d07be'
    }
})

export const fetchData = async (url: string, city: string, countryCode: string) => {
    return instace.get(`${url}?units=metric&q=${city},${countryCode}`);
}

