import { IListing } from "./listings.types";

export interface ICar {
  model: string;
  make: string;
  color: string;
  year: string;
}

export type ICarsToCreate = ICar & { id: string };

export type ICombinedState = {
  model?: string | undefined;
  make?: string | undefined;
  color?: string | undefined;
  year?: string | undefined;
  id: string | number;
  title: string;
  description: string;
  price: string;
  soldVehicle: boolean;
  image: string;
  carId: string;
};
