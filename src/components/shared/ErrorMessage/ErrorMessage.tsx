import './style.css';

type ErrorMessageProps = {
    error_msg: string
}

const ErrorMessage = ({ error_msg }: ErrorMessageProps) => {
    return(
        <div className="error">
            { error_msg }
        </div>
    )
}

export default ErrorMessage;