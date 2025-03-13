import Breadcrumb from "@/component/common/Breadcrumb"
import BlogDetailsArea from "./BlogDetailsArea"
import Header from "@/layouts/headers/Header"
import Footer from "@/layouts/footers/Footer"

const BlogDetails = () => {
  return (
    <main>
      <Header />
      <Breadcrumb title="Blog Details" />
      <BlogDetailsArea/>
      <Footer />
    </main>
  )
}

export default BlogDetails
