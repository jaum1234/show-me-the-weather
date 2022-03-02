import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import WeatherCard from "../../components/WeatherCard";
import WeatherController from "../../APIs/WeatherAPI";
import IWeather from "../../interfaces/IWeather";
import './style.css';
import ErrorMessage from "../../components/ErrorMessage";
import Form from "../../components/Form";

const weatherHttp = new WeatherController();

const Weather = () =>
{
    const [country] = useState();
    const [city, setCity] = useState();
    
    const [weatherInfo, setWeatherInfo] = useState<IWeather[]>([]);
    const [error_msg, setErrorMsg] = useState<string>('');

    const clearCurrentState = (): void => {
        setWeatherInfo([]);
        setErrorMsg('');
    }

    const displayError = (error: string): void => {
        setErrorMsg(error);
        setTimeout(() => {
            setErrorMsg('');
        }, 3000);
    }

    const fieldsAreEmpty = (): boolean => {
        return country === '' || city === '';
    }
    
    const getCurrentWeather = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        clearCurrentState();

        if (fieldsAreEmpty()) {
            displayError('All fields are required');
            return;
        }

        weatherHttp.weather('current', city, country)
            .then((res: any) => {
                if (res.error) {
                    displayError(res.error)
                    return;
                }
                setWeatherInfo([...res.data]);
            })
            .catch(() => {
                displayError("No results found")
            })
    }

    const getWeather = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        clearCurrentState();

        if (fieldsAreEmpty()) {
            displayError('All fields are required');
            return;
        }

        weatherHttp.weather('forecast/daily', city, country)
            .then((res: any) => {
                if (res.error) {
                    displayError(res.error)
                    return;
                }
                setWeatherInfo([...res.data]);
            })
            .catch(() => {
                displayError("No results found")
            })
    }

    const weatherCards = weatherInfo.slice(0, 7).map((forecast: IWeather) => {
        return <WeatherCard key={forecast.toString()} weather={ forecast } />      
    })
   
    return(
        <div className="weather">

            { error_msg && <ErrorMessage error_msg={ error_msg }/> }

            <Form/>
            <div className="weather__cards">
                { weatherCards }
            </div>

            <div className="buttons">
                <div>
                    <Button onClick={ getCurrentWeather } type="button">Current</Button>
                </div>
                <div>
                    <Button onClick={ getWeather } type="button">Forecast</Button>
                </div>
            </div>
            <Link to="/">Back</Link>
        </div>
    );
  
}

export default Weather;