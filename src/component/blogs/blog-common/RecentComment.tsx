import Image, { StaticImageData } from "next/image"
import auhtor1 from "@/assets/img/blog/blog_author01.png";
import auhtor2 from "@/assets/img/blog/blog_author02.png";
import auhtor3 from "@/assets/img/blog/blog_author03.png";


interface CommentData {
   id: number;
   author_img: StaticImageData;
   name: string;
   comment: string;
}

const comment_data: CommentData[] = [
   {
      id: 1,
      author_img: auhtor1,
      name: "John Doe",
      comment: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
   },
   {
      id: 2,
      author_img: auhtor2,
      name: "William Doe",
      comment: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
   },
   {
      id: 3,
      author_img: auhtor3,
      name: "Jack Doe",
      comment: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
   }
]

const RecentComment = () => {
   return (
      <div className="blog-widget">
         <h4 className="widget-title">Recent Comments</h4>

         <div className="recent-comments">
            {
               comment_data.map((comment) => (
                  <div key={comment.id} className="recent-comment-item">
                     <div className="comment-author">
                        <Image src={comment.author_img} alt="author" />
                        <h6>{comment.name}</h6>
                     </div>
                     <div className="comment-content">
                        <p>{comment.comment}</p>
                     </div>
                  </div>
               ))
            }
         </div>
      </div>
   )
}

export default RecentComment
