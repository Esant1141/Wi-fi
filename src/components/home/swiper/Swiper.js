import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import SwiperCard from "./SwiperCard";

const Cardswiper = () => {
  return (
    <>
      <div className='container-fluid py-4 px-4 justify-content-center swipers'>
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="mySwiper"
        //   slidesPerView={5}
        //   spaceBetween={30}
        breakpoints={{
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 15,
            },
            1280: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
        }}
        >
          <SwiperSlide>
            <SwiperCard data={{ imgSrc:"img/sol1.jpg", price: '$10', title:"apple" }} />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCard data={{ imgSrc:"img/sol2.jpg", price: '$20', title:"apple" }} />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCard data={{ imgSrc:"img/sol3.jpg", price: '$30', title:"apple" }} />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCard data={{ imgSrc:"img/sol4.jpg", price: '$40', title:"apple" }} />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCard data={{ imgSrc:"img/sol5.jpg", price: '$50', title:"apple" }} />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCard data={{ imgSrc:"img/sol6.jpg", price: '$60', title:"apple" }} />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCard data={{ imgSrc:"img/sol1.jpg", price: '$70', title:"apple" }} />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCard data={{ imgSrc:"img/sol2.jpg", price: '$80', title:"apple" }} />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCard data={{ imgSrc:"img/sol3.jpg", price: '$90', title:"apple" }} />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCard data={{ imgSrc:"img/sol4.jpg", price: '$100', title:"apple" }} />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCard data={{ imgSrc:"img/sol5.jpg", price: '$110', title:"apple" }} />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCard data={{ imgSrc:"img/sol6.jpg", price: '$120', title:"apple" }} />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCard data={{ imgSrc:"img/sol1.jpg", price: '$130', title:"apple" }} />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCard data={{ imgSrc:"img/sol5.jpg", price: '$140', title:"apple" }} />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCard data={{ imgSrc:"img/sol2.jpg", price: '$150', title:"apple" }} />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCard data={{ imgSrc:"img/sol3.jpg", price: '$160', title:"apple" }} />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCard data={{ imgSrc:"img/sol4.jpg", price: '$170', title:"apple" }} />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCard data={{ imgSrc:"img/sol5.jpg", price: '$180', title:"apple" }} />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCard data={{ imgSrc:"img/sol6.jpg", price: '$190', title:"apple" }} />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCard data={{ imgSrc:"img/sol1.jpg", price: '$200', title:"apple" }} />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCard data={{ imgSrc:"img/sol2.jpg", price: '$210', title:"apple" }} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Cardswiper;
