import Faq from "@/component/faq";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "FAQ Page",
};
const index = () => {
   return (
      <Wrapper>
         <Faq />
      </Wrapper>
   )
}

export default index