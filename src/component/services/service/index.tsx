import Breadcrumb from "@/component/common/Breadcrumb";
import ServiceDetail from "./ServiceDetail";
import Header from "@/layouts/headers/Header";
import Footer from "@/layouts/footers/Footer";

const Blog = () => {
  return (
    <main>
      <Header />
      <Breadcrumb title="Services" />
      <ServiceDetail/>
      <Footer />
    </main>
  )
}

export default Blog;
