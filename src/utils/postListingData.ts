import { BASEURL, LISTINGENDPOINT } from "../constant";
import { IListing, IListingInputData } from "../model/listings.types";
import { notifyError, notifySuccess } from "./Toast";

const postListingData = async (
  listing: IListingInputData,
  soldVehicle: boolean,
  id: string
) => {
  const listingToCreate: IListing = {
    id: `~${Math.random().toString(36).substring(2, 9).toString()}`,
    title: listing.title,
    description: listing.description,
    price: listing.price,
    soldVehicle,
    image: listing.image,
    carId: id,
  };
console.log('listing:',{id});

  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(listingToCreate),
  };
  try {
    const res = await fetch(`${BASEURL}/${LISTINGENDPOINT}`, fetchOptions);
    const listing = await res.json();

    if (!res.ok) {
      notifyError(`Unable to create listing data`);
    }

    notifySuccess(`Listing data created successfully`);
    return listing;
  } catch (error) {
    if (error instanceof Error) {
      notifyError(`An error ocuured: ${JSON.stringify(error.message)} `);
      console.error(error.message);
    }
  }
};

export default postListingData;
