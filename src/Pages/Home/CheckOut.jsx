/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import useAxiosSecure from "../../Auth/Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Auth/Hook/useAuth";

const CheckOut = ({ fee, setPayment }) => {
  // useHooks
  const { users } = useAuth();
  const axioaSecure = useAxiosSecure();

  const stripe = useStripe();
  const elements = useElements();

  //useEffect
  const { data: clientSecret = {} } = useQuery({
    queryKey: ["clientASecret"],
    queryFn: async () => {
      const res = await axioaSecure.post("/stripe", { fee });
      return res.data;
    },
  });

  const { clientSecret: secretClient } = clientSecret;

  // handleSubmit
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      return toast.error(error.message);
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(secretClient, {
        payment_method: {
          card: card,
          billing_details: {
            email: users?.email || "anonymous",
            name: users?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      return toast.error(confirmError.message);
    }
    if (paymentIntent.status === "succeeded") {
      toast.success("Payment Successful");
      setPayment(true);
    }
};
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "18px",
                border: "1px solid red",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-neutral px-8 text-lg mt-9"
          type="submit"
          disabled={!stripe || !secretClient}
        >
          Pay ${fee}
        </button>
      </form>
    </>
  );
};

export default CheckOut;
