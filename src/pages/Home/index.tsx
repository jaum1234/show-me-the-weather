import { Link } from "react-router-dom";
import style from './Home.module.css';

const Home = (): JSX.Element => (
    <div className={ style.home }>
        <h1 className={ style.homeTitle }>Show Me the <br/><span className={ style.homeTitle_Blue }>WEATHER</span></h1>
        <Link to="/choose-weather">
            <p className={ style.homeGetStarted }>
                Get started!
            </p>
        </Link>
    </div>
    )

    


export default Home;