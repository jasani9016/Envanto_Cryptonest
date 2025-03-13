"use client";

import BlogDetailsArea from "@/component/blogs/blog-details/BlogDetailsArea";
import Breadcrumb from "@/component/common/Breadcrumb";
import blog_data from "@/data/BlogData";
import Wrapper from "@/layouts/Wrapper";
import Footer from "@/layouts/footers/Footer";
import Header from "@/layouts/headers/Header";


const index = ({ params }: { params: { id: number } }) => {

   const single_blog = blog_data.find((item) => Number(item.id) === Number(params.id));

   return (
      <Wrapper>
         <main>
            <Header />
            <Breadcrumb title="Blog Details" />
            <BlogDetailsArea single_blog={single_blog} key={single_blog?.id} />
            <Footer />
         </main>
      </Wrapper>
   )
}

export default index