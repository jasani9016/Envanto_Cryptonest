import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import recentPost1 from "@/assets/img/blog/recentPost1.jpg"
import recentPost2 from "@/assets/img/blog/recentPost2.jpg"
import recentPost3 from "@/assets/img/blog/recentPost3.jpg"

interface DataType {
   id: number;
   img: StaticImageData;
   date: string;
   title: string;
}
const rc_data: DataType[] = [
   {
      id: 1,
      img: recentPost1,
      date: "JANUARY 01,2024",
      title: "Bitcoin Takes on the Fed: Is a Historic Rally on the Horizon?",
   },
   {
      id: 2,
      img: recentPost2,
      date: "FEBRUARY 02,2024",
      title: "Countdown to ‘most anticipated event in history’ is underway",
   },
   {
      id: 3,
      img: recentPost3,
      date: "MARCH 03,2024",
      title: "Eye-opening guide to product review scraping in 2023",
   },
]

const BlogRcPost = () => {
   return (
      <div className="blog-widget">
         <h4 className="widget-title">Recent Posts</h4>
         <div className="rc-post-wrap">
            {rc_data.map((item) => (
               <div key={item.id} className="rc-post-item">
                  <div className="thumb">
                     <Link href="/blog-details"><Image src={item.img} alt="" /></Link>
                  </div>
                  <div className="content">
                     <h6 className="title"><Link href="/blog-details">{item.title}</Link></h6>
                     <span className="date">{item.date}</span>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default BlogRcPost
