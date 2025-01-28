import PageTitle from "../../Shared/PageTitle";
import Scholarship from "./Scholarship";

const AddScholarship = () => {
  return (
    <>
      {/* pageTitle */}
      <div className="bg-[#0f252a] text-white bg-[url(assets/bg.webp)] bg-cover bg-center bg-no-repeat">
        <div className="py-20">
          <PageTitle
            heading1={"Add"}
            heading2={"Scholarship"}
            subHeading={"Dashboard"}
          ></PageTitle>
        </div>
      </div>

      {/* scholarship */}
      <Scholarship></Scholarship>
    </>
  );
};

export default AddScholarship;
