import { useManageStateProvider } from "../../Context/ManageStateContext";
import { ICombinedState } from "../../model/car.types";
import { capitalizeFirstLetter } from "../../utils/capitalize";
import scrollToTop from "../../utils/scrollToTop";
import Button from "../Button/Button";
import styles from "./List.module.css";

const List = ({ listing }: { listing: ICombinedState }) => {
  const { setListingToEdit, setHideUpdateForm, setHideInventoryForm } =
    useManageStateProvider();

  return (
    <li className={styles["list-items"]}>
      <div className={styles["image-content"]}>
        <div>
          <img width="100%" height="200px" src={listing.image} alt="" />
          <div>
            <p>
              {listing.make} {listing.model}
            </p>
            <div className={styles["text-content"]}>
              <small> {capitalizeFirstLetter(listing.description ?? "")}</small>
              <small>Color: {capitalizeFirstLetter(listing.color ?? "")}</small>
              <small>Year: {listing.year}</small>
              <small>Value: £{listing.price}</small>
            </div>

            <Button
              className={styles["btn"]}
              onClick={() => {
                setListingToEdit(listing);
                setHideInventoryForm(false);
                setHideUpdateForm(true);
                scrollToTop();
              }}
              label="Edit"
            />
          </div>
        </div>
      </div>
    </li>
  );
};

export default List;
