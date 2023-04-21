import { IImageObject } from "../../../interfaces";
import styles from "./FormPortfolioEntryImage.module.css";

interface IFormPortfolioEntryImageProps {
  imageObject: IImageObject;
  onImageDelete: (imageId: string) => void;
}

export default function FormPortfolioEntryImage({
  imageObject,
  onImageDelete,
}: IFormPortfolioEntryImageProps) {
  return (
    <div className={styles["image-container-wrapper"]}>
      <div className={styles["image-order-info"]}>Image order number: {imageObject.order + 1}</div>
      <div className={styles["image-container"]}>
        <img
          src={imageObject.image}
          alt={`Image for new project with order ${imageObject.order}`}
        />
      </div>
      <div className={styles["image-buttons"]}>
        <button className={styles["delete-button"]} onClick={() => onImageDelete(imageObject.id)}>
          Delete image
        </button>
      </div>
    </div>
  );
}
