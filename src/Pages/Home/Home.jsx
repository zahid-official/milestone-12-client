import Navbar from "../../Shared/Navbar";
import Banner from "./Banner";

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
        <div className="pb-1 px-3">
          <Banner></Banner>
        </div>
      </header>
    </>
  );
};

export default Home;
