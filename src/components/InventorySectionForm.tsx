import React from "react";
import { useState } from "react";
import { IListingInputData } from "../model/listings.types";
import { ICar } from "../model/car.types";
import postCarData from "../utils/postCardData";
import postListingData from "../utils/postListingData";
import FormContent from "./FormContent/FormContent";
import generateRandomId from "../utils/generateRandomId";
import scrollToTop from "../utils/scrollToTop";
import { useManageStateProvider } from "../Context/ManageStateContext";
import { notifyError } from "../utils/Toast";

const InventorySectionForm = () => {
  // listing
  const [listing, setListing] = useState<IListingInputData>({
    title: "",
    description: "",
    price: "",
    image: "",
  });
  // cars
  const [carData, setCarData] = useState<ICar>({
    model: "",
    make: "",
    color: "",
    year: "",
  });
  const { setCombinedStates, combinedStates } = useManageStateProvider();
  const [soldVehicle, setSoldVehicle] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(listing.description === '' || listing.image === '' || listing.price === '' || listing.title === '' || carData.color === '' || carData.make === '' || carData.model === '' || carData.year === ""){
      notifyError(`All fields are manadatory`);
      return
    }

    const id = generateRandomId();
    console.log('generateRandomId:',{id});
    const newlist = await postListingData(listing, soldVehicle, id);
    const newcar = await postCarData(carData, id);

    const dataToAdd = [...combinedStates, { ...newlist, ...newcar }];
    setCombinedStates(dataToAdd);
    scrollToTop();
    setListing({
      title: "",
      description: "",
      price: "",
      image: "",
    });
    setCarData({
      model: "",
      make: "",
      color: "",
      year: "",
    });
    setSoldVehicle(false);
  };

  return (
    <aside className="">
      <FormContent
        {...{
          listing,
          carData,
          handleSubmit,
          setCarData,
          setListing,
          setSoldVehicle,
          soldVehicle,
        }}
      />
    </aside>
  );
};

export default InventorySectionForm;
