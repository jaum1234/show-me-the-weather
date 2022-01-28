import './style.css'

type ButtonProps = {
    label?: string,
    type?: any,
    action: any
}

const Button = ({label, type, action}: ButtonProps): JSX.Element =>
{
    return(
        <div>
            <button onClick={ action } className="button" type={ type }>{ label }</button>
        </div>
    );   
}

export default Button;