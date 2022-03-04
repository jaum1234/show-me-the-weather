import React, { useState } from "react";
import Button from "../Button";
import style from './Form.module.css';

type FormProps = {
    send: (city: string, country: string) => Promise<any>;
    setWeatherInfo: any
}

const Form = ({ send, setWeatherInfo }: FormProps): JSX.Element => {

    const [city, setCity] = useState<string>('');
    const [country, setCountry] = useState<string>('');

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

    return(
        <form className={ style.form } onSubmit={ (event) => {
            event.preventDefault();
            send(city, country)
                .then(data => {
                    setWeatherInfo({...data});
                })
        }}>
            <div className={ style.inputField }>
                <label htmlFor="">City</label>
                <input 
                    placeholder="choose a city" 
                    required 
                    name="city" 
                    type="text" 
                    value={ city } 
                    onChange={ handleCityChange }
                />
            </div>
            <div className={ style.inputField }>
                <label htmlFor="">Country</label>
                <input 
                    placeholder="choose a country" 
                    required 
                    name="country" 
                    type="text" 
                    value={ country } 
                    onChange={ handleCountryChange }/>
            </div>

            <div className={ style.buttons }>
                <Button>Get Weather</Button>
            </div>
        </form>
    );
}

export default Form;