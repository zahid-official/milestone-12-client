import { useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import PageTitle from "../../Shared/PageTitle";
import { FaLeftLong } from "react-icons/fa6";
import logo from "/assets/logo.png";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";
import { useState } from "react";
import ApplicantDetails from "./ApplicantDetails";

// stripe
const stripePromise = loadStripe(import.meta.env.VITE_Stipe);

const Payment = () => {
  // useLoaderData
  const loadedData = useLoaderData();

  // state for payment
  const [payment, setPayment] = useState(true);
  // change this value into false

  const {
    universityName,
    universityLogo,
    universityCity,
    universityCountry,
    applicationFees,
  } = loadedData;

  // back
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

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
      <section className=" py-36 px-6">
        {payment ? (
          <div>
            <ApplicantDetails scholarshipData={loadedData}></ApplicantDetails>
          </div>
        ) : (
          <div className="shadow  max-w-screen-sm mx-auto  px-12 py-16">
            {/* back */}
            <div className="flex gap-3">
              <button
                onClick={goBack}
                className="btn h-[52px] bg-transparent rounded-full"
              >
                <FaLeftLong size={18}></FaLeftLong>
              </button>
              <p className="text-4xl font-bold flex items-center title-font">
                <img src={logo} className="mr-1.5" alt="" /> Edify
              </p>
            </div>

            {/* Ammount */}
            <div className="pl-5">
              <p className="pt-6 pb-1.5">Payable Ammount</p>
              <h3 className="text-5xl font-semibold title-font">
                ${applicationFees}
              </h3>
            </div>

            {/* table */}
            <div className="overflow-x-auto mt-12">
              <table className="table text-lg border-y">
                <tbody>
                  <tr className=" border-none">
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-20 w-20">
                            <img src={universityLogo} />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{universityName}</div>
                          <div className="text-sm opacity-50">
                            {universityCity}, {universityCountry}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      Fees:{" "}
                      <span className="font-bold title-font text-xl">
                        ${applicationFees}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* stripe */}
            <div className="mt-14">
              <Elements stripe={stripePromise}>
                <CheckOut
                  fee={applicationFees}
                  setPayment={setPayment}
                ></CheckOut>
              </Elements>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Payment;
