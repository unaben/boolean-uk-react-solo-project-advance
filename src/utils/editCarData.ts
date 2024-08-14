import { BASEURL, CARENDPOINT } from "../constant";
import { ICar } from "../model/car.types";
import { notifyError, notifySuccess } from "./Toast";

const editCarData = async (carsToUpdate: ICar, id: string) => {
  const fetchOptions = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(carsToUpdate),
  };

  try {
    const res = await fetch(`${BASEURL}/${CARENDPOINT}/${id}`, fetchOptions);
    const resData = await res.json();

    if(!res.ok){
      notifyError(`Unable to update car id : ${id}`);
    }

    notifySuccess(`Car with id: ${id} was updated successfully`)
    return resData;
  } catch (error) {
    if (error instanceof Error) {
      notifyError(`An error ocuured: ${JSON.stringify(error.message)} `);
      console.error(error.message);
    }
  }
};

export default editCarData;
