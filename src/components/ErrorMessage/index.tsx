import style from './ErrorMessage.module.css';

type ErrorMessageProps = {
    children: React.ReactNode;
}

const ErrorMessage = ({ children }: ErrorMessageProps) => {
    return(
        <div className={ style.error }>
            { children }
        </div>
    )
}

export default ErrorMessage;