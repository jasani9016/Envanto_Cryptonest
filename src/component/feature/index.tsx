import Breadcrumb from "../common/Breadcrumb"
import Header from "@/layouts/headers/Header"
import Footer from "@/layouts/footers/Footer"
import FeatureDetail from "./FeatureDetail"

const Feature = () => {
   return (
      <main>
         <Header />
         <Breadcrumb title="Features" />
         <FeatureDetail />
         <Footer />
      </main>
   )
}

export default Feature;
