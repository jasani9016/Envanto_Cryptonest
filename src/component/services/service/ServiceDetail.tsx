import Link from "next/link";
import LayerImg from "@/assets/img/services/layer.svg";
import MapImage from "@/assets/img/services/map.svg";
import ComputerImg from "@/assets/img/services/computer.svg";
import SecurityImg from "@/assets/img/services/security.svg";
import Image from "next/image"
import TransactionsDetail from "../transactions/TransactionsDetail";



interface DataType {
   id: number;
   icon: string;
   title: string;
   description: string;
}

const service_data: DataType[] = [
   {
      id: 1,
      icon: LayerImg,
      title: "Transparency",
      description: "Cryptography, encryption process referred to as plaintext",
   },
   {
      id: 2,
      icon: MapImage,
      title: "External Method",
      description: "Cryptography, encryption process referred to as plaintext",
   },
   {
      id: 3,
      icon: ComputerImg,
      title: "User Dashboard",
      description: "Cryptography, encryption process referred to as plaintext",
   },
   {
      id: 4,
      icon: SecurityImg,
      title: "High Security",
      description: "Cryptography, encryption process referred to as plaintext",
   },
]


const ServiceDetail = () => {
   return (
      <section className="service-detail pt-140 pb-140">
         <div className="container">
            <div className="service-info-wrap">
               <div className="row justify-content-center">
                  {service_data.map((item) => (
                     <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
                        <div className="service-info-item">
                           <div className="icon">
                              <Image src={item.icon} alt="icon" />
                           </div>
                           <div className="content">
                              <h6 className="title">{item.title}</h6>
                              <p>{item.description}</p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            <div className="transaction-wrap">
               <TransactionsDetail />
            </div>
         </div>
      </section >
   )
}

export default ServiceDetail
