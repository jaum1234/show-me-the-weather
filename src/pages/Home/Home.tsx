import { Component, ReactNode } from "react";
import { Link } from "react-router-dom";
import './style.css';

class Home extends Component
{
    render(): ReactNode {
        return(
            <div className='home'>
               
                <h1 className="home__title">Show Me the <br/><span className="home__title--blue">WEATHER</span></h1>
                <Link to="/weather">
                    <p className="home__get-started">
                        Get started!
                    </p>
                </Link>
            </div>
        )
    }
}

export default Home;