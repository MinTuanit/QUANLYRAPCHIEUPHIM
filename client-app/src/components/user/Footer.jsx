import React from "react";
import PropTypes from "prop-types";
import { Button, Grid } from "antd";
import { Link, useNavigate } from "react-router-dom";
import facebookLogo from "../../assets/images/facebook-logo.png";
import instagramLogo from "../../assets/images/instagram-logo.png";
import { HomeOutlined } from "@ant-design/icons";

function Footer({ className }) {
  return (
    <footer className={`footer py-4 text-white bg-gray-800" ${className}`}>
      <div className="hidden md:block container mx-auto text-center">
        <div className="mb-4">
          <p className="mb-2 text-light-gray">
            &copy; {new Date().getFullYear()} Movie Trailer Web.
          </p>
          <div className="flex justify-center gap-4 mb-4 text-sm text-gray font-thin">
            <a href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
        <div className="flex justify-center gap-4 mb-4">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <img src={facebookLogo} alt="Facebook Logo" className="w-8 h-8" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img src={instagramLogo} alt="Instagram Logo" className="w-8 h-8" />
          </a>
        </div>

        {/* Hiển thị các nút chỉ trên mobile */}
      </div>
      <div className="flex justify-around items-center mt-4 ">
        <Button
          type="link"
          icon={<HomeOutlined />} // Thêm icon HomeOutlined
          onClick={{}}
          className="text-white"
        >
          Home
        </Button>
      </div>
    </footer>
  );
}

export default Footer;
