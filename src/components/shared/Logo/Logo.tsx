import './style.css';

type LogoProps = {
    src: string
}

const Logo = ({src}: LogoProps): JSX.Element => 
{
    return(
        <div>
            <img 
                className='logo' 
                src={ src }
                alt="logo"/>
        </div>
    );
}

export default Logo;