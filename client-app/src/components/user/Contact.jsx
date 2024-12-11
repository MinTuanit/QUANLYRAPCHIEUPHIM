import React, { useState, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import UserHeader from "./Header";
import ProfileImg from "./../../assets/images/profile.png";
import Footer from "./Footer";

function Contact() {

  return (
    <div className="bg-dark-gray min-h-screen w-full h-[900px] relative">
        <UserHeader ProfileName={"Nguyen Van A"} ProfilePic={ProfileImg} />
      <Footer className="absolute bottom-0 left-0 w-full mt-10" />
    </div>
  );
}
export default Contact;
