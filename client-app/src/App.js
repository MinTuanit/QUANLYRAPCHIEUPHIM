import React from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import NavSelection from "./components/NavSelection";
import ProfileImg from "./assets/images/profile.png";
import HomeImg from "./assets/images/home.svg";
import EmployeesImg from "./assets/images/employees.svg";
import MoviesImg from "./assets/images/movies.svg";
import ProductsImg from "./assets/images/products.svg";
import TheatersImg from "./assets/images/theaters.svg";
import ReceiptsImg from "./assets/images/receipts.svg";
import SettingsImg from "./assets/images/settings.svg";


function App() {
  return (
    <div className="App bg-dark-gray min-h-screen w-full">
      <Header
        ProfileName={"Nguyen Van A"}
        ProfileRole={"Admin"}
        ProfilePic={ProfileImg}
        />
      <div className="main-layout">
        <NavBar
          topChildren={[
            <NavSelection icon={HomeImg} title="Home" />,
            <NavSelection icon={EmployeesImg} title="Employees" />,
            <NavSelection icon={MoviesImg} title="Movies" />,
            <NavSelection icon={ProductsImg} title="Products" />,
            <NavSelection icon={TheatersImg} title="Theaters" />,
            <NavSelection icon={ReceiptsImg} title="Receipts" />,
          ]}
          notificationChildren={<div>Notification Content</div>}
          botChildren={[
            <NavSelection icon={SettingsImg} title="Settings" />,
          ]}
        />
        <div className="content">
          {/* Content goes here */}
        </div>
      </div>
    </div>
  );
}

export default App;
