import { useMemo } from "react";
import { ICombinedState } from "../model/car.types";
import { useManageStateProvider } from "../Context/ManageStateContext";

const useGetListingId = (listingToEdit: ICombinedState | undefined) => {
  const { listingData } = useManageStateProvider();
  const listingId = useMemo(
    () => listingData?.find((list) => list.carId === listingToEdit?.carId)?.id,
    [listingData, listingToEdit?.carId]
  );
  return listingId;
};

export default useGetListingId;
