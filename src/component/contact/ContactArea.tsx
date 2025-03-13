import Link from "next/link";
import ContactForm from "../forms/ContactForm"

interface DataType {
   id: number;
   icon: string;
   title: string;
   info: JSX.Element;
}

const contact_data: DataType[] = [
   {
      id: 1,
      icon: "fas fa-map-marker-alt",
      title: "Location",
      info: (<>Melborn Cricket Ground. <br /> Melborn, Australia</>),
   },
   {
      id: 2,
      icon: "fas fa-phone-alt",
      title: "Contact",
      info: (<><Link href="tel:0123456789">+012 (345) 678 99</Link> <br /> <Link href="tel:0123456789">+012 (345) 678 90</Link></>),
   },
   {
      id: 3,
      icon: "fas fa-envelope",
      title: "Email",
      info: (<><Link href="mailto:hotline@gmail.com">hotline@gmail.com</Link> <br /> <Link href="mailto:hot@example.com">hot@example.com</Link></>),
   },
   {
      id: 4,
      icon: "fas fa-business-time",
      title: "Visit Between",
      info: (<>Mon - Sat : 9.00-6.00 <br /> Sunday : Closed</>),
   },
]

const ContactArea = () => {
   return (
      <section className="contact-detail pt-140 pb-140 bg-section">
         <div className="container">
            <div className="contact-detail-wrap">
               <div className="row justify-content-center">
                  {contact_data.map((item) => (
                     <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
                        <div className="contact-detail-item">
                           <div className="icon">
                              <i className={item.icon}></i>
                           </div>
                           <div className="content">
                              <h6 className="title">{item.title}</h6>
                              <p>{item.info}</p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            <div className="contact-form-detail">
               <div className="row g-0">
                  <ContactForm />
               </div>
            </div>
         </div>
      </section>
   )
}

export default ContactArea
