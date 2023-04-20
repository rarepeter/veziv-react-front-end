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

export type { IPortfolioEntry };
