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

interface PublicPortfolioEntriesHookState {
  loading: boolean;
  projects: IPortfolioEntry[];
  error: string;
}

export const INITIAL_STATE: PublicPortfolioEntriesHookState = {
  loading: true,
  projects: [],
  error: "",
};

interface Action {
  type: ACTION_TYPES;
  payload?: {};
  err?: string;
}

export enum ACTION_TYPES {
  FETCH_START = "FETCH_START",
  FETCH_SUCCESS = "FETCH_SUCCESS",
  FETCH_ERROR = "FETCH_ERROR",
}

export const projectsReducer = (state: any, action: Action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_START:
      return {
        loading: false,
        error: "",
        projects: [],
      };
    case ACTION_TYPES.FETCH_SUCCESS:
      return {
        loading: false,
        error: "",
        projects: action.payload,
      };
    case ACTION_TYPES.FETCH_ERROR:
      return {
        loading: false,
        error: action.err,
        projects: [],
      };
    default: {
      return state;
    }
  }
};
