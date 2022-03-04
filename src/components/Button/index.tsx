import { ReactNode } from 'react';
import style from './Button.module.css';

type ButtonProps = {
    type?: "button" | "submit" | "reset" | undefined ,
    children: ReactNode
}

const Button = ({type, children}: ButtonProps): JSX.Element =>
{
    return(
        <div>
            <button className={ style.button } type={ type }>{ children }</button>
        </div>
    );   
}

export default Button;