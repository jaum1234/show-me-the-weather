import { formatDate } from "../../utils/formatDate";
import { TiWeatherCloudy } from 'react-icons/ti';
import style from './WeatherCard.module.css';

type WeatherCardProps = {
    city: string,
    country: string,
    temp?: number,
    min?: number,
    max?: number,
    description: string,
    index?: number
}

const WeatherCard = ({ city, country, temp, description, min, max, index }: WeatherCardProps): JSX.Element => 
{
    return(
        <div>
            <div className={ style.card }>
                <div className={ style.cardHeader }>
                    <div className={ style.headerDate }> { formatDate(new Date(), index) } </div>
                    <div>
                        <TiWeatherCloudy/>
                    </div>
                    <div>{ temp ? `${temp} °C` : '' }</div>
                    <div>{ min ? `${min} °C -` : '' } { max ? `${max} °C` : '' }</div>
                </div>
                <div>
                    <p>{ city } - { country }</p>
                    <p>{ description }</p>
                </div>
            </div>
        </div>
    )
}


export default WeatherCard;