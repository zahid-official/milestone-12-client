import { useEffect, useState } from "react";
import Navbar from "../../../Shared/Navbar";

const Contact = () => {
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 80) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <div>
      {/* nav */}
      {/* navbar */}
      <div
        className={
          isScroll
            ? "fixed duration-700 top-0 z-50 w-full text-white bg-[#10252a] dark:bg-[#010313] backdrop-blur-sm dark:backdrop-blur-sm bg-opacity-70 dark:bg-opacity-70"
            : ""
        }
      >
        <Navbar></Navbar>
      </div>
    </div>
  );
};

export default Contact;
