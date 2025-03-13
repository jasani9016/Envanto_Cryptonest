"use client"
import BlogRcPost from "./BlogRcPost"
import RecentComment from "./RecentComment"

const BlogSidebar = () => {
   return (
      <div className="col-lg-4">
         <aside className="blog-sidebar">
            <div className="blog-widget">
               <h4 className="widget-title">Search</h4>
               <div className="sidebar-search">
                  <form onSubmit={(e) => e.preventDefault()}>
                     <input type="text" placeholder="Search your keyword" />
                     <button type="submit"><i className="fas fa-search"></i></button>
                  </form>
               </div>
            </div>
            <BlogRcPost />
            <RecentComment />
         </aside>
      </div>
   )
}

export default BlogSidebar
