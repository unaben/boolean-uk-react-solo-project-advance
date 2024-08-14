import { ICarsToCreate, ICombinedState } from "../model/car.types";
import { IListing } from "../model/listings.types";

export interface IManageStateContext {
  listingData: IListing[];
  listingLoading: boolean ;
  carData: ICarsToCreate[];
  carLoading: boolean;
  listings: IListing[];
  setListings: React.Dispatch<React.SetStateAction<IListing[]>>;
  hideInventoryForm: boolean;
  setHideInventoryForm: React.Dispatch<React.SetStateAction<boolean>>;
  hideUpdateForm: boolean;
  setHideUpdateForm: React.Dispatch<React.SetStateAction<boolean>>;
  listingToEdit: ICombinedState | undefined;
  setListingToEdit: React.Dispatch<React.SetStateAction<ICombinedState | undefined>>;
  combinedStates: ICombinedState[];
  setCombinedStates: React.Dispatch<React.SetStateAction<ICombinedState[]>>;
  selectedFilter: string;
  setSelectedFilter: React.Dispatch<React.SetStateAction<string>>;
}
