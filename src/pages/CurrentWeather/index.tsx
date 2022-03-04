import { useState } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../../api";
import Box from "../../components/Box"
import ErrorMessage from "../../components/ErrorMessage";
import Form from "../../components/Form";
import WeatherCard from "../../components/WeatherCard";

const CurrentWeather = (): JSX.Element => {

    const [weatherInfo, setWeatherInfo] = useState<{
        city: string,
        country: string,
        description: string,
        temp: number
    }>();

    const [error, setError] = useState<boolean>(false);

    const currentWeather = (city: string, country: string) => {
        return new Promise((resolve) => {
            fetchData('/weather', city, country)
                .then(res => {

                    setError(false);

                    const { temp } = res.data.main;
                    const { name: city } = res.data;
                    const { country } = res.data.sys;
                    const { description } = res.data.weather[0];
                    
                    const data = {
                        city,
                        country,
                        temp,
                        description
                    }
                    resolve(data)
                })
                .catch(() => {
                    setError(true);
                    setTimeout(() => {
                        setError(false);
                    }, 3000);
                });
        });
    }

    return(
        <Box>
            <h2>Current Weather</h2>

            { 
                error && 
                    <ErrorMessage>
                        No results found
                    </ErrorMessage>
            }

            <Form send={ currentWeather } setWeatherInfo={ setWeatherInfo }/>
            { weatherInfo && <WeatherCard { ...weatherInfo }/> }

            <Link to='/choose-weather'>Back</Link>
        </Box>
    );
}

export default CurrentWeather;