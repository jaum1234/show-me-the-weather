import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/shared/Button/Button";
import WeatherCard from "../../components/shared/WeatherCard/WeatherCard";
import WeatherController from "../../APIs/WeatherAPI";
import IWeather from "../../interfaces/IWeather";
import './style.css';
import ErrorMessage from "../../components/shared/ErrorMessage/ErrorMessage";

const weatherHttp = new WeatherController();

const Weather = () =>
{
    const [city, setCity] = useState<string>('');
    const [country, setCountry] = useState<string>('');
    
    const [weatherInfo, setWeatherInfo] = useState<IWeather[]>([]);
    const [error_msg, setErrorMsg] = useState<string>('');
    
    const handleCityChange = (event: React.FormEvent<HTMLInputElement>): void => {
        const target = event.currentTarget;
        const value = target.value
       
        setCity(value);
    }

    const handleCountryChange = (event: React.FormEvent<HTMLInputElement>): void => {
        const target = event.currentTarget;
        const value = target.value

        setCountry(value);
    }

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

            { error_msg ? <ErrorMessage error_msg={ error_msg }/> : '' }

            <form className="weather__form">
                <div>
                    <label htmlFor="">City</label>
                    <input placeholder="choose a city" required name="city" type="text" value={city} onChange={handleCityChange}/>
                </div>
                <div>
                    <label htmlFor="">Country</label>
                    <input placeholder="choose a country" required name="country" type="text" value={country} onChange={handleCountryChange}/>
                </div>
               
                <div className="weather__cards">
                   { weatherCards }
                </div>

                <div className="buttons">
                    <div><Button action={ getCurrentWeather } label="Current" type="button"/></div>
                    <div><Button action={ getWeather } label="Forecast" type="button"/></div>
                </div>
            </form>
            <Link to="/">Back</Link>
        </div>
    );
  
}

export default Weather;