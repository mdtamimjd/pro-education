import React from 'react'
import LatestEventCard from './LatestEventCard'
import LatestSection from '../modules/LatestEvent.module.css';
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

const LatestEvent = () => {
  return (
    <div className={LatestSection.body}>
      <div className={LatestSection.textContent}>
        <p>News Update</p>
        <h2>Latest News & events</h2>
      </div>
      <Swiper
        spaceBetween={50}
        loop={true}
        navigation={false}
        modules={[Pagination, Navigation]}
        className={LatestSection.mySwiper}
        breakpoints={{
          // when window width is >= 800px
          800: {
            slidesPerView: 1, // 1 slide on mobile devices
          },
          // when window width is >= 1000px
          1000: {
            slidesPerView: 2, // 2 slides on tablets
          },
          // when window width is >= 1400px
          1400: {
            slidesPerView: 3, // 3 slides on larger screens
          },
        }}
      >
      <SwiperSlide>
      <LatestEventCard img="/images/1.26656544.jpg" date="20 October 2024" postType="Admin" title="Majority of students dissatisfied for world coronavirus support" discription="We denounce with righteous indige nation and dislike men who are so beguiled" studyClass="University" />
        </SwiperSlide>

        <SwiperSlide>
      <LatestEventCard img="/images/2.b275a56b.jpg" date="20 October 2024" postType="Admin" title="Majority of students dissatisfied for world coronavirus support" discription="We denounce with righteous indige nation and dislike men who are so beguiled" studyClass="University" />
        </SwiperSlide>

        <SwiperSlide>
        <LatestEventCard img="/images/3.462e2a21.jpg" date="20 October 2024" postType="Admin" title="Majority of students dissatisfied for world coronavirus support" discription="We denounce with righteous indige nation and dislike men who are so beguiled" studyClass="University" />
        </SwiperSlide>

        <SwiperSlide>
        <LatestEventCard img="/images/4.0deebab7.jpg" date="20 October 2024" postType="Admin" title="Majority of students dissatisfied for world coronavirus support" discription="We denounce with righteous indige nation and dislike men who are so beguiled" studyClass="University" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default LatestEvent
