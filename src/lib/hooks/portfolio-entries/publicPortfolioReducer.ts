import { IPortfolioEntry } from "../../../interfaces/portfolioEntry";

interface PublicPortfolioEntriesHookState {
  loading: boolean;
  projects: IPortfolioEntry[] | undefined;
  error: string | undefined;
}

export const INITIAL_STATE: PublicPortfolioEntriesHookState = {
  loading: true,
  projects: [],
  error: "",
};

interface Action {
  type: ACTION_TYPES;
  payload?: IPortfolioEntry[];
  err?: string;
}

export enum ACTION_TYPES {
  FETCH_START = "FETCH_START",
  FETCH_SUCCESS = "FETCH_SUCCESS",
  FETCH_ERROR = "FETCH_ERROR",
}

export const projectsReducer = (
  state: PublicPortfolioEntriesHookState,
  action: Action
): typeof INITIAL_STATE => {
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
