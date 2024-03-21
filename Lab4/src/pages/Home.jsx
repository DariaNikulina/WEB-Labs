import Header from "../components/Header";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import WhatIsChatGpt from "../components/WhatIsChatGpt";
import FutureHere from "../components/FutureHere";
import Exceeding from "../components/Exceeding";
import Begin from "../components/Begin";
import BlogText from "../components/BlogText";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import End from "../components/End";

const Home = () => {
  return (
    <>
      <section className="section header">
        <Header />
      </section>
      <section className="section hero_section">
        <Hero />
      </section>
      <section className="section brands_section">
        <Brands />
      </section>
      <section className="section what_is_chatgpt_section">
        <WhatIsChatGpt />
      </section>
      <section className="section future_here">
        <FutureHere />
      </section>
      <section className="section exceeding_expectation">
        <Exceeding />
      </section>
      <section className="section begin">
        <Begin />
      </section>
      <section className="section blog_text">
        <BlogText />
      </section>
      <section className="section blog">
        <Blog />
      </section>
      <section className="section footer">
        <Footer />
      </section>
      <section className="end">
        <End />
      </section>
    </>
  );
};

export default Home;
