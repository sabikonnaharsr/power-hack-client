import toast from "react-hot-toast";

const EditModal = ({ data, setData }) => {
    console.log(data)

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const phone = form.phone.value;
    const name = form.name.value;
    const email = form.email.value;
    const amount = form.amount.value;
 
   const bilId = form.bilId.value;
    const billingData = { name, email, phone, amount, bilId };

    fetch(`https://power-hack-server-psi.vercel.app/update-billing/${data._id}`, {
      method: "PUT",
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
          setData(null)
          form.reset()
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="edit-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative text-primary">
          <label
            htmlFor="edit-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg text-primary font-bold">{data?.name}</h3>

          <form
            onSubmit={handleBooking}
            className="grid gird-cols-1 gap-3 mt-5"
          >
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              defaultValue={data?.name}
              className="input w-full input-bordered input-secondary "
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              defaultValue={data?.email}
              className="input w-full input-bordered input-secondary"
              required
            />
            <input
              type="text"
              placeholder="Phone Number"
              name="phone"
              defaultValue={data?.phone}
              className="input w-full input-bordered input-secondary"
              required
            />

            <input
              type="text"
              placeholder="payableAmount"
              name="amount"
              defaultValue={data?.amount}
              className="input w-full input-bordered input-secondary"
              required
            />
            <input
              type="text"
        
              name="bilId"
              defaultValue={data?.bilId}
              readOnly
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

export default EditModal;
