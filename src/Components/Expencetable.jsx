import React, { useRef } from "react";

function Expencetable({ expences }) {

  return (
    <>
      <div className=" mt-14 lg:w-[45%] w-full">
        <table className="w-full border-collapse shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className=" text-black">
              <th className="border p-3 text-center text-lg font-semibold">
                Title
              </th>
              <th className="border p-3 text-center text-lg font-semibold">
                <select
                  id="category"
                  className=" w-[120px] outline-0 rounded-sm"
                >
                  <option value="All">All</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Sadi">Sadi</option>
                  <option value="Corporate">Corporate</option>
                  <option value="Event">Event</option>
                </select>{" "}
              </th>
              <th className="border p-3 text-center text-lg font-semibold">
                Amount
              </th>
            </tr>
          </thead>

          <tbody className="text-black">
            {expences.map(({ id, title, category, amount }) => {
              return (
                <tr
                  key={id}
                  className="hover:bg-gray-100 transition-colors duration-200"
                >
                  <td className="border p-2 text-center text-">{title}</td>
                  <td className="border p-2 text-center">{category}</td>
                  <td className="border p-2 text-center"> ₹{amount}</td>
                </tr>
              );
            })}
            <tr>
              <td className="border p-2 text-center text-">TotalAmount</td>
              <td className="border p-2 text-center"></td>
              <td className="border p-2 text-center"> ₹ </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Expencetable;
