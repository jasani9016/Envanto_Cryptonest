import Image from "next/image";
import faq_data from "@/data/FaqData";

import faq_thumb_1 from "@/assets/img/faq/faq.png";

const Faq = () => {
   
   return (
      <div className="pt-140 pb-140 overflow-hidden bg-section">
         <div className="container">
            <div className="row gy-40 justify-content-between">
               <div className="col-xl-6 text-xl-start">
                  <div className="section-title mb-50">
                     <h5 className="subtitle">FAQ-S</h5>
                     <h2 className="title style2">General Asked Questions</h2>
                  </div>
                  <div className="faq-thumb mt-60">
                     <Image src={faq_thumb_1} alt="img" />
                  </div>
               </div>
               <div className="col-xxl-6 col-xl-6">
                  <div className="accordion-area accordion" id="faqAccordion">
                     {faq_data.map((item) => (
                        <div key={item.id} className="accordion-card active">
                           <div className="accordion-header" id={`collapse-item-${item.id}`}>
                              <button className={`accordion-button ${item.id === 1 ? "" : "collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${item.id}`} aria-expanded="true" aria-controls={`collapse-${item.id}`}><span className="number">{item.id}</span>{item.title}</button>
                           </div>
                           <div id={`collapse-${item.id}`} className={`accordion-collapse collapse ${item.id === 1 ? "show" : ""}`} aria-labelledby={`collapse-item-${item.id}`} data-bs-parent="#faqAccordion">
                              <div className="accordion-body">
                                 <p className="faq-text">{item.desc}</p>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Faq;
