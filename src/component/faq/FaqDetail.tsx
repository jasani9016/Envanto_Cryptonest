import React from 'react';
import faq_data from '@/data/FaqData';



const FaqDetail = () => {
    return (
        <div className="pt-130 pb-130 bg-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="accordion-area accordion" id="faqAccordion">
                            {faq_data.map((item) => (
                                <div key={item.id} className="accordion-card style2">
                                    <div className="accordion-header" id={`collapse-item-${item.id}`}>
                                        <button className={`accordion-button ${item.id === 1 ? "" : "collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${item.id}`} aria-expanded="true" aria-controls={`collapse-${item.id}`}>{item.title}</button>
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

export default FaqDetail;