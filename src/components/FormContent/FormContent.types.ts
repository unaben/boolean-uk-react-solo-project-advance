import { ICar, ICombinedState } from "../../model/car.types";
import { IListingInputData } from "../../model/listings.types";

export interface IFormContentProps {
    listing: IListingInputData;
    carData: ICar;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    setCarData: React.Dispatch<React.SetStateAction<ICar>>;
    setListing: React.Dispatch<React.SetStateAction<IListingInputData>>;
    setSoldVehicle?: React.Dispatch<React.SetStateAction<boolean>>;
    soldVehicle?: boolean;
    isDeleteButton?: boolean
  }