"use client"
import Link from "next/link"
import Slider from "react-slick"

interface DataType {
   id: number;
   bgImg: string;
   title: string;
   subtitle: string;
   text: string;
   isLeft?: boolean;
}[];


const hero_data: DataType[] = [
   {
      id: 1,
      bgImg: "/assets/img/hero/Rectangle2.jpg",
      title: "Treding Easy,Fast & Secure",
      subtitle: "Buy & Trade on the Original Marketplace",
      text: "The best place to buy, sell and trade your cryptocurrencies. We are the original marketplace, here to provide you with the best experience.",
      isLeft: false
   },
   {
      id: 2,
      bgImg: "/assets/img/hero/Rectangle4.jpg",
      title: "Treding Easy,Fast & Secure",
      subtitle: "Buy & Trade on the Original Marketplace",
      text: "The best place to buy, sell and trade your cryptocurrencies. We are the original marketplace, here to provide you with the best experience.",
      isLeft : false
   },
   {
      id: 3,
      bgImg: "/assets/img/hero/Rectangle1.jpg",
      title: "Treding Easy,Fast & Secure",
      subtitle: "Buy & Trade on the Original Marketplace",
      text: "The best place to buy, sell and trade your cryptocurrencies. We are the original marketplace, here to provide you with the best experience.",
      isLeft : true
   },
]

const Hero = () => {

   const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      autoplay: true,
      spaceBetween: 30,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
   }

   return (
      <>
         <Slider {...settings} className="hero-slider">
            {
               hero_data.map((data) => (
                  <div key={data.id}>
                     <div className="hero-wrapper hero-1" style={{ backgroundImage: `url(${data.bgImg})` }} >
                        <div className="container">
                           <div className="hero-style1">
                              <div className={`row ${!data.isLeft ? 'flex-row-reverse' : ''}`}>
                                 <div className="col-lg-6">
                                    <h6 className="hero-title">{data.title}</h6>
                                    <h1 className="hero-subtitle">{data.subtitle}</h1>
                                    <p className="hero-text">
                                       {data.text}
                                    </p>
                                    <div className="btn-wrap">
                                       <Link href="/contact" className="btn btn2" >
                                          Get Started
                                       </Link>
                                       <Link href="/blog" className="btn btn-two" >
                                          Learn More
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               ))
            }

         </Slider>
      </>
   )
}

export default Hero
