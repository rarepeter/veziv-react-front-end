interface IPortfolioEntry {
  id: string;
  title: string;
  description: string;
  clientName: string;
  clientLink: string;
  clientReview: string;
  coverImageUrl: string;
  isPubliclyVisible?: boolean;
}

interface INewPortfolioEntryDto {
  title: string;
  description: string;
  clientLink: string;
  clientReview: string;
  clientName: string;
  coverImageUrl: string;
  isPubliclyVisible: boolean;
}

export type { IPortfolioEntry, INewPortfolioEntryDto };
