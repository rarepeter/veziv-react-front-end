import React, { FormEvent, useState } from "react";
import styles from "./PortfolioEntryAddForm.module.css";
import ImagesUploadSection from "./ImagesUploadSection/ImagesUploadSection";
import TextInput from "../../components/UI/TextInput/TextInput";
import { fetchFormDataWithAuth, fetchWithAuth } from "../../lib/interceptors/fetchInterceptor";
import { SERVER_URL } from "../../data/urls";

interface ICompositeObject {
  id: string;
  order: number;
  file: File;
  image: string;
}

export default function PortfolioEntryAddForm() {
  const [imagesInformation, setImagesInformation] = useState<ICompositeObject[]>([]);
  const [newPortfolioEntryInfo, setNewPortfolioEntryInfo] = useState({
    title: "",
    description: "",
    clientLink: "",
    clientReview: "",
    clientName: "",
    coverImageUrl: "",
    isPubliclyVisible: false,
  });
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
    }
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <TextInput
          labelText="Title:"
          name="title"
          onChange={(e) =>
            setNewPortfolioEntryInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
          value={newPortfolioEntryInfo.title}
        />
        <TextInput
          labelText="Description:"
          name="description"
          onChange={(e) =>
            setNewPortfolioEntryInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
          value={newPortfolioEntryInfo.description}
        />
        <TextInput
          labelText="Client name:"
          name="clientName"
          onChange={(e) =>
            setNewPortfolioEntryInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
          value={newPortfolioEntryInfo.clientName}
        />
        <TextInput
          labelText="Client link:"
          name="clientLink"
          onChange={(e) =>
            setNewPortfolioEntryInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
          value={newPortfolioEntryInfo.clientLink}
        />
        <TextInput
          labelText="Client review:"
          name="clientReview"
          onChange={(e) =>
            setNewPortfolioEntryInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
          value={newPortfolioEntryInfo.clientReview}
        />
        <TextInput
          labelText="Cover image URL:"
          name="coverImageUrl"
          onChange={(e) =>
            setNewPortfolioEntryInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
          value={newPortfolioEntryInfo.coverImageUrl}
        />
        <button type="submit">Submit!</button>
      </form>
      <ImagesUploadSection setImagesInformation={setImagesInformation} />
    </>
  );
}
