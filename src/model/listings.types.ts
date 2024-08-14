import { ICar } from "./car.types";

export interface IListing {
  title:string;
  description: string;
  price: string;
  soldVehicle: boolean;
  image: string;
  carId: string;
  id: string;
}

export interface IListingToEdit {
  title: string;
  description: string;
  price: string;
  soldVehicle: boolean;
  image: string;
  car: ICar
}

export type IListingInputData = Omit<IListing, "carId" | "id" | 'soldVehicle'>