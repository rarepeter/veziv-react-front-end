const fetchWithAuth = async (url: RequestInfo | URL, options?: RequestInit | undefined) => {
  const authToken = localStorage.getItem("authToken");

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + authToken,
  };

  const rawResponse = await fetch(url, {
    ...options,
    headers,
  });

  return rawResponse;
};

const fetchFormDataWithAuth = async (url: RequestInfo | URL, options?: RequestInit | undefined) => {
  const authToken = localStorage.getItem("authToken");

  const headers = {
    Authorization: "Bearer " + authToken,
  };

  const rawResponse = await fetch(url, {
    ...options,
    headers,
  });

  return rawResponse;
};

export { fetchWithAuth, fetchFormDataWithAuth };
