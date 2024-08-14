import { BASEURL, CARENDPOINT } from "../constant";
import { notifyError, notifySuccess } from "./Toast";

const deleteCar = async (id: string) => {
  try {
    const res = await fetch(`${BASEURL}/${CARENDPOINT}/${id}`, {
      method: "DELETE",
    });
    if(!res.ok){
      notifyError(`Unable to delete car id : ${id}`);
    }
    notifySuccess(`Car with id: ${id} was deleted successfully`);
    return res;
  } catch (error) {
    if (error instanceof Error) {
      notifyError(`An error ocuured: ${JSON.stringify(error.message)} `);
      console.error(error.message);
    }
  }
};

export default deleteCar;
