"use client"
import Image from "next/image";
import Link from "next/link";
import footerLogo from "@/assets/img/logo/logo.svg";
import NewsletterForm from "@/component/forms/NewsletterForm";

interface DataType {
   id: number;
   class_name: string;
   title: string;
   footer_link: {
      link: string;
      link_title: string;
   }[]
}

const footer_data: DataType[] = [
   {
      id: 2,
      class_name: "col-xl-2 col-lg-2 col-md-3 col-sm-6",
      title: "SITE MAP",
      footer_link: [{ link: "#", link_title: "Home" }, { link: "/#about", link_title: "About" }, { link: "/features", link_title: "Features" }, { link: "/faqs", link_title: "Faqs" }, { link: "#", link_title: "Articles" },]
   },
   {
      id: 3,
      class_name: "col-xl-2 col-lg-2 col-md-3 col-sm-6",
      title: "Usefull Links",
      footer_link: [{ link: "#", link_title: "Whitepaper" }, { link: "#", link_title: "Terms Conditions" },{ link: "#", link_title: "Privacy Policy" }, { link: "/contact", link_title: "Suggestions" }, { link: "#", link_title: "Newsletters" },]
   },
]

const Footer = () => {
   return (
      <footer>
         <div className="footer-section bg-section2">
            <div className="container">
               <div className="footer-top">
                  <div className="row">

                     <div className="col-xl-4 col-lg-4 col-md-10 col-sm-12" >
                        <Image src={footerLogo} alt="img" />
                        <p className="footer-text">
                           We Are Many Variations Of Passages Available But The Majority Have Suffered Alteration In Some Form By Injected Humour.
                        </p>
                     </div>

                     {footer_data.map((item) => (
                        <div key={item.id} className={item.class_name}>
                           <div className="footer-edge">
                              <h4 className="ft-title">{item.title}</h4>
                              <div className="footer-link-list">
                                 <ul className="list-wrap">
                                    {item.footer_link.map((li, i) => (
                                       <li key={i}><Link href={li.link}>{li.link_title}</Link></li>
                                    ))}
                                 </ul>
                              </div>
                           </div>
                        </div>
                     ))}

                     <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="footer-edge">
                           <h4 className="ft-title">Subscribe Newsletter</h4>
                           <div className="footer-newsletter">
                              <NewsletterForm />
                           </div>
                           <div className="footer-social">
                              <ul>
                                 <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                                 <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                                 <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
                                 <li><Link href="#"><i className="fab fa-linkedin"></i></Link></li>
                                 <li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="copyright-footer">
                  <div className="row">
                     <div className="col-lg-12">
                        <div className="copyright-text">
                           <p>Copyright © 2024 Crypto. All rights reserved.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default Footer;
