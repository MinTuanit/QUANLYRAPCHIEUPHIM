import React from "react";
import SlideItem from "../items/SlideItem";
import venomMovieImg from "../../../assets/images/examples/venom.jpg";
import redoneMovieImg from "../../../assets/images/examples/redone.jpg";
import dirtyanglesMovieImg from "../../../assets/images/examples/dirtyangles.jpg";
import dexterMovieImg from "../../../assets/images/examples/dexter.jpg";
import carryonMovieImg from "../../../assets/images/examples/carryon.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

const exampleSlideItems = [
 {
    poster: venomMovieImg,
    name: "Venom: The Last Dance",
    duration: "1h 52m",
    genre: "Action",
    nation: "US",
    ageLimit: "16",
    trailer: "https://youtu.be/o-3XPcvInmE?si=ljJ6N2AnQleV0YYU"
  },
  {
    poster: redoneMovieImg,
    name: "Red One",
    duration: "1h 30m",
    genre: "Action",
    nation: "US",
    ageLimit: "16",
    trailer: "https://youtu.be/o-3XPcvInmE?si=ljJ6N2AnQleV0YYU"
  },
  {
    poster: dirtyanglesMovieImg,
    name: "Dirty Angles",
    duration: "1h 30m",
    genre: "Action",
    nation: "US",
    ageLimit: "16",
    trailer: "https://youtu.be/o-3XPcvInmE?si=ljJ6N2AnQleV0YYU"
  },
  {
    poster: dexterMovieImg,
    name: "Dexter Original Sin",
    duration: "1h 30m",
    genre: "Action",
    nation: "US",
    ageLimit: "16",
    trailer: "https://youtu.be/o-3XPcvInmE?si=ljJ6N2AnQleV0YYU"
  },
  {
    poster: carryonMovieImg,
    name: "Carry On",
    duration: "1h 30m",
    genre: "Action",
    nation: "US",
    ageLimit: "16",
    trailer: "https://youtu.be/o-3XPcvInmE?si=ljJ6N2AnQleV0YYU"
  },
  {
    poster: venomMovieImg,
    name: "Venom: The Last Dance",
    duration: "1h 52m",
    genre: "Action",
    nation: "US",
    ageLimit: "16",
    trailer: "https://youtu.be/o-3XPcvInmE?si=ljJ6N2AnQleV0YYU"
  },
  {
    poster: redoneMovieImg,
    name: "Red One",
    duration: "1h 30m",
    genre: "Action",
    nation: "US",
    ageLimit: "16",
    trailer: "https://youtu.be/o-3XPcvInmE?si=ljJ6N2AnQleV0YYU"
  },
  {
    poster: dirtyanglesMovieImg,
    name: "Dirty Angles",
    duration: "1h 30m",
    genre: "Action",
    nation: "US",
    ageLimit: "16",
    trailer: "https://youtu.be/o-3XPcvInmE?si=ljJ6N2AnQleV0YYU"
  },
  {
    poster: dexterMovieImg,
    name: "Dexter Original Sin",
    duration: "1h 30m",
    genre: "Action",
    nation: "US",
    ageLimit: "16",
    trailer: "https://youtu.be/o-3XPcvInmE?si=ljJ6N2AnQleV0YYU"
  },
  {
    poster: carryonMovieImg,
    name: "Carry On",
    duration: "1h 30m",
    genre: "Action",
    nation: "US",
    ageLimit: "16",
    trailer: "https://youtu.be/o-3XPcvInmE?si=ljJ6N2AnQleV0YYU"
  }
];
//   superLargeDesktop: {
//     breakpoint: { max: 4000, min: 3000 },
//     items: 7,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 6,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 4.5,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 3,
//   },
// };

function MovieSlide({ title, className }) {
  return (
    <div className={`movie-slide-container w-full flex flex-col overflow-visible px-4 ${className}`}>
      <div className="text-white text-4xl font-bold tracking-wide pb-5 overflow-visible ml-12">
        {title}
      </div>
      <Swiper
        modules={[Navigation, Mousewheel]}
        spaceBetween={0}
        slidesPerView={5}
        loop={true}
        navigation
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
        className="w-full movie-slide"
      >
        {exampleSlideItems.map((item, index) => (
          <SwiperSlide key={index}>
            <SlideItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-gradient-left"></div>
      <div className="swiper-gradient-right"></div>
    </div>
  );
}
export default MovieSlide;
