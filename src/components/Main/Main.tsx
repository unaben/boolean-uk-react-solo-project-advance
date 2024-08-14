import { useEffect } from "react";
import mergedData from "../../utils/mergeData";
import CreatedStockSection from "../CreateStockSection/CreatedStockSection";
import EditInventoryForm from "../EditInventoryForm";
import InventorySectionForm from "../InventorySectionForm";
import Header from "../Header/Header";
import { useManageStateProvider } from "../../Context/ManageStateContext";
import styles from "./Main.module.css";

const Main = () => {
  const {
    listingData,
    listingLoading,
    carData,
    carLoading,
    setListings,
    hideInventoryForm,
    hideUpdateForm,
    setCombinedStates,
  } = useManageStateProvider();

  useEffect(() => {
    setListings(listingData);
  }, [listingData]);

  useEffect(() => {
    setCombinedStates(mergedData(listingData, carData));
  }, [listingData, carData]);

  return (
    <>
      <Header />
      <div className={styles["main-container"]}>
        {listingLoading && carLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <main>
              <CreatedStockSection />
            </main>
          </div>
        )}
        <div>
          <div>
            {!hideInventoryForm && !hideUpdateForm && <InventorySectionForm />}
          </div>
          {!hideInventoryForm && hideUpdateForm && <EditInventoryForm />}
        </div>
      </div>
    </>
  );
};

export default Main;
