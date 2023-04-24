import React, { FormEvent, useState } from "react";
import styles from "./PortfolioEntryAddForm.module.css";
import ImagesUploadSection from "./ImagesUploadSection/ImagesUploadSection";
import { fetchFormDataWithAuth, fetchWithAuth } from "../../lib/interceptors/fetchInterceptor";
import { SERVER_URL } from "../../data/urls";
import TextFieldsSection from "./TextFieldsSection/TextFieldsSection";
import CoverImageUploadSection from "./CoverImageUploadSection/CoverImageUploadSection";
import { IImageObject, INewPortfolioEntryDto } from "../../interfaces";
import { useNavigate } from "react-router-dom";

export default function PortfolioEntryAddForm() {
  const navigate = useNavigate();
  const [imagesInformation, setImagesInformation] = useState<IImageObject[]>([]);
  const [newPortfolioEntryInfo, setNewPortfolioEntryInfo] = useState<INewPortfolioEntryDto>({
    title: "",
    description: "",
    clientLink: "",
    clientReview: "",
    clientName: "",
    coverImageUrl: "",
    isPubliclyVisible: false,
  });

  const [coverImageFile, setCoverImageFile] = useState<FileList | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await fetchWithAuth(`${SERVER_URL}/portfolio-entries`, {
      method: "POST",
      body: JSON.stringify(newPortfolioEntryInfo),
    });

    if (response.ok) {
      const responseData = await response.json();
      const newPortfolioEntryId = responseData.id;

      for (let i = 0; i < imagesInformation.length; i++) {
        const fd = new FormData();
        fd.append("image", imagesInformation[i].file);

        const data = await fetchFormDataWithAuth(
          `${SERVER_URL}/images/${newPortfolioEntryId}?orderNum=${imagesInformation[i].order}`,
          {
            method: "POST",
            body: fd,
          }
        );
      }

      if (coverImageFile !== null && coverImageFile[0] !== undefined) {
        const coverImageFd = new FormData();
        coverImageFd.append("image", coverImageFile[0]);

        const data = await fetchFormDataWithAuth(
          `${SERVER_URL}/images/cover-image/${newPortfolioEntryId}`,
          {
            method: "POST",
            body: coverImageFd,
          }
        );
      }
      navigate("/projects-management");
    }
  };

  return (
    <>
      <TextFieldsSection
        newPortfolioEntryInfo={newPortfolioEntryInfo}
        setNewPortfolioEntryInfo={setNewPortfolioEntryInfo}
        onSubmit={(e: React.FormEvent) => handleSubmit(e)}
        coverImageFile={coverImageFile}
      />
      <ImagesUploadSection setImagesInformation={setImagesInformation} />
      <CoverImageUploadSection
        coverImageFile={coverImageFile}
        coverImageUrl={newPortfolioEntryInfo.coverImageUrl}
        setCoverImageFile={setCoverImageFile}
      />
    </>
  );
}
