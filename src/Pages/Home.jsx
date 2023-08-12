import Banner from "../components/Banner/Banner"
import Blog from "../components/Blog/Blog"
import BookNow from "../components/BookNow/BookNow"
import Testimonials from "../components/Testimonials/Testimonials"

function Home() {
  return (
    <>
        <Banner/>
        <BookNow/>
        <Testimonials/>
        <Blog/>
    </>
  )
}

export default Home