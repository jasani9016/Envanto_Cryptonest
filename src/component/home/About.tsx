import Image from "next/image"
import about_1 from "@/assets/img/about/about-us-01.png"
import about_2 from "@/assets/img/about/about-us-02.png"
import Link from "next/link";


const About = () => {
   return (
      <div className="pt-130 pb-130 overflow-hidden bg-section" id="about">
         <div className="container">
            <div className="row justify-content-between">
               <div className="col-xl-5">
                  <div className="about-thumb">
                     <Image src={about_1} alt="img" />
                     <Image src={about_2} alt="img" className="coins-image" />
                  </div>
               </div>
               <div className="col-xl-6 about-content">
                  <p className="sec-text">ABOUT US</p>
                  <h1 className="sec-title">
                     Leading Chain , Crypto & Ico Devlopment Services
                  </h1>
                  <p className="about-text" >
                     Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur cites of the word in classical literature.
                  </p>
                  <p className="about-text">
                  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also reproduced in their exact original a latin professor at Hampden-Sydney
                  </p>

                  <div className="about-btn">
                     <Link href="/about" className="btn btn2" >
                        Read More
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About;
