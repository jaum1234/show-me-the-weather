import { ReactNode } from 'react';
import './style.css'

type ButtonProps = {
    type?: any,
    onClick: () => void,
    children: ReactNode
}

const Button = ({type, onClick, children}: ButtonProps): JSX.Element =>
{
    return(
        <div>
            <button onClick={ onClick } className="button" type={ type }>{ children }</button>
        </div>
    );   
}

export default Button;