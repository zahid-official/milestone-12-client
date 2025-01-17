import Navbar from "../../Shared/Navbar";
import Banner from "./Banner";
import Feature from "./Feature";

const Home = () => {
  return (
    <>
      {/* Header */}
      <header className="bg-[#0f252a] text-white bg-[url(assets/bg.avif)] bg-cover bg-no-repeat">
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
      <section className="bg-[#f0eee6] py-44">
        <Feature></Feature>
      </section>
    </>
  );
};

export default Home;
