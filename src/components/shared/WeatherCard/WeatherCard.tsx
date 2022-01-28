import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IWeather from "../../../interfaces/IWeather";
import './style.css';

type WeatherCardProps = {
    weather: IWeather
}

const WeatherCard = ({ weather }: WeatherCardProps): JSX.Element => 
{
    const formatedDate = (): String | void => {

        if (!weather.valid_date) {
            return;
        }
        
        const newDate = new Date(Date.parse(weather.valid_date));
        return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
    }

    return(
        <div>
            <div className="card">
                <div className="card__header">
                    <div className="header__date"> { formatedDate() } </div>
                    <div>
                        <FontAwesomeIcon icon="cloud"/>
                    </div>
                    <div>{ weather.temp ? `${weather.temp} °C` : '' }</div>
                    <div>{ weather.min_temp ? weather.min_temp : '' }  { weather.max_temp ? `/ ${weather.max_temp} °C` : ''}</div>
                </div>
                <div className="card__body">
                    <p>{ weather.city_name? `${weather.city_name}` : '' } - { weather.country_code ? `${weather.country_code}` : '' }</p>
                    <p>{ weather.weather.description }</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard;