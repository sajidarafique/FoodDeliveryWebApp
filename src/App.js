import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import RestList from "./pages/restList/RestList";
import ApproveRestList from "./pages/ApproveRest/ApproveRestList";
import AppRestTable from "./components/datatable/ApproveRestTable";
import Single from "./pages/single/Single";
import Single1 from "./pages/single/Single1";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { userInputs } from "./formSource";
import { productInputs } from "./restSouce";
import "./style/dark.scss";
import { useContext } from "react";
//import { DarkModeContext } from "./context/darkModeContext";

function App() {
  //const { darkMode } = useContext(DarkModeContext);

  return (
    //<div className={darkMode ? "app dark" : "app"}>
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="customers">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
          
          </Route>
            <Route path="restaurants">
              <Route index element={<RestList />} />
              <Route path=":restaurantsId" element={<Single1 />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
            <Route path="approverestaurants">
              <Route index element={<ApproveRestList />} />
              <Route path=":restaurantsId1" element={<Single1 />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
  </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
