import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { BASEURL, LISTINGENDPOINT, CARENDPOINT } from "../constant";
import useFetchApiData from "../hooks/useFetchApiData";
import { ICarsToCreate, ICombinedState } from "../model/car.types";
import { IListing } from "../model/listings.types";
import { IManageStateContext } from "./manageStateContest.types";

const ManageStateContext = createContext<IManageStateContext | undefined>(
  undefined
);

const ManageStateProvider: FC<PropsWithChildren> = ({ children }) => {
  const {
    state: { data: listingData, isLoading: listingLoading },
  } = useFetchApiData<IListing>(BASEURL, LISTINGENDPOINT);
  const {
    state: { data: carData, isLoading: carLoading },
  } = useFetchApiData<ICarsToCreate>(BASEURL, CARENDPOINT);

  const [listings, setListings] = useState<IListing[]>(listingData);
  const [hideInventoryForm, setHideInventoryForm] = useState(true);
  const [hideUpdateForm, setHideUpdateForm] = useState<boolean>(false);
  const [listingToEdit, setListingToEdit] = useState<
    ICombinedState | undefined
  >(undefined);
  const [combinedStates, setCombinedStates] = useState<ICombinedState[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>("");



  return (
    <ManageStateContext.Provider
      value={{
        listingData,
        listingLoading,
        carData,
        carLoading,
        listings,
        setListings,
        hideInventoryForm,
        setHideInventoryForm,
        hideUpdateForm,
        setHideUpdateForm,
        listingToEdit,
        setListingToEdit,
        combinedStates,
        setCombinedStates,
        selectedFilter,
        setSelectedFilter,
      }}
    >
      {children}
    </ManageStateContext.Provider>
  );
};
export default ManageStateProvider;

export const useManageStateProvider = () => {
  const data = useContext(ManageStateContext);

  if (data === undefined) {
    throw new Error("Component must be wrapped in <ManageStateContext />");
  }
  return data;
};
