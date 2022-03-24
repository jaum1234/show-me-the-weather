import { Link } from "react-router-dom";
import Box from "../../components/Box";
import Button from "../../components/Button";
import style from './ChooseWeather.module.css';

const ChooseWeather = (): JSX.Element => {
    return(
        <Box>
            <h2>Select:</h2>
            <div className={ style.options }>
                <Link to='/current-weather' className={ style.link }>
                    <Button>Current</Button>
                </Link>
                <Link to='/forecast' className={ style.link }>
                    <Button>Forecast</Button>
                </Link>
            </div>
            <Link to='/'>Back</Link>
        </Box>
    );

}

export default ChooseWeather;