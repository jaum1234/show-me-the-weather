import style from './Logo.module.css';

type LogoProps = {
    src: string
}

const Logo = ({src}: LogoProps): JSX.Element => 
{
    return(
        <div>
            <img 
                className={ style.logo } 
                src={ src }
                alt="logo"
            />
        </div>
    );
}

export default Logo;