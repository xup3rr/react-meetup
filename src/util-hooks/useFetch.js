import { useState, useEffect } from "react";

export const useFetch = (options) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(options.url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, [options.url]);

  return {
    data,
  };
};
