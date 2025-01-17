import Navbar from "../../Shared/Navbar";
import PageTitle from "../../Shared/PageTitle";

const AddScholarship = () => {
  return (
    <>
      {/* pageTitle */}
      <div className="bg-[#0f252a] text-white bg-[url(assets/bg.webp)] bg-cover bg-center bg-no-repeat">
        <div>
          <Navbar></Navbar>
        </div>

        <div className="pt-12 pb-24">
          <PageTitle
            heading1={"Add"}
            heading2={"Scholarship"}
            subHeading={"Add Scholarship"}
          ></PageTitle>
        </div>
      </div>

      {/* scholarship */}
    </>
  );
};

export default AddScholarship;
