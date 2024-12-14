import { React, useContext } from "react";
import UserHeader from "./Header";
import Footer from "./Footer";
import { AuthContext } from "../../AuthContext";

function Contact() {
  const { isLoggedIn, userProfile } = useContext(AuthContext);
  return (
    <div className="bg-black w-full relative">
        <div className="h-[70px] bg-black w-full" />
        <div className="px-[25%] py-10 bg-white w-full h-[600px]">
        <UserHeader />
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="md:w-[100%]">
            <form className="bg-white p-6 rounded-lg">
              <h2 className="text-4xl font-semibold mb-6">Contact Us</h2>
              <div className="mb-4 text-sm">
                <label htmlFor="name" className="block text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border border-gray p-2 rounded-sm"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4 text-sm">
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray p-2 rounded-sm"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4 text-sm">
                <label htmlFor="subject" className="block text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full border border-gray p-2 rounded-sm"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-4 text-sm">
                <label htmlFor="message" className="block text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full border border-gray p-2 rounded-sm"
                  rows="4"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red text-white py-2 rounded hover:bg-dark-red"
                // onSubmit= {()=>handleSumit()}
                onClick={() =>
                  alert(
                    "The message hasn't been sent besause the function hasn't been implemented yet"
                  )
                }
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="md:w-[100%] mt-5 md:mt-0 ">
            <div className="text-gray p-6">
              <h2 className="text-xl font-semibold mb-4 text-red-600">
                Contact Information
              </h2>
              <p className="mb-2">
                <strong>Address:</strong> Ki tuc xa khu B, Ho Chi Minh, VietNam
              </p>
              <p className="mb-2">
                <strong>Phone:</strong> IDK
              </p>
              <p className="mb-4">
                <strong>Email:</strong> 22520663@gm.uit.edu.vn
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer className="absolute bottom-auto w-full bg-black" />
    </div>
  );
};

export default Contact;
