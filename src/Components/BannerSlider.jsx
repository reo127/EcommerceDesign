import React, { useRef, useState } from "react";
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <img src={image1} style={{height:'15rem', width: '100%'}} alt="Slider Image" /> </SwiperSlide>
        <SwiperSlide> <img src={image2} style={{height:'15rem', width: '100%'}} alt="Slider Image" /> </SwiperSlide>
        <SwiperSlide> <img src={image1} style={{height:'15rem', width: '100%'}} alt="Slider Image" /> </SwiperSlide>
        <SwiperSlide> <img src={image2} style={{height:'15rem', width: '100%'}} alt="Slider Image" /> </SwiperSlide>
        <SwiperSlide> <img src={image1} style={{height:'15rem', width: '100%'}} alt="Slider Image" /> </SwiperSlide>
        <SwiperSlide> <img src={image2} style={{height:'15rem', width: '100%'}} alt="Slider Image" /> </SwiperSlide>
        <SwiperSlide> <img src={image1} style={{height:'15rem', width: '100%'}} alt="Slider Image" /> </SwiperSlide>
        <SwiperSlide> <img src={image2} style={{height:'15rem', width: '100%'}} alt="Slider Image" /> </SwiperSlide>
        <SwiperSlide> <img src={image1} style={{height:'15rem', width: '100%'}} alt="Slider Image" /> </SwiperSlide>
      </Swiper>
    </>
  );
}
