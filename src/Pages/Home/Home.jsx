import Navbar from "../../Shared/Navbar";
import Banner from "./Banner";
import Feature from "./Feature";
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

      {/* Feature */}
      <section className="bg-[#f4f1eb] py-44">
        <Feature></Feature>
      </section>

      {/* top scholarship */}
      <section>
        <TopScholarship></TopScholarship>
      </section>
    </>
  );
};

export default Home;
