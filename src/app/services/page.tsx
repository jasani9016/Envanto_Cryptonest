import Service from "@/component/services/service";
import Wrapper from "@/layouts/Wrapper";


export const metadata = {
  title: "Service Page",
};
const index = () => {
  return (
    <Wrapper>
      <Service />
    </Wrapper>
  )
}

export default index