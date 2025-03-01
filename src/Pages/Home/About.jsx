import { useEffect, useState } from "react";
import PageTitle from "../../Shared/PageTitle";
import Navbar from "../../Shared/Navbar";
import team from "/assets/team.webp";

const About = () => {
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
    <>
      {/* pageTitle */}
      <div className="bg-[#0f252a] text-white bg-[url(/assets/bg.webp)] bg-cover bg-center bg-no-repeat">
        <div
          className={
            isScroll
              ? "fixed duration-700 top-0 z-50 w-full text-white bg-[#10252a] dark:bg-[#010313] backdrop-blur-sm dark:backdrop-blur-sm bg-opacity-70 dark:bg-opacity-70"
              : ""
          }
        >
          <Navbar></Navbar>
        </div>
        <div className="pt-8 pb-20">
          <PageTitle
            heading1={"About"}
            heading2={"Us"}
            subHeading={"About Us"}
          ></PageTitle>
        </div>
      </div>

      {/* about */}
      <div className="max-w-screen-xl lg:px-20 sm:px-14 mx-auto px-6 shadow-2xl rounded-2xl sm:mb-60 mb-44">
        <div className="sm:pt-24 pt-14 sm:mt-28 mt-16 text-[#7b7c7d] dark:text-white">
          <h2 className="text-5xl font-semibold text-center title-font text-black dark:text-white">
            Edify
          </h2>
          <p className="pt-6">
            Welcome to Edify – a cutting-edge scholarship management system
            designed to make education accessible and seamless for students
            across the globe. At Edify, we understand the challenges students
            face when searching for financial support for their education. Our
            mission is to simplify the scholarship process, providing a
            user-friendly platform that connects students with a wide range of
            scholarship opportunities. Whether you are a high school student
            seeking financial aid for college or a graduate pursuing further
            studies, Edify helps guide you through every step, from application
            to award.
          </p>

          <h2 className="text-4xl pt-12 font-semibold title-font text-black dark:text-white">
            Our Vision
          </h2>
          <p className="pt-3">
            Our vision is to create an accessible, transparent, and efficient
            scholarship management system that empowers students, institutions,
            and organizations. We believe that education is the key to unlocking
            a brighter future, and we are committed to breaking down financial
            barriers that may prevent talented individuals from achieving their
            academic goals.
          </p>

          <h2 className="text-4xl pt-12 font-semibold title-font text-black dark:text-white">
            What We Do
          </h2>
          <li className="pt-4">
            <span className="font-extrabold">
              Streamlined Scholarship Applications:
            </span>
            With Edify, you can easily find, apply, and track scholarships that
            match your profile and goals. Our platform allows students to apply
            to multiple scholarships in just a few clicks.
          </li>

          <li className="pt-4">
            <span className="font-extrabold">
              Customizable Scholarship Portal for Institutions:
            </span>
            Educational institutions and organizations can manage and distribute
            scholarships efficiently through our secure portal. We offer
            features to track applications, review submissions, and communicate
            directly with applicants.
          </li>

          <li className="pt-4">
            <span className="font-extrabold">End-to-End Solution:</span> EFrom
            discovering scholarships to award management, Edify provides a
            comprehensive solution for both students and institutions. We take
            the complexity out of the process, allowing you to focus on what
            matters most—your education.
          </li>
        </div>
        <div className="md:pb-10 pt-8 md:pt-16 pb-4">
          <img src={team} alt="" className="rounded-xl" />
        </div>

        <div className="text-[#7b7c7d] dark:text-white">
          <h2 className="text-4xl pt-6  font-semibold title-font text-black dark:text-white">
            Our Values
          </h2>
          <p className="pt-4">
            At Edify, our values are the foundation of everything we do. We
            operate with integrity, ensuring that all of our processes are
            transparent, ethical, and trustworthy for both students and
            institutions. We are driven by innovation, constantly improving our
            platform with the latest technology to meet the evolving needs of
            our users. Above all, we believe in accessibility, striving to
            provide equal opportunities for all students, regardless of
            background, to achieve their educational dreams. These core values
            guide us in our mission to make scholarship management more
            efficient, inclusive, and impactful for everyone involved.
          </p>
        </div>

        <div className="text-[#7b7c7d] dark:text-white">
          <h2 className="text-4xl pt-12  font-semibold title-font text-black dark:text-white">
            Why Choose Edify?
          </h2>
          <p className="pt-4">
            Edify stands out as the ultimate scholarship management platform by
            offering a user-friendly experience, a comprehensive database of
            scholarship opportunities, and a commitment to security and privacy.
            Designed with both students and institutions in mind, our intuitive
            interface makes finding and applying for scholarships easier than
            ever. We connect students with a wide variety of scholarships
            tailored to their unique qualifications and needs, ensuring they
            have access to opportunities they might otherwise miss. With a focus
            on data protection and transparency, Edify provides a trusted
            environment for users to manage their scholarship applications with
            peace of mind. When you choose Edify, you’re not just using a
            platform – you’re joining a community dedicated to making education
            more accessible for everyone.
          </p>

          <p className="sm:pb-28 pb-14">
            <br />
            At Edify, we are passionate about education and strive to support
            students on their academic journey. We are here to make scholarships
            more accessible, so you can focus on what matters most—your future.
            Join the Edify community today and take the first step toward making
            your educational dreams a reality!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
