import Link from "next/link";
const Breadcrumb = ({ title }: any) => {
   return (
      <section className="breadcrumb-area breadcrumb-bg">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="breadcrumb-content">
                     <h2 className="title">{title}</h2>
                     <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                           <li className="breadcrumb-item"><Link href="/">
                              <i className="fas fa-home"></i>
                           </Link></li>
                           <li className="breadcrumb-item active" aria-current="page">{title}</li>
                        </ol>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Breadcrumb
