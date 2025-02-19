import ourStory1 from "/assets/ourStory1.webp";
import ourStory2 from "/assets/ourStory2.webp";

const OurStory = () => {
  return (
    <div className="grid lg:grid-cols-2 lg:gap-5 gap-20 px-6 container mx-auto">
      {/* left */}
      <div className="flex flex-col items-center justify-center order-1 ">
        <div className="grid lg:grid-cols-3">
          <img src={ourStory1} alt="" className="rounded-lg col-span-2" />
          <div
            className="max-h-fit text-center ml-6 translate-y-4 z-30 lg:block hidden"
            style={{ "writingMode": "vertical-lr" }}
          >
            <p className="uppercase text-sm">Years experiance</p>
            <h2 className="font-semibold text-8xl">25</h2>
          </div>
        </div>

        <div className="xl:ml-40  xl:-translate-y-20 translate-y-6">
          <img src={ourStory2} alt="" className="rounded-lg" />
        </div>
      </div>

      {/* right */}
      <div className="lg:ml-12 content-center lg:order-1 order-0">
        <h4 className="font-semibold text-lg">Our Story</h4>
        <h2 className="sm:text-5xl text-4xl pt-4 pb-7 font-semibold sub-font">Limitless learning and get more possibilities</h2>
        <p>
        Discover a world of limitless learning, where education knows no bounds. At our core, we believe every dream deserves a chance to flourish. Through this scholarship, unlock opportunities that expand your horizons and empower you to achieve more possibilities. Whether you aspire to innovate, lead, or inspire, we’re here to support your journey. Our mission is simple: provide tools, resources, and encouragement so you can break barriers and redefine success. <br /><br />
        With access to transformative programs and mentorship, students like you can turn ambition into action. Embrace curiosity, fuel growth, and pave the way for a brighter future. Together, let’s create pathways to excellence and ensure no potential goes unrealized. Through dedication and determination, limitless learning becomes the foundation for endless achievements.
        </p>
      </div>
    </div>
  );
};

export default OurStory;
