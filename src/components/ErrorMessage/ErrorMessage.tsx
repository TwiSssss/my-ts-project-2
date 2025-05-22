import style from "./ErrorMessage.module.css";
interface ErrorMessageProps {
    message: string;
}
const ErrorMessage = ({ message }: ErrorMessageProps) => <p className={style.error}>{message}</p>;
export default ErrorMessage;
