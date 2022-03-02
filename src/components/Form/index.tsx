import { useState } from "react";
import Button from "../Button";

const Form = (): JSX.Element => {

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
        <form className="weather__form">
            <div>
                <label htmlFor="">City</label>
                <input placeholder="choose a city" required name="city" type="text" value={city} onChange={handleCityChange}/>
            </div>
            <div>
                <label htmlFor="">Country</label>
                <input placeholder="choose a country" required name="country" type="text" value={country} onChange={handleCountryChange}/>
            </div>
        </form>
    );
}

export default Form;