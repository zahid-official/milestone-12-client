import PageTitle from "../../Shared/PageTitle";

const MyProfile = () => {
  return (
    <div>
      {/* pageTitle */}
      <div className="bg-[#0f252a] text-white bg-[url(assets/bg.webp)] bg-cover bg-center bg-no-repeat">
        <div className="p-20">
          <PageTitle
            heading1={"My"}
            heading2={"Profile"}
            subHeading={"Dashboard"}
          ></PageTitle>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
