import Breadcrumb from "../common/Breadcrumb"
import ContactArea from "./ContactArea"
import Header from "@/layouts/headers/Header"
import Footer from "@/layouts/footers/Footer"

const Contact = () => {
   return (
      <main>
         <Header/>
         <Breadcrumb title="Contact" />
         <ContactArea />
         <Footer />
      </main>
   )
}

export default Contact
