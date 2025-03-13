import Contact from "@/component/contact";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Contact Page",
};
const index = () => {
   return (
      <Wrapper>
         <Contact />
      </Wrapper>
   )
}

export default index