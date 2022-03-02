import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IWeather from "../../interfaces/IWeather";
import { formatDate } from "../../utils/formatDate";
import './style.css';

type WeatherCardProps = {
    weather: IWeather
}

const WeatherCard = ({ weather }: WeatherCardProps): JSX.Element => 
{
    return(
        <div>
            <div className="card">
                <div className="card__header">
                    <div className="header__date"> { formatDate(weather.valid_date) } </div>
                    <div>
                        <FontAwesomeIcon icon="cloud"/>
                    </div>
                    <div>{ weather.temp }</div>
                    <div>{ weather.min_temp }  { weather.max_temp }</div>
                </div>
                <div className="card__body">
                    <p>{ weather.city_name } - { weather.country_code }</p>
                    <p>{ weather.weather.description }</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard;