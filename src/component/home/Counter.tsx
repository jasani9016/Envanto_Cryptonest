import CoinInfoData from "@/data/CoinInfoCounter";
import Counter from "@/component/common/Counter";


const CoinInfoCounter = () => {
   return (
      <div className="pt-130 pb-130 bg-section2">
         <div className="container">
            <div className="row justify-content-center">
               {
                  CoinInfoData.map((item, index) => (
                     <div className="col-lg-3 col-md-6" key={index}>
                        <div className="counter-item">
                           <h2 className="counter-number">
                              <Counter
                                 end={item.number}
                                 decimal="."
                                 decimals={item.number % 1 !== 0 ? "2" : "0"}
                                 suffix={item.unit}
                              />
                           </h2>
                           <p className="counter-text">{item.text}</p>
                        </div>
                     </div>
                  ))
               }
            </div>
         </div>
      </div>
   )
}

export default CoinInfoCounter
