"use client"
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Slider from "react-slick";

import blog1 from "@/assets/img/blog/blog-01.jpg";
import blog2 from "@/assets/img/blog/blog-02.jpg";
import blog3 from "@/assets/img/blog/blog-03.jpg";
import blog4 from "@/assets/img/blog/blog-04.jpg";
import blog5 from "@/assets/img/blog/blog-05.jpg";

interface DataType {
   id: number;
   thumbnail: StaticImageData;
   author: string;
   date: string;
   title: string;
   desc: JSX.Element;
}[];

const blog_data: DataType[] = [
   {
      id: 1,
      thumbnail: blog1,
      author: "Admin",
      date: "10.01.2025",
      title: "Bitcoin Takes on the Fed: Is a Historic Rally on the Horizon?",
      desc: (<>The prices of cryptocurrency businesses’ shares rose sharply last month, while the index of stocks…</>),
   },
   {
      id: 2,
      thumbnail: blog2,
      author: "Admin",
      date: "10.01.2025",
      title: "Countdown to ‘most anticipated event in history",
      desc: (<>The prices of cryptocurrency businesses’ shares rose sharply last month, while the index of stocks…</>),
   },
   {
      id: 3,
      thumbnail: blog3,
      author: "Admin",
      date: "10.01.2025",
      title: "Bitcoin Takes on the Fed: Is a Historic Rally on the Horizon?",
      desc: (<>The prices of cryptocurrency businesses’ shares rose sharply last month, while the index of stocks…</>),
   },
   {
      id: 4,
      thumbnail: blog4,
      author: "Admin",
      date: "10.01.2025",
      title: "Countdown to ‘most anticipated event in history",
      desc: (<>The prices of cryptocurrency businesses’ shares rose sharply last month, while the index of stocks…</>),
   },
   {
      id: 5,
      thumbnail: blog5,
      author: "Admin",
      date: "10.01.2025",
      title: "Bitcoin Takes on the Fed: Is a Historic Rally on the Horizon?",
      desc: (<>The prices of cryptocurrency businesses’ shares rose sharply last month, while the index of stocks…</>),
   },
];

const settings = {
   dots: true,
   infinite: true,
   speed: 1000,
   autoplay: true,
   spaceBetween: 30,
   arrows: false,
   slidesToShow: 3,
   slidesToScroll: 1,
   responsive: [
      {
         breakpoint: 1400,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
         }
      },
      {
         breakpoint: 1200,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
         }
      },
      {
         breakpoint: 992,
         settings: {
            slidesToShow: 2,
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


const RecentBlog = () => {
   return (
      <div className="pt-130 pb-130 bg-section2" id="blog">
         <div className="container">
            <div className="section-title mb-50">
               <h5 className="subtitle">blog & artical </h5>
               <h2 className="title style2">Recent Blog</h2>
            </div>
            <div className="slider-area">
               <Slider {...settings} className="row recent-blog-slider">
                  {blog_data.map((item) => (
                     <div key={item.id} className="col-lg-4">
                        <div className="recent-blog-card">
                           <div className="recent-blog-card-header">
                              <Image src={item.thumbnail} alt="img" />
                           </div>

                           <div className="recent-blog-card-body">
                              <div className="recent-blog-card-meta">
                                 <div className="author">
                                    <i className="fas fa-user"></i>
                                    {item.author}
                                 </div>
                                 <div className="date">
                                    <i className="far fa-calendar-alt"></i>
                                    {item.date}
                                 </div>
                              </div>

                              <div className="recent-blog-card-content">
                                 <h2> {item.title} </h2>
                                 <p>{item.desc}  </p>
                                 <Link className="btn btn2" href="/blog">Read More</Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </Slider>
            </div>
         </div>
      </div>
   )
}

export default RecentBlog
