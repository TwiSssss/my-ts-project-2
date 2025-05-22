import style from "./ImageModal.module.css";
import Modal from "react-modal";
import type { ImageFlow } from "../../api";
Modal.setAppElement("#root");
interface ImageModalProps {
    image: ImageFlow | null;
    isOpen: boolean;
    onClose: () => void;
}
const ImageModal = ({ image, isOpen, onClose }: ImageModalProps) => {
    if (!image) return null;
    return (
        <Modal className={style.modalContent} overlayClassName={style.overlay} isOpen={isOpen} onRequestClose={onClose}>
            <img className={style.modalImage} src={image.urls.regular} alt={image.alt_description || "Image"} />
        </Modal>
    );
};
export default ImageModal;
