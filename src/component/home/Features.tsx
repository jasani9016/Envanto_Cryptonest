import Image from "next/image"
import Link from "next/link"
import features_data from "@/data/FeaturesData"

const Features = () => {
   return (
      <div className="pt-130 pb-130 bg-section overflow-hidden position-relative z-index-common">
         <div className="feature-area">
            <div className="container">
               <div className="section-title mb-50">
                  <h5 className="subtitle">Features</h5>
                  <h2 className="title style2">The Heart Of The Blockchain Of Value Chain</h2>
               </div>
               <div className="row gy-60 gx-30 justify-content-center">
                  {features_data.map((item) => (
                     <div key={item.id} className="col-lg-3 col-md-6">
                        <div className="features-card">
                           <div className="features-card-img">
                              <Link href="#">
                                 <Image src={item.thumb} alt="blog image" />
                              </Link>
                           </div>
                           <div className="features-card-content text-center">
                              <h4 className="features-card-title">{item.title}</h4>
                              <div className="features-description">
                                 {item.description}
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Features;
