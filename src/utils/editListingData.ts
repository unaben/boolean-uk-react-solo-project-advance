import { BASEURL, LISTINGENDPOINT } from "../constant";
import { IListingInputData } from "../model/listings.types";
import { notifyError, notifySuccess } from "./Toast";

const editListingData = async (listingToUpdate:IListingInputData , listingToEditId: string | undefined) => {
  const fetchOptions = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(listingToUpdate),
  };
  try {
    const res = await fetch(
      `${BASEURL}/${LISTINGENDPOINT}/${listingToEditId}`,
      fetchOptions
    );
    const resData = await res.json();

    if(!res.ok){
      notifyError(`Unable to update listing id : ${listingToEditId}`);
    }

    notifySuccess(`Listing with id: ${listingToEditId} was updated successfully`)
    return resData;
  } catch (error) {
    if (error instanceof Error) {
      notifyError(`An error ocuured: ${JSON.stringify(error.message)} `);
      console.error(error.message);
    }
  }
};

export default editListingData;
