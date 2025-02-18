import Navbar from "../../Shared/Navbar";
import Banner from "./Banner";
import Achievements from "./Extra/Achievements";
import Feature from "./Feature";
import OurStory from "./OurStory";
import TopScholarship from "./TopScholarship";

const Home = () => {
  return (
    <>
      {/* Header */}
      <header className="bg-[#0f252a] text-white bg-[url(/assets/bg.avif)] bg-cover bg-no-repeat">
        {/* navbar */}
        <div className="">
          <Navbar></Navbar>
        </div>
        {/* banner */}
        <div className="px-3">
          <Banner></Banner>
        </div>
      </header>

      {/* our story */}
      <div className=" pt-40 xl:pb-16 pb-36">
        <OurStory></OurStory>
      </div>

      {/* feature */}
      <section className="">
        <Feature></Feature>
      </section>

      {/* top scholarship */}
      <section>
        <TopScholarship></TopScholarship>
      </section>

      {/* Achievements */}
      <section>
        <Achievements></Achievements>
      </section>

    </>
  );
};

export default Home;
