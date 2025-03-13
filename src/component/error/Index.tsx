import Link from "next/link"

const Error = () => {
   return (
      <>
         <main>
            <section className="error-area">
               <div className="container">
                  <div className="row justify-content-center">
                     <div className="col-xxl-6 col-xl-7 col-lg-9 col-md-10">
                        <div className="error__content text-center">
                           <h2 className="error__title">404</h2>
                           <h3>Page not found</h3>
                           <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                           <Link className="btn btn2" href="/">Back to home</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </main>
      </>
   )
}

export default Error
