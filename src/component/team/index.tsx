import Breadcrumb from "../common/Breadcrumb"
import Header from "@/layouts/headers/Header"
import Footer from "@/layouts/footers/Footer"
import TeamDetail from "./TeamDetail"

const Team = () => {
   return (
      <main>
         <Header />
         <Breadcrumb title="Teams" />
         <TeamDetail />
         <Footer />
      </main>
   )
}

export default Team;
