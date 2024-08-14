import React, { useState } from "react";
import type { IListingInputData } from "../model/listings.types";
import { ICar } from "../model/car.types";
import FormContent from "./FormContent/FormContent";
import scrollToTop from "../utils/scrollToTop";
import editListingData from "../utils/editListingData";
import editCarData from "../utils/editCarData";
import useGetListingId from "../hooks/useGetListingId";
import { useManageStateProvider } from "../Context/ManageStateContext";

const EditInventoryForm = () => {
  const {
    combinedStates,
    listingToEdit,
    setCombinedStates,
    setHideUpdateForm,
    setHideInventoryForm,
  } = useManageStateProvider();
  
  // listing
  const [listing, setListing] = useState<IListingInputData>({
    title: listingToEdit?.title ?? "",
    description: listingToEdit?.description ?? "",
    price: listingToEdit?.price ?? "",
    image: listingToEdit?.image ?? "",
  });
  // cars
  const [carData, setCarData] = useState<ICar>({
    model: listingToEdit?.model ?? "",
    make: listingToEdit?.make ?? "",
    color: listingToEdit?.color ?? "",
    year: listingToEdit?.year ?? "",
  });
  const [soldVehicle, setSoldVehicle] = useState<boolean>(
    listingToEdit?.soldVehicle ?? false
  );

  const listingToEditId = useGetListingId(listingToEdit);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newListingData = await editListingData(listing, listingToEditId);
    const newCarData = await editCarData(carData, listingToEdit?.carId ?? "");

    const updatedListings = combinedStates.map((data) => {
      if (data.id === listingToEdit?.id) {
        return { ...data, ...newListingData, ...newCarData };
      }
      return data;
    });

    if (setCombinedStates && updatedListings) {
      setCombinedStates(updatedListings);
    }
    if (setHideUpdateForm && setHideInventoryForm) {
      setHideUpdateForm(false);
      setHideInventoryForm(true);
    }
    scrollToTop();
  };

  return (
    <div>
      <aside className="update-section box">
        <FormContent
          {...{
            listing,
            carData,
            handleSubmit,
            setCarData,
            setListing,
            soldVehicle,
            setSoldVehicle,
          }}
          isDeleteButton
        />
      </aside>
    </div>
  );
};

export default EditInventoryForm;
