import { useState } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import NavBar from "./components/NavBar/navBar";
import Programs from "./components/Programs/Programs";
import Testimonials from "./components/Testimonials/Testimonials";
import Title from "./components/Title/Title";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import Zoo from "./components/Zoo/Zoo";

function App() {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <>
      <NavBar />
      <HomePage />
      <div className="container">
        <Title subTitle="Our PROGRAM" title="What we Offer" />
        <Programs />
        <About setPlayVideo={setPlayVideo} playVideo={playVideo} />
        <Title subTitle="GALLERY " title="Z00 Photos" />
        <Zoo />
        <Title subTitle="TESTIMONIALS " title="What Visitors Says" />
        <Testimonials />
        <Title subTitle="Contact Us " title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer setPlayVideo={setPlayVideo} playVideo={playVideo} />
    </>
  );
}

export default App;
