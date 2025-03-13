import Team from "@/component/team";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Team Page",
};
const index = () => {
   return (
      <Wrapper>
         <Team />
      </Wrapper>
   )
}

export default index