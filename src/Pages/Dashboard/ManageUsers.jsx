import PageTitle from "../../Shared/PageTitle";

const ManageUsers = () => {
  return (
    <div>
      {/* pageTitle */}
      <div className="bg-[#0f252a] text-white bg-[url(assets/bg.webp)] bg-cover bg-center bg-no-repeat">
        <div className="p-20">
          <PageTitle
            heading1={"Manage"}
            heading2={"Users"}
            subHeading={"Dashboard"}
          ></PageTitle>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
