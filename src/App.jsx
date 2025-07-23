import Navbar from "./components/Navbar.jsx";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
function App() {
  return (
    <Provider store={appStore}>
      <>
        <div className="flex flex-col  max-h-[100%] ">
          <Navbar></Navbar>

          <Outlet></Outlet>
        </div>
      </>
    </Provider>
  );
}

export default App;
