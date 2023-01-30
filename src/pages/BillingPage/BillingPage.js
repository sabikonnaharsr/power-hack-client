import React, { useEffect, useState } from "react";
import EditModal from "../EditModal/EditModal";
import Modal from "../Modal/Modal";

const BillingPage = () => {
  const [data, setData] = useState(null);
  const [billingDatas, setBillingDatas] = useState([]);
  const booking = {};
  useEffect(() => {
    fetch("http://localhost:5000/billing-list")
      .then((res) => res.json())
      .then((data) => setBillingDatas(data));
  }, [billingDatas]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/delete-billing/${id}`,
    {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }


  return (
    <div>
      <div className="navbar bg-base-100 my-10">
        <div className="flex-1 gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
          <div className="dropdown dropdown-end">
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-none">
          <label htmlFor="booking-modal" className="btn">
            <a className="btn btn-ghost normal-case text-xl">Add New Bill</a>
          </label>
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200 text-sm">
          <thead class="bg-gray-100">
            <tr>
              <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Billing Id
              </th>
              <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Full Name
              </th>
              <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Email
              </th>
              <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Phone
              </th>
              <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Paid Amount
              </th>
              <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Action
              </th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-200">
            {billingDatas.map((billingData) => (
              <tr>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {billingData?.bilId}
                </td>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {billingData?.name}
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  {billingData?.email}
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  {billingData?.phone}
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  {billingData?.amount}
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  <label onClick={() => setData(billingData)} htmlFor="edit-modal" className="btn">
                    <a className="btn btn-ghost normal-case text-xl">Edit</a>
                  </label>
                  <button onClick={() => handleDelete(billingData._id)} className="btn btn-danger">delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Modal booking={booking}></Modal>
      {
         data && <EditModal data = {data} setData = {setData}></EditModal>
      }
      </div>
    </div>
  );
};

export default BillingPage;
