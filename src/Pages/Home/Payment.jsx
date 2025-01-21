import Navbar from "../../Shared/Navbar";
import PageTitle from "../../Shared/PageTitle";

const Payment = () => {
  return (
    <div>
      {/* pageTitle */}
      <div className="bg-[#0f252a] text-white bg-[url(assets/bg.webp)] bg-cover bg-center bg-no-repeat">
        <div>
          <Navbar></Navbar>
        </div>
        <div className="pt-8 pb-20">
          <PageTitle
            heading1={""}
            heading2={"Checkout"}
            subHeading={"Checkout"}
          ></PageTitle>
        </div>
      </div>

      {/* checkout */}
      
    </div>
  );
};

export default Payment;
