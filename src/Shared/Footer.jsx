import { Link } from "react-router-dom";
import { FaDiscord, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import logo from "/assets/logo.png";

const Footer = () => {
  // currentYear for Copywrite
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[url(/assets/footer.avif)] bg-cover bg-center bg-no-repeat bg-[#0f252a] text-white px-6 mt-32">
      {/* message */}
      <div className="bg-[#214d52] bg-[url(/assets/topScholarship.svg)] bg-cover -translate-y-28 lg:text-left text-center flex lg:flex-row flex-col items-center justify-between sm:px-20 px-4 sub-font font-medium py-16 rounded-lg max-w-screen-xl mx-auto">
        <h2 className="text-4xl ">If you are ready to start journey!</h2>
        <Link to={"/allScholarship"}>
          <button className="btn bg-[#0f252a] h-16 border-[#3f5155] hover:border-[#3f5155] rounded-none border-none px-8 hover:bg-[#0c1f24] text-white mt-7 text-lg font-semibold">
            Browse Opportunities
          </button>
        </Link>
      </div>

      {/* footer */}
      <footer className="footer lg:justify-around pb-20 pt-4 text-base px-10 relative ">
        <aside>
          <div className="flex items-center gap-2">
            <Link to={"/"}>
              <h2 className="text-4xl p-4 font-bold title-font flex items-center title-font">
                <img src={logo} className="mr-1.5" alt="" /> Edify
              </h2>
            </Link>
          </div>
          <p>
            Edify Industries Ltd.
            <br />
            Providing reliable tech since 2015
          </p>
          <ul className="flex items-center gap-2 mt-2">
            <li>
              <Link to={"https://www.facebook.com/"}>
                <span className="hover:text-[#0866ff]">
                  <FaFacebookSquare size={30} />
                </span>
              </Link>
            </li>
            <li>
              <Link to={"https://www.linkedin.com/"}>
                <span className="hover:text-[#0a66c2]">
                  <FaLinkedin size={30} />
                </span>
              </Link>
            </li>
            <li>
              <Link to={"https://www.instagram.com/"}>
                <span className="hover:text-[#e0084b]">
                  <RiInstagramFill size={30} />
                </span>
              </Link>
            </li>
            <li>
              <Link to={"https://discord.com/"}>
                <span className="hover:text-[#5866f1]">
                  <FaDiscord size={30} />
                </span>
              </Link>
            </li>
          </ul>
        </aside>

        <nav>
          <h6 className="Edify dark:text-white font-bold text-xl">
            Quick Link
          </h6>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Top Author</a>
          <a className="link link-hover">Top Categories</a>
        </nav>
        <nav>
          <h6 className="Edify dark:text-white font-bold text-xl">
            Help Center
          </h6>
          <a className="link link-hover">Courses</a>
          <a className="link link-hover">Support</a>
          <a className="link link-hover">Get Help</a>
          <a className="link link-hover">Privacy Policy</a>
        </nav>
        <nav>
          <h6 className="Edify dark:text-white font-bold text-xl">
            Contact Info
          </h6>
          <a className="link link-hover"> Call Us: 1-885-665-2548</a>
          <a className="link link-hover">
            Address: +7811 Vermont Ave, <br /> Los Angeles, CA 90054
          </a>
          <a className="link link-hover">Mail Us: hello@Edify.com</a>
        </nav>
      </footer>

      {/* copyright */}
      <div className="py-7 px-5 text-lg font-semibold text-center border-t border-[#223a3d]">
        <p>
          Copyright © {currentYear} - Edify is Proudly Owned by Zahidul Islam
        </p>
      </div>
    </div>
  );
};

export default Footer;
