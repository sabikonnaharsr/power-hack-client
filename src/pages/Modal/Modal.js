import toast from "react-hot-toast";

const Modal = ({ booking }) => {
  // const { user } = useContext();
  const user = {};
  const { name } = booking;

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const phone = form.phoneNumber.value;
    const name = form.fullName.value;
    const email = form.email.value;
    const amount = form.payableAmount.value;
    console.log(name, email, phone, amount);
    let bilId = Math.floor(Math.random() * 1000000 + 1);
    const billingData = { name, email, phone, amount, bilId };

    fetch("http://localhost:5000/add-billing", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(billingData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Booking Confirmed");
          // refetch()
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative text-primary">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg text-primary font-bold">{name}</h3>

          <form
            onSubmit={handleBooking}
            className="grid gird-cols-1 gap-3 mt-5"
          >
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              defaultValue={user?.displayName}
              className="input w-full input-bordered input-secondary "
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              className="input w-full input-bordered input-secondary"
              required
            />
            <input
              type="text"
              placeholder="Phone Number"
              name="phoneNumber"
              className="input w-full input-bordered input-secondary"
              required
            />

            <input
              type="text"
              placeholder="payableAmount"
              name="payableAmount"
              className="input w-full input-bordered input-secondary"
              required
            />

            <input
              className="btn w-full max-w-xm"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
