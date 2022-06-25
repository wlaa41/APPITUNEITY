import "./TechnologiesStripe.scss";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import icon from "../../../assets/images/tech_icons/Angular.svg";

import "swiper/css/effect-flip";
import { useState } from "react";


const TechnologiesStripe = () => {
    const [activeItem, setActiveItem] = useState({});
    const [swiper, setSwiper] = useState(null);
    const items = [
        {
            id: 1,
            icon: icon,
            title: "Hire Angular Developer",
            description: "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
        },
        {
            id: 2,
            icon: icon,
            title: "Hire WooCommerce Developer",
            description: "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
        },
        {
            id: 3,
            icon: icon,
            title: "Hire Drupal Developer",
            description: "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
        },
        {
            id: 4,
            icon: icon,
            title: "Hire WordPress Developer",
            description: "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
        },
        {
            id: 5,
            icon: icon,
            title: "Hire Elixir Developer",
            description: "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
        },
        {
            id: 6,
            icon: icon,
            title: "Hire Magento Developer",
            description: "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
        },
        {
            id: 7,
            icon: icon,
            title: "Hire Node Js Developer",
            description: "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
        },
        {
            id: 8,
            icon: icon,
            title: "Hire PHP Developer",
            description: "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
        },
        {
            id: 9,
            icon: icon,
            title: "Hire Python Developer",
            description: "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
        },
        {
            id: 10,
            icon: icon,
            title: "Hire Rails Developer",
            description: "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
        },
        {
            id: 11,
            icon: icon,
            title: "Hire React Js Developer",
            description: "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
        },
        {
            id: 12,
            icon: icon,
            title: "Hire Angular Developer",
            description: "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
        }
    ]
    const breakpoints = {
        0: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 7,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 9,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 11,
            spaceBetween: 20,
        },
        1400: {
            slidesPerView: 12,
            spaceBetween: 20,
        }
    }
    const changeSlide = (e) => {
        setActiveItem(items[e.activeIndex]);
    }
    const handleClickSlide = (e) => {
        if (e.clickedIndex)
            swiper.slideTo(e.clickedIndex)
        setActiveItem(items[e.activeIndex]);

    }
    return (
        <div className="technologies-stripe">
            <div className="main-container">
                <div className="stripe-header">
                    <h2>Some Of our Frequently used technologies</h2>
                </div>
                <div>
                    <Swiper
                        className="my-swiper"
                        modules={[Autoplay]}
                        spaceBetween={50}
                        loop={true}
                        slidesPerView={12}
                        centerInsufficientSlides={true}
                        centeredSlides={true}
                        centeredSlidesBounds={true}
                        breakpoints={breakpoints}
                        onSlideChange={changeSlide}
                        onSwiper={setSwiper}
                        onClick={handleClickSlide}
                        autoplay={{
                            // delay: 2500,
                            // disableOnInteraction: false,
                        }}
                    >
                        {items.map((item, index) => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <img className="tech-img" src={item.icon} alt={item.title} />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
                {activeItem && <div className="tech-desc">
                    <p>{activeItem.title}, </p>
                    <p>{activeItem.description}</p>
                    <span>{activeItem ? 'Read More' : ''}</span>
                </div>
                }
            </div>
        </div>
    )
}
export default TechnologiesStripe;