import Feature from "@/component/feature";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Features Page",
};
const index = () => {
   return (
      <Wrapper>
         <Feature />
      </Wrapper>
   )
}

export default index