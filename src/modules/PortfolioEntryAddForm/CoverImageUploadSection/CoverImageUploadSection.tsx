import React from "react";
import styles from "./CoverImageUploadSection.module.css";

interface ICoverImageUploadSectionProps {
  setCoverImageFile: React.Dispatch<React.SetStateAction<FileList | null>>;
  coverImageFile: FileList | null;
  coverImageUrl: string;
}

export default function CoverImageUploadSection({
  setCoverImageFile,
  coverImageFile,
  coverImageUrl,
}: ICoverImageUploadSectionProps) {
  return (
    <div className={styles["cover-image-upload-wrapper"]}>
      <label className={styles["cover-image-upload-btn"]} htmlFor="cover-image-file">
        Upload cover image file:
      </label>
      <input
        id="cover-image-file"
        type="file"
        accept="image/png, image/jpeg, image/webp"
        multiple={false}
        onChange={(e) => setCoverImageFile(e.target.files)}
      />
      <div className={styles["cover-image-display-container"]}>
        {(coverImageFile !== null && coverImageFile[0] !== undefined) || coverImageUrl !== "" ? (
          <img
            src={
              coverImageFile === null || coverImageFile[0] === undefined
                ? coverImageUrl
                : URL.createObjectURL(coverImageFile[0])
            }
            alt="Cover image for new project entry"
          />
        ) : null}
      </div>
      <div className={styles["cover-image-remove-btn"]}></div>
    </div>
  );
}
