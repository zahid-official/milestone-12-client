import applicant from "/assets/applicant.avif";

const Achievements = () => {
  return (
    <div className="bg-[#0f2327] bg-[url(/assets/achievements.avif)] bg-no-repeat bg-cover min-h-[87vh] flex justify-center items-center mb-60 sub-font text-white sm:px-16 px-6 py-28">
      <div className="grid xl:grid-cols-2 gap-2 w-full max-w-screen-xl mx-auto">
        {/* left */}
        <div className="flex xl:justify-start justify-center">
          <div>
            <h3 className="uppercase font-bold">Our Achievement</h3>
            <h2 className="text-5xl font-bold mt-3 mb-12">
              Trusted by our <br />
              successful Applicants
            </h2>
            <div className="max-w-lg">
              <img src={applicant} alt="" />
            </div>
          </div>
        </div>

        {/* right */}
        <div className="mt-[73px]">
          <div className="flex sm:justify-between gap-5 justify-center w-full flex-wrap">
            <div className="flex items-center gap-7">
              <h2 className="text-6xl font-bold border-r pr-7">70K</h2>
              <p className="uppercase font-semibold flex flex-col text-[#a0a1a5]">
                Successful <span>Applicant</span>
              </p>
            </div>

            <div className="flex items-center gap-7">
              <h2 className="text-6xl font-bold border-r pr-7">25K</h2>
              <p className="uppercase font-semibold flex flex-col text-[#a0a1a5]">
                Global <span>Placement</span>
              </p>
            </div>
          </div>

          <p className="mt-16">
            Our scholarship recipients consistently shine in their academic and
            professional journeys. With access to world-class resources,
            mentorship, and cutting-edge research opportunities, they are
            well-equipped to thrive. Many secure prestigious internships, gain
            valuable experience, and contribute to groundbreaking projects. The
            Cairo University Scholarship is more than financial support—it’s a
            launchpad for success. We take pride in fostering the growth of
            these talented individuals.
            <br />
            <br />
            The scholarship empowers students to grow personally and
            professionally, developing leadership skills and lasting networks.
            Recipients excel in their fields, make a positive impact on their
            communities, and are equipped to shape the future. We’re proud to
            support these driven individuals as they become tomorrow’s leaders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
