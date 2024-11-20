import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Employees from "./components/Employees";
import Receipts from "./components/Receipts";
import Products from "./components/Products";
import Movies from "./components/Movies";
import Theaters from "./components/Theaters";
import Settings from "./components/Settings";
import NavSelection from "./components/NavSelection";
import ProfileImg from "./assets/images/profile.png";
import HomeImg from "./assets/images/home.svg";
import EmployeesImg from "./assets/images/employees.svg";
import MoviesImg from "./assets/images/movies.svg";
import ProductsImg from "./assets/images/products.svg";
import TheatersImg from "./assets/images/theaters.svg";
import ReceiptsImg from "./assets/images/receipts.svg";
import SettingsImg from "./assets/images/settings.svg";
import Login from "./components/Login";

function App() {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const handleOpenPopUpClick = () => {
    setIsPopUpVisible(true);
  };

  const handleClosePopUpClick = () => {
    setIsPopUpVisible(false);
  };

  return (
    <Router>
      <div className="App bg-dark-gray min-h-screen w-full relative">
        <Header
          ProfileName={"Nguyen Van A"}
          ProfileRole={"Admin"}
          ProfilePic={ProfileImg}
        />
        <div className="main-layout flex flex-1">
          <NavBar
            topChildren={[
              <NavSelection icon={HomeImg} title="Home" to="/" />,
              <NavSelection
                icon={EmployeesImg}
                title="Employees"
                to="/employees"
              />,
              <NavSelection icon={MoviesImg} title="Movies" to="/movies" />,
              <NavSelection
                icon={ProductsImg}
                title="Products"
                to="/products"
              />,
              <NavSelection
                icon={TheatersImg}
                title="Theaters"
                to="/theaters"
              />,
              <NavSelection
                icon={ReceiptsImg}
                title="Receipts"
                to="/receipts"
              />,
            ]}
            notificationChildren={<div>Notification Content</div>}
            botChildren={[
              <NavSelection
                icon={SettingsImg}
                title="Settings"
                to="/settings"
              />,
            ]}
          />
          <div className="content flex-1 mx-12 my-4 overflow-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/products" element={<Products />} />
              <Route path="/theaters" element={<Theaters />} />
              <Route path="/receipts" element={<Receipts />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
          <div
            className="fixed top-[3%] left-[20%] bg-line-gray text-white"
            onClick={handleOpenPopUpClick}
          >
            Open Login
          </div>
        </div>
        {isPopUpVisible && (
          <>
            <div className="overlay"></div>
            <Login
              className="login-modal"
              handleCloseClick={handleClosePopUpClick}
              handleLoginClick={handleClosePopUpClick}
            />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
