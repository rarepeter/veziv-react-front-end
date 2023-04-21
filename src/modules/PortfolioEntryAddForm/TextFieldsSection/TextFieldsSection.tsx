import React from "react";
import TextInput from "../../../components/UI/TextInput/TextInput";
import styles from "./TextFieldsSection.module.css";
import CtaButton from "../../../components/UI/CtaButton/CtaButton";
import { INewPortfolioEntryDto } from "../../../interfaces";

interface ITextFieldsSectionProps {
  newPortfolioEntryInfo: INewPortfolioEntryDto;
  setNewPortfolioEntryInfo: React.Dispatch<React.SetStateAction<INewPortfolioEntryDto>>;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  coverImageFile: FileList | null;
}

export default function TextFieldsSection({
  newPortfolioEntryInfo,
  setNewPortfolioEntryInfo,
  onSubmit,
  coverImageFile,
}: ITextFieldsSectionProps) {
  return (
    <form onSubmit={onSubmit} className={styles["form-wrapper"]}>
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
        disabled={coverImageFile === null || coverImageFile[0] === undefined ? false : true}
        labelText="Cover image URL:"
        name="coverImageUrl"
        onChange={(e) =>
          setNewPortfolioEntryInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        }
        value={newPortfolioEntryInfo.coverImageUrl}
      />
      <div className={styles["public-switch-btn"]}>
        <CtaButton
          type="button"
          className={styles["public-visibility-switch-btn"]}
          onClick={() =>
            setNewPortfolioEntryInfo((prev) => ({
              ...prev,
              isPubliclyVisible: !prev.isPubliclyVisible,
            }))
          }
        >
          Switch public visibility
        </CtaButton>
        <div>
          {newPortfolioEntryInfo.isPubliclyVisible
            ? "New portfolio entry will be publicly visible"
            : "New portfolio entry will be private"}
        </div>
      </div>
      <CtaButton type="submit">Submit!</CtaButton>
    </form>
  );
}
