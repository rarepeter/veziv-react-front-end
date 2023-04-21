import React, { useEffect, useState } from "react";
import styles from "./ImagesUploadSection.module.css";
import { v4 as uuidv4 } from "uuid";

interface ICompositeObject {
  id: string;
  order: number;
  file: File;
  image: string;
}

export default function ImagesUploadSection({ setImagesInformation }: any) {
  const [imageObjectsArray, setImageObjectsArray] = useState<any>([]);

  useEffect(() => {
    setImagesInformation(imageObjectsArray);
  }, [imageObjectsArray]);

  const handleAddFiles = (files: FileList | null) => {
    if (files === null) return;
    const filesArray = Array.from(files);

    const maxOrder = imageObjectsArray.reduce(
      (max: number, compositeImageObject: ICompositeObject) => {
        return compositeImageObject.order > max ? compositeImageObject.order : max;
      },
      0
    );

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
    const { order } = imageObjectsArray.find((compositeImageObject: ICompositeObject) => {
      return compositeImageObject.id === imageId;
    });
    const newImageObjectsArray = imageObjectsArray
      .filter((compositeImageObject: ICompositeObject) => {
        return compositeImageObject.id !== imageId;
      })
      .map((compositeImageObject: ICompositeObject) => {
        if (compositeImageObject.order > order) {
          compositeImageObject.order -= 1;
          return compositeImageObject;
        }
        return compositeImageObject;
      });

    setImageObjectsArray(newImageObjectsArray);
  };

  const sortedImageObjectsArray = imageObjectsArray.sort(
    (a: ICompositeObject, b: ICompositeObject) => {
      if (a.order < b.order) return 1;
      return -1;
    }
  );
  return (
    <>
      <div>
        <input
          type="file"
          multiple
          accept="image/png, image/jpeg, image/webp"
          onChange={(e) => handleAddFiles(e.target.files)}
        />
      </div>
      {sortedImageObjectsArray.map((file: any) => {
        return (
          <React.Fragment key={file.id}>
            <img src={file.image} alt="AAA" />
            <div>{file.order + 1}</div>
            <button onClick={() => handleRemoveImage(file.id)}>Remove image</button>
          </React.Fragment>
        );
      })}
    </>
  );
}
