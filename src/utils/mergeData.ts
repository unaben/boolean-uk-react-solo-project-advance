import { ICarsToCreate } from "../model/car.types";
import { IListing } from "../model/listings.types";

const mergedData = (dataOne: IListing[], dataTwo: ICarsToCreate[]) => {
  return dataOne.map((list) => ({
    ...list,
    ...dataTwo.find((car) => {
      return car.id === list.carId;
    }),
  }));
};
export default mergedData;
