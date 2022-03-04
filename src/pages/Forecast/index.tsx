import { useState } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../../api";
import Box from "../../components/Box";
import ErrorMessage from "../../components/ErrorMessage";
import Form from "../../components/Form";
import WeatherCard from "../../components/WeatherCard";
import style from './Forecast.module.css';

const Forecast = (): JSX.Element => {

    const [weatherInfo, setWeatherInfo] = useState<{
        city: string,
        country: string,
        list: Array<{
            min: number,
            max: number,
            description: string
        }>
    }>();

    const [error, setError] = useState<boolean>(false);

    type WeatherInfo = {
        temp: { 
            min: number, max: number 
        }, 
        weather: {
            description: string
        }[]
    }
    
    const dailyForecast = async (city: string, country: string) => {
        return new Promise(resolve => {
            fetchData('/forecast/daily', city, country)
                .then(res => {

                    setError(false);

                    const { name: city, country } = res.data.city;
                    const list = res.data.list.map(({ temp, weather }: WeatherInfo) => (
                        {
                            min: temp.min,
                            max: temp.max,
                            description: weather[0].description
                        }
                    ));

                    const data = {
                        city,
                        country,
                        list
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
            <h2>Forecast</h2>
            { 
                error && 
                    <ErrorMessage>
                        No results found
                    </ErrorMessage>
            }
            <Form send={ dailyForecast } setWeatherInfo={ setWeatherInfo } />
            <div className={ style.cardsContainer }>
                { weatherInfo?.list.map((info: {min: number, max: number, description: string}, index: number):JSX.Element => (
                    <WeatherCard 
                        city={ weatherInfo.city }
                        country={ weatherInfo.country }
                        index={ index }
                        { ...info }
                    />
                )) }
            </div>
            <Link to='/choose-weather'>Back</Link>
        </Box>
    );
}

export default Forecast;