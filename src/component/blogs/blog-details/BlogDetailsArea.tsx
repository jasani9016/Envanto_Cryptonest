import Image from "next/image";
import Link from "next/link";
import BlogComment from "../blog-common/BlogComment";
import BlogForm from "@/component/forms/BlogForm";
import BlogSidebar from "../blog-common/BlogSidebar";

import blogThumb_1 from "@/assets/img/blog/blog-06.jpg";
import blogThumb_2 from "@/assets/img/blog/blog-02.jpg";
import blogThumb_3 from "@/assets/img/blog/blog-03.jpg";
import blogAvatar_1 from "@/assets/img/blog/blog_author01.png";
import blogAvatar_2 from "@/assets/img/blog/avatar.png";


interface ContentData {
   title_1: string;
   desc_1: JSX.Element;
   desc_2: JSX.Element;
   desc_3: JSX.Element;
   desc_4: JSX.Element;
   desc_5: JSX.Element;
   desc_6: JSX.Element;
   social_icon: string[];
}
const content_data: ContentData = {
   title_1: "Bitcoin Takes on the Fed: Is a Historic Rally on the Horizon?",
   desc_1: (<>The prices of cryptocurrency businesses’ shares rose sharply last month, while the index of stocks related to bitcoin mining saw a 77% increase in January. These changes portend a positive start to the year for the cryptocurrency sector.The only time you do not need identification to access Bitcoin ATMs is when you are using an exchange. Bitcoin ATMs, however, do not seem likely to be the go-to solution due to the limitation on how much Bitcoin you can create each time, as well as the obvious problem of finding a machine.</>),
   desc_2: (<>On-ramping through non-fungible token (NFT) exchanges is another interesting recent development. Users can take their first steps into crypto by purchasing crypto on NFT platforms using credit cards.Bitcoin ATMs are arguably the oldest form of crypto on-ramping. In Bitcoin ATMs, cash is accepted and converted into Bitcoin; a new wallet is created at each transaction, allowing your newly purchased Bitcoin to be circulated on the blockchain.</>),
   desc_3: (<>The other central banks have done the same in slightly lower proportions. As for governments, they have continued to accumulate even more public debt to support their respective economies.At the same time, it is unclear if this position of the SEC will be strictly enforced. The SEC stated that the “Distributed Anonymous Organization,” which held its coin offering in July, may have violated SEC regulations in doing so</>),
   desc_4: (<>So it seems that JP Morgan would rather change their mind about Bitcoin than stay on the side of the fools. It’s the same with Goldman Sachs. And many more will follow in the future.This means that sale, transfer, and conversion of cryptocurrency coins may be held to the same standards as other securities and stocks, which the SEC oversees. This means that coin offerings must now be registered with the SEC, or else they could violate federal regulations.</>),
   desc_5: (<>We haven’t yet gotten to the point where Warren Buffett would have dubbed Bitcoin. Nevertheless, we are at the beginning of a journey of a thousand steps, to paraphrase Lao Tzu.Your account will be created once you have provided this information. You will be able to buy an array of coins and tokens using your debit or credit card, and your crypto will be sent to the platform’s custodial wallet, which was automatically created when you set up your account.</>),
   desc_6: (<>Bitcoin, the mother of all cryptocurrencies, has undergone a significant change in its fee structure due to the emergence of ordinals. In recent years, the “digital gold” has primarily been used as a store of value and an alternative asset class, offering portfolio diversification, protection against inflation, and the potential for long-term capital growth. Despite initiatives in countries like El Salvador, its use as a means of payment has somewhat taken a backseat. This has resulted in a stagnation of transaction fees, which at the beginning of the year were at similar levels to 2017.</>),
   social_icon: ["fab fa-facebook-f", "fab fa-linkedin-in", "fab fa-twitter", "fab fa-instagram",]
}
const { title_1, desc_1, desc_2, desc_3, desc_4, desc_5, social_icon, desc_6 } = content_data;

const BlogDetailsArea = ({ single_blog }: any) => {
   return (
      <section className="blog-details-area pt-140 pb-140 bg-section">
         <div className="container">
            <div className="row">
               <div className="col-lg-8">
                  <div className="blog-details-wrap">
                     <div className="blog-details-thumb">
                        {single_blog?.thumb ? <Image src={single_blog.thumb} alt="image" /> : <Image src={blogThumb_1} alt="image" />}
                     </div>
                     <div className="blog-details-content">
                        <div className="blog-meta">
                           <ul className="list-wrap">
                              <li className="blog-author">
                                 <Link href="/blog-details">{single_blog?.author_avatar ? <Image src={single_blog?.author_avatar} alt="" /> : <Image src={blogAvatar_1} alt="" />}
                                    {single_blog?.author_name ? single_blog.author_name : "Admin"}
                                 </Link>
                              </li>
                              <li><i className="far fa-clock"></i>{single_blog?.date ? single_blog.date : "12.08.2024"}</li>
                              <li><Link href="/blog-details"><i className="far fa-comment"></i>{single_blog?.comment ? single_blog.comment : "07"}</Link></li>
                              <li><i className="far fa-eye"></i>{single_blog?.views ? single_blog.views : "200Viewers"}</li>
                           </ul>
                        </div>

                        <h2 className="title">{single_blog?.title ? single_blog.title : title_1}</h2>

                        {desc_1}
                        {desc_2}

                        <div>
                           <blockquote>
                              <p>{desc_3} </p>
                              <cite> -John Doe</cite>
                           </blockquote>
                        </div>

                        {desc_4}
                        {desc_5}

                        <div className="blog-details-inner-img">
                           <div className="row">
                              <div className="col-md-6">
                                 <Image src={blogThumb_2} alt="" />
                              </div>
                              <div className="col-md-6">
                                 <Image src={blogThumb_3} alt="" />
                              </div>
                           </div>
                        </div>

                        <p>{desc_6}</p>

                        <div className="blog-details-bottom">
                           <div className="row align-items-center">
                              <div className="blog-post-share">
                                 <ul className="list-wrap">
                                    {social_icon.map((icon, i) => (
                                       <li key={i}><Link href="#"><i className={icon}></i></Link></li>
                                    ))}
                                 </ul>
                              </div>

                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="blog-avatar-wrap mb-65">
                     <div className="blog-avatar-img">
                        <Link href="#"><Image src={blogAvatar_2} alt="img" /></Link>
                     </div>
                     <div className="blog-avatar-info">
                        <h4 className="name"><Link href="#">About John Doe</Link></h4>
                        <p>{desc_6}</p>
                     </div>
                  </div>
                  <BlogComment />
                  <BlogForm />
               </div>
               <BlogSidebar />
            </div>
         </div>
      </section>
   )
}

export default BlogDetailsArea
