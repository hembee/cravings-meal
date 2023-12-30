import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import { useState } from "react";

function App(props) {
  const token = localStorage.getItem("authToken");

  const [login, setLogin] = useState(token);
  const loginHandler = () => {
    setLogin((prevLogin) => !prevLogin);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root login={login} />}>
        <Route index element={<Landing />} />
        <Route path="/login" element={<Login loginHandler={loginHandler} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
const Root = ({ login, loginHandler }) => {
  return (
    <>
      <NavBar login={login} loginHandler={loginHandler} />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
