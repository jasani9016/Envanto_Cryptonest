import Breadcrumb from "@/component/common/Breadcrumb";
import BlogArea from "./BlogArea";
import Header from "@/layouts/headers/Header";
import Footer from "@/layouts/footers/Footer";

const Blog = () => {
  return (
    <main>
      <Header />
      <Breadcrumb title="Latest blog" />
      <BlogArea/>
      <Footer />
    </main>
  )
}

export default Blog;
