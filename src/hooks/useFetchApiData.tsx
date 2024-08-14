import { useEffect, useState } from "react";
import { ApiResponse } from "../model/apiResponse.types";

function useFetchApiData<T>(baseUrl: string, endpoint: string) {
  const [state, setState] = useState<ApiResponse<T>>({
    data: [],
    isLoading: false,
  });

  const fetchData = async () => {
    setState({ ...state, isLoading: true });
    try {
      const res = await fetch(`${baseUrl}/${endpoint}`);
      const resData: Array<T> = await res.json();
      if (!res.ok) {
        throw Error("Unable to fetch data");
      }
      setState({ data: resData, isLoading: false });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [baseUrl, endpoint]);

  return {state, fetchData};
}

export default useFetchApiData;
