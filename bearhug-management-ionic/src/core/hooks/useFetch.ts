import { useState } from "react";

type ErrorType = Error | null;

interface FetchParams<T> {
  data: T | null;
  loading: boolean;
  error: ErrorType;
  launcher: () => void;
}

export function useFetch<T>(endpoint: string): FetchParams<T> {
  const [data, setData] = useState<T>({} as T);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorType>(null);

  const fetchData = async (body: unknown) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8080/${endpoint}`, {
        method: "POST",
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("Ha ocurrido un error en la petición");
      }

      const json = await response.json();
      setData(json);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  const launcher = () => {
    fetchData(endpoint);
  };

  return { data, loading, error, launcher };
}
