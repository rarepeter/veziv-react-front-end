import { useEffect, useReducer } from "react";
import { ACTION_TYPES, INITIAL_STATE, projectsReducer } from "./publicPortfolioReducer";
import { PUBLIC_PROJECTS_URL } from "../../../data/urls";

export default function usePublicPortfolioEntries() {
  const [state, dispatch] = useReducer(projectsReducer, INITIAL_STATE);

  console.log(state)

  useEffect(() => {
    (async () => {
      dispatch({ type: ACTION_TYPES.FETCH_START });
      await fetch(PUBLIC_PROJECTS_URL)
        .then((res) => res.json())
        .then((resData) => {
          if (resData.statusCode >= 400) {
            dispatch({ type: ACTION_TYPES.FETCH_ERROR, err: resData.message });
          } else {
            dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: resData.portfolioEntries });
          }
        })
        .catch((err) => {
          dispatch({ type: ACTION_TYPES.FETCH_ERROR, err });
        });
    })();
  }, []);

  return [state];
}
