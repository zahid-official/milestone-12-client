import PageTitle from "../../Shared/PageTitle";

const MyApplications = () => {
  return (
    <div>
      {/* pageTitle */}
      <div className="bg-[#0f252a] text-white bg-[url(assets/bg.webp)] bg-cover bg-center bg-no-repeat">
        <div className="p-20">
          <PageTitle
            heading1={"My"}
            heading2={"Applications"}
            subHeading={"Dashboard"}
          ></PageTitle>
        </div>
      </div>
    </div>
  );
};

export default MyApplications;
