import { BASEURL, CARENDPOINT } from "../constant";
import { ICar, ICarsToCreate } from "../model/car.types";
import { notifyError, notifySuccess } from "./Toast";

const postCarData = async (carData: ICar, id: string) => {
  const carsToCreate: ICarsToCreate = {
    id: id,
    make: carData.make,
    model: carData.model,
    color: carData.color,
    year: carData.year,
  };
  
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(carsToCreate),
  };
  try {
    const res = await fetch(`${BASEURL}/${CARENDPOINT}`, fetchOptions);
    const carData = await res.json();

    if(!res.ok){
      notifyError(`Unable to create car data`);
    }

    notifySuccess(`Car data created successfully`)
    return carData;
  } catch (error) {
    if (error instanceof Error) {
      notifyError(`An error ocuured: ${JSON.stringify(error.message)} `);
      console.error(error.message);
    }
  }
};
export default postCarData;
