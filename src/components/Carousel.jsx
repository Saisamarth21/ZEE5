import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const movies = [
  { id: 1, image: "https://image.tmdb.org/t/p/original/4TS5O1IP42bY2BvgMxL156EENy.jpg" },
  { id: 2, image: "https://image.tmdb.org/t/p/original/umSVjVdbVwtx5ryCA2QXL44Durm.jpg" },
  { id: 3, image: "https://image.tmdb.org/t/p/original/ufuDwHBEVqyZ8JLjJ5ILgM0qUJj.jpg" },
  { id: 4, image: "https://image.tmdb.org/t/p/original/kKN1Klhdxhbiwe8TBXIs6NYPr4C.jpg" },
  { id: 5, image: "https://image.tmdb.org/t/p/original/Bvv3PlituZeKBWpToQCzQJDJwo.jpg" },
  { id: 6, image: "https://image.tmdb.org/t/p/original/9HCANKswDvDuaAXtY8YZkqNVT0Y.jpg" },
  { id: 7, image: "https://image.tmdb.org/t/p/original/79608fSvB6mW7XLtFjQU166z6DI.jpg" },
];

const Carousel = () => {
  return (
    <div style={{ padding: "20px", borderRadius: "10px" }}>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{ delay: 2000 }}
        loop
        navigation
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <img
              src={movie.image}
              alt="Movie Poster"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
