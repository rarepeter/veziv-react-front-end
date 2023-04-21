import React, { useEffect, useState } from "react";
import styles from "./ImagesUploadSection.module.css";
import { v4 as uuidv4 } from "uuid";
import { IImageObject } from "../../../interfaces";
import FormPortfolioEntryImage from "../FormPortfolioEntryImage/FormPortfolioEntryImage";

export default function ImagesUploadSection({ setImagesInformation }: any) {
  const [imageObjectsArray, setImageObjectsArray] = useState<any>([]);

  console.log(imageObjectsArray);

  useEffect(() => {
    setImagesInformation(imageObjectsArray);
  }, [imageObjectsArray]);

  const handleAddFiles = (files: FileList | null) => {
    if (files === null) return;
    const filesArray = Array.from(files);

    const maxOrder = imageObjectsArray.reduce((max: number, compositeImageObject: IImageObject) => {
      return compositeImageObject.order > max ? compositeImageObject.order : max;
    }, 0);

    console.log(maxOrder);

    const compositeImageObjectsArray = filesArray.map((file, index) => {
      const imageBlob = URL.createObjectURL(file);
      return {
        id: uuidv4(),
        order: maxOrder === 0 ? index : maxOrder + index + 1,
        file: file,
        image: imageBlob,
      };
    });

    setImageObjectsArray((prev: any) => [...prev, ...compositeImageObjectsArray]);
  };

  const handleRemoveImage = (imageId: string) => {
    const { order } = imageObjectsArray.find((compositeImageObject: IImageObject) => {
      return compositeImageObject.id === imageId;
    });
    const newImageObjectsArray = imageObjectsArray
      .filter((compositeImageObject: IImageObject) => {
        return compositeImageObject.id !== imageId;
      })
      .map((compositeImageObject: IImageObject) => {
        if (compositeImageObject.order > order) {
          compositeImageObject.order -= 1;
          return compositeImageObject;
        }
        return compositeImageObject;
      });

    setImageObjectsArray(newImageObjectsArray);
  };

  const sortedImageObjectsArray = imageObjectsArray.sort((a: IImageObject, b: IImageObject) => {
    if (a.order > b.order) return 1;
    return -1;
  });

  return (
    <div className={styles["upload-images-wrapper"]}>
      <label htmlFor="portfolio-entry-add-images" className={styles["upload-images-button"]}>
        Add images
      </label>
      <input
        id="portfolio-entry-add-images"
        type="file"
        multiple
        accept="image/png, image/jpeg, image/webp"
        onChange={(e) => handleAddFiles(e.target.files)}
      />
      <div className={styles["upload-images__images-list"]}>
        {sortedImageObjectsArray.map((imageObject: IImageObject) => {
          return (
            <FormPortfolioEntryImage
              key={imageObject.id}
              imageObject={imageObject}
              onImageDelete={handleRemoveImage}
            />
          );
        })}
      </div>
    </div>
  );
}
