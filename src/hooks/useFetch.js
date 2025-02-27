import { useState, useEffect } from "react";

const useFetch = (URL) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(URL)
        .then((response) => {
          if (!response.ok) {
            throw Error("Could not find quiz questions");
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error.message);
          setIsLoading(false);
        });
    }, 1000);
  }, [URL]);

  return { data, isLoading };
};

export default useFetch;
