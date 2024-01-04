import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

interface ApiResponse<Data> {
  results: Data;
}

export interface FetchProps<Data> {
  data: Data | null;
  loading: boolean;
  error: Error | null;
}

export function useFetch<Data>(url: string): FetchProps<Data> {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response: AxiosResponse<ApiResponse<Data>> = await axios(url);
        setData(response.data.results);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error("An unknown error occurred."));
        }
      } finally {
        setLoading(false);
      }
    };
    setData(null);
    fetchData();
  }, [url]);

  return { data, loading, error };
}
