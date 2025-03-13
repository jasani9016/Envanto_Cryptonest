import Hero from "./Hero"
import Team from "./Team"
import Header from "@/layouts/headers/Header"
import About from "./About"
import Counter from "./Counter"
import Features from "./Features"
import InvestIntro from "./InvestIntro"
import Faq from "./Faq"
import ClientStory from "./ClientStory"
import RecentBlog from "./RecentBlog"
import Footer from "@/layouts/footers/Footer"

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Counter />
      <Features />
      <InvestIntro />
      <Team />
      <ClientStory />
      <Faq />
      <RecentBlog />
      <Footer />
    </div>
  )
}

export default Home
