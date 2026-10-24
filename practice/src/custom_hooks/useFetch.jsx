import { useState, useEffect } from "react";

const useFetch = (url) => {

  // API se aane wala data store karega
  const [data, setData] = useState({});

  // API call chal rahi hai ya nahi
  const [loading, setLoading] = useState(true);

  // Agar koi error aaye to usko store karega
  const [error, setError] = useState(null);

  useEffect(() => {

    // Har request ke liye naya AbortController
    const controller = new AbortController();

    // API call karne wala async function
    const fetchData = async () => {

      try {

        // API request bhejna
        const response = await fetch(url, {
          signal: controller.signal, // Request ko cancel karne ke liye signal
        });

        // Agar response success na ho to custom error throw karo
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        // Response ko JSON mein convert karo
        const result = await response.json();

        // Data state update karo
        setData(result);

      } catch (error) {

        // AbortError ko ignore karo
        if (error.name !== "AbortError") {
          setError(error);
        }

      } finally {

        // Success ya Error dono cases mein loading false kar do
        setLoading(false);
      }
    };

    // Function ko call karo
    fetchData();

    // Cleanup Function
    return () => {

      // Component unmount ya url change hone par request cancel kar do
      controller.abort();
    };

  }, [url]);

  // Component ko data, loading aur error return karo
  return {
    data,
    loading,
    error,
  };
};

export default useFetch;