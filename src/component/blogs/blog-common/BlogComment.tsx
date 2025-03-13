import Image from "next/image"
import Link from "next/link"

import commentAvatar_1 from "@/assets/img/blog/comment01.png"
import commentAvatar_2 from "@/assets/img/blog/comment02.png"


const BlogComment = () => {
   return (
      <div className="comments-wrap">
         <h3 className="comments-wrap-title">Comments 02</h3>
         <div className="latest-comments">
            <ul className="list-wrap">
               <li>
                  <div className="comments-box">
                     <div className="comments-avatar">
                        <Image src={commentAvatar_1} alt="img" />
                     </div>
                     <div className="comments-text">
                        <div className="avatar-name">
                           <h6 className="name">RD King <Link href="#" className="reply-btn">Reply</Link></h6>
                           <span className="date">August 01, 2024</span>
                        </div>
                        <p>The platform itself was incredibly user-friendly, making it easy for me to participate in the ICO. The intuitive interface guided me through the token purchase process seamlessly.</p>
                     </div>
                  </div>
                  
                  <ul className="children list-wrap">
                     <li>
                        <div className="comments-box">
                           <div className="comments-avatar">
                              <Image src={commentAvatar_2} alt="img" />
                           </div>
                           <div className="comments-text">
                              <div className="avatar-name">
                                 <h6 className="name">Angle Doen <Link href="#" className="reply-btn">Reply</Link></h6>
                                 <span className="date">August 02, 2024</span>
                              </div>
                              <p>What stood out to me the most was the exceptional customer support. The team behind the platform was responsive and
                                 helpful, promptly addressing my inquiries and providing.</p>
                           </div>
                        </div>
                     </li>
                  </ul>
               </li>
            </ul>
         </div>
      </div>
   )
}

export default BlogComment
