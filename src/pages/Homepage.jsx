import SubHeader from "../components/SubHeader";
import Header from "../components/Header";
import Main from "../components/Main";
import AboutTrailer from "../components/AboutTrailer";
import ServicesTrailer from "../components/ServicesTrailer";
import GalleryTrailer from "../components/GalleryTrailer";
import Videos from "../components/Videos";
import PhysioAtHome from "../components/PhysioAtHome";
import BookLinkCard from "../components/BookLinkCard";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Homepage() {
  return (
    <div className="w-full flex flex-col items-center">
      <SubHeader />
      <Header />
      <Main />
      <div className="w-full flex flex-col items-center relative top-[90vh]">
        <AboutTrailer />
        <ServicesTrailer />
        <PhysioAtHome />
        <GalleryTrailer />
        <Videos />
        <BookLinkCard />
        <Testimonials />
        <Footer />
      </div>
    </div>
  )
}
