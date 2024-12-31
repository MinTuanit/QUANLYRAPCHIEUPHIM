import React, { useState } from "react";
import { Route,  Routes, useLocation } from "react-router-dom";
import AdminHeader from "./Header";
import NavBar from "./NavBar";
import AdminHome from "./Home";
import Users from "./Users";
import Employees from "./Employees";
import Orders from "./Orders";
import Products from "./Products";
import Movies from "./Movies";
import Rooms from "./Rooms";
import Showtimes from "./Showtimes";
import Settings from "./Settings";
import NavSelection from "./NavSelection";
import ProfileImg from "./../../assets/images/profile.png";
import HomeImg from "./../../assets/images/home.svg";
import EmployeesImg from "./../../assets/images/employees.svg";
import MoviesImg from "./../../assets/images/movies.svg";
import ProductsImg from "./../../assets/images/products.svg";
import TheatersImg from "./../../assets/images/theaters.svg";
import ReceiptsImg from "./../../assets/images/receipts.svg";
import SettingsImg from "./../../assets/images/settings.svg";
import ShowtimesImg from "./../../assets/images/showtimes.svg";
import Login from "./Login";

function Admin() {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const location = useLocation();

  const handleOpenPopUpClick = () => {
    setIsPopUpVisible(true);
  };

  const handleClosePopUpClick = () => {
    setIsPopUpVisible(false);
  };

  return (
    <div className="bg-dark-gray min-h-screen w-full relative">
      <AdminHeader
        ProfileName={"Nguyen Van A"}
        ProfileRole={"Admin"}
        ProfilePic={ProfileImg}
      />
      <div className="main-layout flex flex-1 mt-[50px]">
        <NavBar
          topChildren={[
            <NavSelection icon={HomeImg} title="Home" to="" isSelected={location.pathname === "/admin"} />,
            <NavSelection icon={EmployeesImg} title="Users" to="users" isSelected={location.pathname === "/admin/users"} />,
            <NavSelection icon={EmployeesImg} title="Employees" to="employees" isSelected={location.pathname === "/admin/employees"} />,
            <NavSelection icon={MoviesImg} title="Movies" to="movies" isSelected={location.pathname === "/admin/movies"} />,
            <NavSelection icon={ProductsImg} title="Products" to="products" isSelected={location.pathname === "/admin/products"} />,
            <NavSelection icon={TheatersImg} title="Rooms" to="rooms" isSelected={location.pathname === "/admin/rooms"} />,
            <NavSelection icon={ReceiptsImg} title="Orders" to="orders" isSelected={location.pathname === "/admin/orders"} />,
            <NavSelection icon={ShowtimesImg} title="Showtimes" to="showtimes" isSelected={location.pathname === "/admin/showtimes"} />,
          
          ]}
          notificationChildren={<div>Notification Content</div>}
          botChildren={[
            <NavSelection icon={SettingsImg} title="Settings" to="settings" />,
          ]}
        />
        <div className="content w-[calc(100vw-220px)] ml-[220px] px-12 py-4 overflow-auto">
          <Routes>
            <Route path="" element={<AdminHome />} />
            <Route path="users" element={<Users />} />
            <Route path="employees" element={<Employees />} />
            <Route path="movies" element={<Movies />} />
            <Route path="products" element={<Products />} />
            <Route path="rooms" element={<Rooms />} />
            <Route path="orders" element={<Orders />} />
            <Route path="showtimes" element={<Showtimes />} />
            <Route path="settings" element={<Settings />} />
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
  );
}

export default Admin;
