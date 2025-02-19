import { useEffect, useState } from "react";
import Navbar from "../../Shared/Navbar";
import Banner from "./Banner";
import Achievements from "./Extra/Achievements";
import FAQ from "./FAQ";
import Feature from "./Feature";
import OurStory from "./OurStory";
import TopScholarship from "./TopScholarship";
import WeOffers from "./WeOffers";
import WhyWe from "./WhyWe";

const Home = () => {
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      if(scrollY > 120) {
        setIsScroll(true)
      }
      else{
        setIsScroll(false);
      }
    })
  }, []);

  console.log(isScroll);
  return (
    <>
      {/* Header */}
      <header className="bg-[#0f252a] text-white bg-[url(/assets/bg.avif)] bg-cover bg-no-repeat">
        {/* navbar */}
        <div className={isScroll ? "fixed duration-700 top-0 z-50 w-full bg-[#10252a] dark:bg-[#010313] backdrop-blur-sm dark:backdrop-blur-sm bg-opacity-70 dark:bg-opacity-70" : ""}>
          <Navbar></Navbar>
        </div>
        {/* banner */}
        <div className="px-3">
          <Banner></Banner>
        </div>
      </header>

      {/* our story */}
      <section className=" pt-40 xl:pb-16 pb-36">
        <OurStory></OurStory>
      </section>

      {/* why we */}
      <section>
        <WhyWe></WhyWe>
      </section>

      {/* top scholarship */}
      <section className="pt-28 pb-40">
        <TopScholarship></TopScholarship>
      </section>

      {/* Achievements */}
      <section className="mb-36">
        <Achievements></Achievements>
      </section>

      {/* feature */}
      <section className="pb-36">
        <Feature></Feature>
      </section>

      {/* we offers */}
      <section className="pb-28">
        <WeOffers></WeOffers>
      </section>

      {/* faq */}
      <section className="pb-36">
        <FAQ></FAQ>
      </section>
    </>
  );
};

export default Home;
