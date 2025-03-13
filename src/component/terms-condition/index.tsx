import Breadcrumb from "../common/Breadcrumb"
import Header from "@/layouts/headers/Header"
import Footer from "@/layouts/footers/Footer"
import TermsCondition from "./TermsCondition"

const Team = () => {
   return (
      <main>
         <Header />
         <Breadcrumb title="Terms & Condition" />
         <TermsCondition />
         <Footer />
      </main>
   )
}

export default Team;
