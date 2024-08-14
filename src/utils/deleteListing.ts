
import { BASEURL,  LISTINGENDPOINT } from "../constant";
import { notifyError, notifySuccess } from "./Toast";

const deleteListing = async (id: string) => {
  try {
    const res = await fetch(`${BASEURL}/${LISTINGENDPOINT}/${id}`, {
      method: "DELETE",
    });
    if(!res.ok){
      notifyError(`Unable to delete listing id : ${id}`);
    }
    notifySuccess(`Listing with id: ${id} was deleted successfully`)
    return res;
    
  } catch (error) {
    if (error instanceof Error) {
      notifyError(`An error ocuured: ${JSON.stringify(error.message)} `);
      console.error(error.message);
    }
  }
};

export default deleteListing;
