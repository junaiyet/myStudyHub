import Banner from "../components/Banner/Banner"
import Blog from "../components/Blog/Blog"
import BookNow from "../components/BookNow/BookNow"
import Contact from "../components/Contact/Contact"
import Testimonials from "../components/Testimonials/Testimonials"

function Home() {
  return (
    <>
        <Banner/>
        <BookNow/>
        <Testimonials/>
        <Blog/>
        <Contact/>
    </>
  )
}

export default Home