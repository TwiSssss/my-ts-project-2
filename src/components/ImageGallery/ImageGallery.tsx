import style from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import type { ImageFlow } from "../../api";
interface ImageGalleryProps {
    images: ImageFlow[];
    openModal: (image: ImageFlow) => void;
}
const ImageGallery = ({ images, openModal }: ImageGalleryProps) => {
    return (
        <ul className={style.gallery}>
            {images.map((img) => (
                <li key={img.id}>
                    <ImageCard image={img} openModal={openModal} />
                </li>
            ))}
        </ul>
    );
};
export default ImageGallery;
