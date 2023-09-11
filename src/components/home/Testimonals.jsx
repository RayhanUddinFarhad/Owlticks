import React, { useRef, useState } from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaArrowLeft, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const Testimonals = () => {
    const testimonials = [
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Martin escobar",
            title: "Founder of meta",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae.",
            rating: 3,
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/46.jpg",
            name: "Simon andrew",
            title: "Software engineer",
            quote: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
            rating: 4,
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Micheal worin",
            title: "Product designer",
            quote: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.",
            rating: 4.5
        },
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Martin escobar",
            title: "Founder of meta",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae.",
            rating: 3,
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/46.jpg",
            name: "Simon andrew",
            title: "Software engineer",
            quote: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
            rating: 4,
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Micheal worin",
            title: "Product designer",
            quote: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.",
            rating: 4.5
        },
    ]
    const sliderRef = useRef(null);
    
    const CustomNextArrow = ({ onClick }) => (
      <button onClick={onClick} className=" hidden lg:flex btn btn-circle bg-white shadow-lg absolute top-1/2 transform -translate-y-1/2 z-10 -right-20">
        <FaArrowRight />
      </button>
    );
  
    const CustomPrevArrow = ({ onClick }) => (
      <button onClick={onClick} className=" hidden lg:flex btn btn-circle bg-white shadow-lg absolute top-1/2 transform -translate-y-1/2 z-10 -left-20">
        <FaArrowLeft />
      </button>
    );
  
    // const sliderSettings = {
    //     dots: true,
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     nextArrow: <CustomNextArrow />,
    //     prevArrow: <CustomPrevArrow />,
    //   };
    
    let sliderSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      
    return (
        <div className='max-w-screen-lg  mx-auto'>
          <div className='text-center space-y-7 my-5'>

          <h1 className='text-4xl font-bold'>Customer Testimonals</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, distinctio!</p>
          </div>

           
            <Slider  ref={sliderRef} {...sliderSettings}>
                {
                    testimonials.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-xl border  shadow-md ">
                            <div className="p-4">
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={item.rating}
                                    readOnly
                                />
                            </div>
                            <figure>
                                <blockquote>
                                    <p className="text-gray-800 text-lg font-semibold px-4 py-1">
                                        {item.quote}
                                    </p>
                                </blockquote>
                                <div className="flex items-center gap-x-4 p-4 mt-6 ">
                                    <img src={item.avatar} className="w-16 h-16 rounded-full border-2 border-indigo-500" />
                                    <div>
                                        <span className="block text-gray-800 font-semibold">{item.name}</span>
                                        <span className="block text-indigo-600 text-sm mt-0.5">{item.title}</span>
                                    </div>
                                </div>
                            </figure>
                        </div>
                    )) }


            </Slider>

        </div>

    );
};

export default Testimonals;