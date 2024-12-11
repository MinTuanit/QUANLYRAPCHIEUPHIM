import React from "react";
import SlideItem from "./items/SlideItem";
import magpieMovieImg from "../../assets/images/examples/magpie.jpg";
import mariaMovieImg from "../../assets/images/examples/maria.jpg";
import twelveangrymenMovieImg from "../../assets/images/examples/12angrymen.jpg";
import babygirlMovieImg from "../../assets/images/examples/babygirl.jpg";
import elevationMovieImg from "../../assets/images/examples/elevation.jpg";
import pushpaMovieImg from "../../assets/images/examples/pushpa.jpg";
import weliveintimeMovieImg from "../../assets/images/examples/weliveintime.jpg";
import sololevelingMovieImg from "../../assets/images/examples/sololeveling.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

const exampleSlideItems = [
  {
    poster: magpieMovieImg,
    name: "Magpie",
    duration: "1h 30m",
    category: "Drama",
  },
  {
    poster: mariaMovieImg,
    name: "Maria",
    duration: "1h 30m",
    category: "Action",
  },
  {
    poster: twelveangrymenMovieImg,
    name: "12 Angry Men",
    duration: "1h 36m",
    category: "Drama",
  },
  {
    poster: babygirlMovieImg,
    name: "Baby Girl",
    duration: "1h 45m",
    category: "Romance",
  },
  {
    poster: elevationMovieImg,
    name: "Elevation",
    duration: "1h 50m",
    category: "Sci-Fi",
  },
  {
    poster: pushpaMovieImg,
    name: "Push pa 2: The Indians",
    duration: "2h 10m",
    category: "Action",
  },
  {
    poster: weliveintimeMovieImg,
    name: "We Live in Time",
    duration: "1h 40m",
    category: "Drama",
  },
  {
    poster: sololevelingMovieImg,
    name: "Solo Leveling",
    duration: "2h 5m",
    category: "Fantasy",
  },
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
    <div className={`movie-slide-container w-full flex flex-col overflow-visible ${className}`}>
      <div className="text-white text-xl tracking-wider pb-3 overflow-visible">
        {title}
      </div>
      <Swiper
        modules={[Navigation, Mousewheel]}
        spaceBetween={0}
        slidesPerView={5.6}
        loop={true}
        navigation
        className="h-[130px] w-full movie-slide"
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
