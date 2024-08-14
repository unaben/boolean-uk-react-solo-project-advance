import { ICar, ICombinedState } from "../../model/car.types";
import { IListingInputData } from "../../model/listings.types";
import Button from "../Button/Button";
import deleteCar from "../../utils/deleteCar";
import deleteListing from "../../utils/deleteListing";
import useGetListingId from "../../hooks/useGetListingId";
import { IFormContentProps } from "./FormContent.types";
import { useManageStateProvider } from "../../Context/ManageStateContext";

const FormContent = ({
  listing,
  carData,
  handleSubmit,
  setCarData,
  setListing,
  setSoldVehicle,
  soldVehicle,
  isDeleteButton
}: IFormContentProps) => {
  const {
    listingToEdit,
    combinedStates,
    setCombinedStates,
    setHideUpdateForm,
    setHideInventoryForm,
  } = useManageStateProvider();

  const handleListingInputDataChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setListing((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleCarInputDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCarData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const listingId = useGetListingId(listingToEdit);

  const handleDelete = async () => {
    await deleteCar(listingToEdit?.carId ?? "");
    await deleteListing(listingId ?? "");
    const filteredData = combinedStates?.filter(
      (data) => data.id !== listingToEdit?.id
    );
    if (setCombinedStates && filteredData) {
      setCombinedStates(filteredData);
    }
    if (setHideUpdateForm && setHideInventoryForm) {
      setHideUpdateForm(false);
      setHideInventoryForm(true);
    }
  };

  return (
    <form className="form-input" onSubmit={handleSubmit}>
      <h2 className="form-title">Inventory Section</h2>

      <label className="form-label">
        Title
        <input
          className="label-radius"
          id="title"
          name="title"
          type="text"
          placeholder="Enter vehicle title"
          onChange={handleListingInputDataChange}
          value={listing.title}
        />
      </label>

      <label className="form-label">
        Description
        <input
          className="label-radius"
          id="description"
          name="description"
          type="text"
          onChange={handleListingInputDataChange}
          value={listing.description}
        />
      </label>

      <label className="form-label">
        Price
        <input
          className="label-radius"
          id="price"
          name="price"
          type="text"
          onChange={handleListingInputDataChange}
          value={listing.price}
        />
      </label>

      <label className="form-label">
        Make
        <input
          className="label-radius"
          id="make"
          name="make"
          type="text"
          onChange={handleCarInputDataChange}
          value={carData.make}
        />
      </label>

      <label className="form-label">
        Model
        <input
          className="label-radius"
          id="model"
          name="model"
          type="text"
          onChange={handleCarInputDataChange}
          value={carData.model}
        />
      </label>

      <label className="form-label">
        Color
        <input
          className="label-radius"
          id="color"
          name="color"
          type="text"
          onChange={handleCarInputDataChange}
          value={carData.color}
        />
      </label>

      <label className="form-label">
        Year
        <input
          className="label-radius"
          id="year"
          name="year"
          type="number"
          onChange={handleCarInputDataChange}
          value={carData.year}
        />
      </label>

      <label className="form-label">
        Vehicle Image
        <input
          className="label-radius"
          id="image"
          name="image"
          type="url"
          onChange={handleListingInputDataChange}
          value={listing.image}
        />
      </label>

      <label className="form-checkbox-label">
        <input
          id="sold-checkbox"
          name="sold-checkbox"
          type="checkbox"
          onChange={() => setSoldVehicle && setSoldVehicle((prev) => !prev)}
          checked={soldVehicle}
        />
        Sold
      </label>

      <div className="btn-content">
        <Button
          label={isDeleteButton ? "Update" : "Create"}
          className="form-label btn"
          type="submit"
        />
        {isDeleteButton && (
          <Button
            onClick={handleDelete}
            label="Delete"
            className="btn"
            type="button"
          />
        )}
        {!isDeleteButton && (
          <Button label="Reset" className="form-label btn" type="reset" />
        )}
      </div>
    </form>
  );
};

export default FormContent;
