"use client"
import blog_data from "@/data/BlogData"
import Image from "next/image"
import Link from "next/link"
import BlogSidebar from "../blog-common/BlogSidebar"
import { useState } from "react"

const BlogArea = () => {

   const [currentPage, setCurrentPage] = useState(1);
   const [itemOffset, setItemOffset] = useState(0);

   const blogs = blog_data;

   const itemsPerPage = 6;
   const endOffset = itemOffset + itemsPerPage;
   const currentItems = blogs.slice(itemOffset, endOffset);

   // click to request another page.
   const handlePageClick = (pageNumber: number) => {
      if (pageNumber < 1 || pageNumber > totalPages) {
         return;
      }

      const newOffset = (pageNumber - 1) * itemsPerPage; // Calculate the new offset
      setItemOffset(newOffset);
      setCurrentPage(pageNumber); // Update the currentPage state
   };

   // Calculate total number of pages
   const totalPages = Math.ceil(blogs.length / itemsPerPage);

   // Generate an array of page numbers
   const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

   // Render pagination links
   const renderPaginationLinks = () => {
      return pageNumbers.map((pageNumber) => (
         <li key={pageNumber} className={pageNumber === currentPage ? 'active' : ''}>
            <a style={{ cursor: "pointer" }} onClick={() => handlePageClick(pageNumber)}>
               {pageNumber}
            </a>
         </li>
      ));
   };

   return (
      <section className="blog-detail pt-140 pb-140 bg-section">
         <div className="container">
            <div className="row">
               <div className="col-lg-8">
                  <div className="blog-post-wrap row gy-30 gx-30 mb-50">
                     {currentItems.map((item) => (
                        <div key={item.id} className="col-lg-6 col-md-6">
                           <div className="recent-blog-card style2">
                              <div className="recent-blog-card-header">
                                 <Image src={item.thumbnail} alt="img" />
                              </div>

                              <div className="recent-blog-card-body">
                                 <div className="recent-blog-card-meta">
                                    <div className="author">
                                       <i className="fas fa-user"></i>
                                       {item.author}
                                    </div>
                                    <div className="date">
                                       <i className="far fa-calendar-alt"></i>
                                       {item.date}
                                    </div>
                                 </div>

                                 <div className="recent-blog-card-content">
                                    <h2> {item.title} </h2>
                                    <p>{item.desc}  </p>
                                    <Link className="btn btn2" href="/blog">Read More</Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>

                  <nav className="pagination-wrap">
                     <ul className="list-wrap">
                        <li>
                           <a
                              onClick={() => handlePageClick(currentPage - 1)}
                              style={{ cursor: 'pointer' }}
                              className={currentPage === 1 ? 'disabled' : ''}><i className="fas fa-arrow-left"></i>
                           </a>
                        </li>
                        {renderPaginationLinks()}
                        <li>
                           <a onClick={() => handlePageClick(currentPage + 1)} style={{ cursor: 'pointer' }} className={currentPage === totalPages ? 'disabled' : ''}><i className="fas fa-arrow-right"></i>
                           </a>
                        </li>
                     </ul>
                  </nav>
               </div>
               <BlogSidebar />
            </div>
         </div>
      </section >
   )
}

export default BlogArea
