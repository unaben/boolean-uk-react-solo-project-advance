import Main from "./components/Main/Main";
import ManageStateProvider from "./Context/ManageStateContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import styles from "./App.module.css";


const App = () => {
  return (
    <div className={styles.container}>
      <ManageStateProvider>
        <Main />
      </ManageStateProvider>
      <ToastContainer />
    </div>
  );
};

export default App;
