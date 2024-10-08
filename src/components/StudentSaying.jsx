import React from 'react'
import StudentCss from '../modules/StudentSaying.module.css'
import StudentSayingCard from './StudentSayingCard';

// slider
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

const StudentSaying = () => {
  return (
    <div className={StudentCss.body}>
      <div className={StudentCss.textContent}>
        <p>News Update</p>
        <h2>Latest News & events</h2>
      </div>
      <div className={StudentCss.conterBox}>
      <Swiper
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 800px
          800: {
            slidesPerView: 1, // 1 slide on mobile devices
          },
          // when window width is >= 1000px
          1000: {
            slidesPerView: 2, // 2 slides on tablets
          }
        }}
      >
        <SwiperSlide>
        <StudentSayingCard name="Md Tamim" img="images/1.62959526.png" profession="web developer" comment="Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That’s how I would describe Jeramy and his team at The Lorem Ipsum Company. When it comes to content marketing, you’ll definitely get the 5-star treatment from the Lorem Ipsum Company." />
        </SwiperSlide>
        <SwiperSlide>
        <StudentSayingCard name="Arian Khan" img="images/3.b5944e91.png" profession="web developer" comment="Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That’s how I would describe Jeramy and his team at The Lorem Ipsum Company. When it comes to content marketing, you’ll definitely get the 5-star treatment from the Lorem Ipsum Company." />
        </SwiperSlide>
        <SwiperSlide>
        <StudentSayingCard name="Morin" img="images/student-img.png" profession="Disiter Marketing" comment="Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That’s how I would describe Jeramy and his team at The Lorem Ipsum Company. When it comes to content marketing, you’ll definitely get the 5-star treatment from the Lorem Ipsum Company." />
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  )
}

export default StudentSaying
