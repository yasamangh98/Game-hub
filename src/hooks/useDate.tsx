import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

export interface FetchDataResponse<T> {
  count: number;
  results: T[];
}
export const useData = <T,>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  dependency?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<FetchDataResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((resp) => {
          setData(resp.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });

      return () => controller.abort();
    },
    dependency ? [...dependency] : []
  );
  return { data, error, isLoading };
};
export default useData;
