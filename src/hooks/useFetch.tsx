import { useState, useEffect } from "react";
import API from "@/API";
import { AxiosResponse } from "axios";

export default function useFetch<T>(
  url: string
): [unknown | null, boolean, (element: unknown) => void] {
  const [fetchedElement, setFetchedElement] = useState<unknown | null>(null);

  const handleSetFetchedElement = (element: unknown) => {
    setFetchedElement(element);
  };

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchElement() {
      try {
        await API.get(url)
          .then((response) => {
            setFetchedElement(response.data.data);
          })
          .finally(() => setIsLoading(false));
      } catch (error) {
        console.error("Error al obtener elemento:", error);
      }
    }
    fetchElement();
  }, [url]);

  /**
   * We return fetchedElement.data because we want to return the data property, not the whole object
   */
  return [fetchedElement, isLoading, handleSetFetchedElement];
}
