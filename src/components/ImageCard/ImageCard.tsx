import style from "./ImageCard.module.css";
import type { ImageFlow } from "../../api";
interface ImageCardProps {
    image: ImageFlow;
    openModal: (image: ImageFlow) => void;
}
const ImageCard = ({ image, openModal }: ImageCardProps) => {
    return (
        <div className={style.card} onClick={() => openModal(image)}>
            <img className={style.image} src={image.urls.small} alt={image.alt_description || "Image"} />
        </div>
    );
};
export default ImageCard;
