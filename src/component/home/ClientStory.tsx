"use client"
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Slider from "react-slick";

import avatar_1 from "@/assets/img/clientStory/testimonial-03.png"
import avatar_2 from "@/assets/img/clientStory/testimonial-04.png"
import avatar_3 from "@/assets/img/clientStory/testimonial-05.png"

import { useRef } from "react";

interface DataType {
   id: number;
   avatar: StaticImageData;
   title: string;
   designation: string;
   des: JSX.Element;
   rating: string[];
}[];

const client_story_data: DataType[] = [
   {
      id: 1,
      avatar: avatar_1,
      title: "Ruhan Alexazendar",
      designation: "Web Developer",
      des: (<>There are many variations of passages of Lorem Ipsum available, but the best of lorem in the majority have suffered alteration in some form, by injected humour, or form, by injected himor, randomised words which don&apos;t look even.</>),
      rating: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star",],
   },
   {
      id: 2,
      avatar: avatar_2,
      title: "Gomez Goles",
      designation: "Product Designers",
      des: (<>There are many variations of passages of Lorem Ipsum available, but the best of lorem in the majority have suffered alteration in some form, by injected humour, or form, by injected himor, randomised words which don&apos;t look even.</>),
      rating: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star",],
   },
   {
      id: 3,
      avatar: avatar_3,
      title: "Alexa Gomez",
      designation: "Developer",
      des: (<>There are many variations of passages of Lorem Ipsum available, but the best of lorem in the majority have suffered alteration in some form, by injected humour, or form, by injected himor, randomised words which don&apos;t look even.</>),
      rating: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star",],
   },
]

const settings = {
   dots: true,
   infinite: true,
   speed: 1000,
   autoplay: false,
   arrows: false,
   slidesToShow: 1,
   slidesToScroll: 1,
   adaptiveHeight: true,
   responsive: [
      {
         breakpoint: 1400,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
         }
      },
      {
         breakpoint: 1200,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
         }
      },
      {
         breakpoint: 991,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
         }
      },
      {
         breakpoint: 767,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
         }
      },
      {
         breakpoint: 575,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
         }
      },
   ]
}

const ClientStory = () => {
   const sliderRef = useRef<Slider | null>(null);
   return (
      <div className="pt-130 pb-130 bg-section2 client-story">
         <div className="container">
            <div className="section-title mb-50">
               <h5 className="subtitle"> client story</h5>
               <div className="section-title-wrap">
                  <h2 className="title style2">Clients Testimonials</h2>
                  <Link className="btn btn2" href="#">Drop A Review</Link>
               </div>
            </div>

            <div className="px-3 story-content row">
               <div className="col-xl-3 customers-counter">
                  <h2>4144+</h2>
                  <p>our all customers
                     satisfaction</p>
               </div>
               <div className="col-xl-9 ">
                  <Slider {...settings} ref={sliderRef} className="row client-story-slider">
                     {client_story_data.map((item) => (
                        <div key={item.id} className="col-lg-6 slider-item">
                           <div className="client-box ">
                              <div className="client-box-profile">
                                 <div className="client-box-profile-thumb">
                                    <Image src={item.avatar} alt="img" />
                                 </div>
                                 <div className="client-box-profile-details">
                                    <h4 className="client-box_name">{item.title}</h4>
                                    <span className="client-box_desig">{item.designation}</span>
                                 </div>
                                 <div className="client-box-profile-ratting">
                                    {item.rating.map((rat, i) => (
                                       <i key={i} className={rat}></i>
                                    ))}
                                 </div>
                              </div>
                              <p className="client-box_text">{item.des}</p>
                           </div>
                        </div>
                     ))}
                  </Slider>
               </div>

            </div>


         </div>
      </div>
   )
}

export default ClientStory;
