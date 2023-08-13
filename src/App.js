import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";


function App() {
  return (
    <Router>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Landing} />
    </Router>
  );
}

export default App;

// import "./App.css";
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Outlet,
//   Route,
//   RouterProvider,
// } from "react-router-dom";
// import Landing from "./pages/Landing";
// import Login from "./pages/Login";
// import NavBar from "./components/NavBar";
// import Signup from "./pages/Signup";

// function App(props) {
//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path="/" element={<Root />}>
//         <Route index element={<Landing />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/login" element={<Signup />} />
//       </Route>
//     )
//   );
//   return (
//     <div>
//       <RouterProvider router={router} />;
//     </div>
//   );
// }
// const Root = () => {
//   return (
//     <>
//       <NavBar />
//       <div>
//         <Outlet />
//       </div>
//     </>
//   );
// };

// export default App;
