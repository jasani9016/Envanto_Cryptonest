import Breadcrumb from "../common/Breadcrumb"
import Header from "@/layouts/headers/Header"
import Footer from "@/layouts/footers/Footer"
import FaqDetail from "./FaqDetail"

const Feature = () => {
   return (
      <main>
         <Header />
         <Breadcrumb title="Questions & Answer" />
         <FaqDetail />
         <Footer />
      </main>
   )
}

export default Feature;
