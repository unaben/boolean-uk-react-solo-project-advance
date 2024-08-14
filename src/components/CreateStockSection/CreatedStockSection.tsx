import { useManageStateProvider } from "../../Context/ManageStateContext";
import List from "../List/List";
import styles from "./CreateStockSection.module.css";

const CreatedStockSection = () => {
  const { combinedStates, selectedFilter } = useManageStateProvider();

  return (
    <>
      {!combinedStates.length && <h2>No Listing Available</h2>}
      {!!combinedStates.length && (
        <ul style={{ width: "100%" }} className={styles["list"]}>
          {combinedStates
            .filter((listing) =>
              selectedFilter === listing.color?.toLowerCase() ||
              selectedFilter === ""
                ? true
                : false
            )
            .map((listing) => {
              return <List {...{ listing }} key={listing.id}/>;
            })}
        </ul>
      )}
    </>
  );
};

export default CreatedStockSection;
