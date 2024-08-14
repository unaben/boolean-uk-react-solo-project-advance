import cn from "classnames";
import Select from "../Select";
import Button from "../Button/Button";
import { useManageStateProvider } from "../../Context/ManageStateContext";
import styles from "./Header.module.css";

const Header = () => {
  const { hideInventoryForm, setHideInventoryForm, setHideUpdateForm } =
    useManageStateProvider();
  return (
    <header className={styles["header-content"]}>
      <h2>VEHICLES IN STOCK</h2>
      <div className={styles["button-content"]}>
        <Select />
        <Button
          className={cn(styles["btn"], {
            [styles["btn-cancel"]]: !hideInventoryForm,
          })}
          onClick={() => {
            setHideInventoryForm(!hideInventoryForm);
            setHideUpdateForm(false);
          }}
          label={hideInventoryForm ? "Create" : "Cancel"}
        />
      </div>
    </header>
  );
};

export default Header;
