import Image, { StaticImageData } from "next/image";
import invest_thumb from "@/assets/img/invest/about-us-03.jpg";
import account_thumb from "@/assets/img/invest/account.svg";
import deposites_thumb from "@/assets/img/invest/deposit.svg";
import trade_thumb from "@/assets/img/invest/cart.svg";

interface InvestData {
   id: number;
   icon: StaticImageData;
   title: string;
   description: string;
}

const invest_data: InvestData[] = [
   {
      id: 1,
      icon: account_thumb,
      title: "Create An Account",
      description: "Sign up for a free account and you can start trading in minutes."
   },
   {
      id: 2,
      icon: deposites_thumb,
      title: "Make a Deposit",
      description: "Add funds to your account via bank transfer or credit card."
   },
   {
      id: 3,
      icon: trade_thumb,
      title: "Start Trading",
      description: "Choose from a variety of assets to trade and earn up to 85% in minutes."
   },
];

const InvestIntro = () => {

   return (
      <div className="pt-140 pb-140 overflow-hidden bg-section2">
         <div className="container">
            <div className="row gy-40 justify-content-between">
               <div className="col-xl-6 text-xl-start">
                  <div className="section-title mb-50">
                     <h5 className="subtitle">3 STEPS TO START TREDING</h5>
                     <h2 className="title style2">We Make Crypto Easy,Sign up and Get Started </h2>
                  </div>

                  <div className="row gy-4">
                     {
                        invest_data.map((item) => (
                           <div key={item.id}>
                              <div className="invest-card">
                                 <div className="invest-card-icon">
                                    <Image src={item.icon} alt="img" />
                                 </div>
                                 <div className="invest-card-details">
                                    <h3 className="invest-card-title">{item.title}</h3>
                                    <p className="invest-card-text">{item.description}</p>
                                 </div>
                              </div>
                           </div>
                        ))
                     }
                  </div>

               </div>
               <div className="col-xxl-6 col-xl-4">
                  <div className="invest-thumb">
                     <Image src={invest_thumb} alt="img" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default InvestIntro
