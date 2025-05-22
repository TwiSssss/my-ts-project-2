import style from "./LoadMoreBtn.module.css";
interface LoadMoreBtnProps {
    onClick: () => void;
}
const LoadMoreBtn = ({ onClick }: LoadMoreBtnProps) => {
    return (
        <button className={style.buttonLoad} onClick={onClick}>
            Load more
        </button>
    );
};
export default LoadMoreBtn;
