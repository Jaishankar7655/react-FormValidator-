import React, { useRef, useState } from "react";

function Forms({ setexpence }) {

  // const [title, setTitle] = useState("");
  // const [category, setCategory] = useState("");
  // const [amount, setAmount] = useState("");

  const [expence, setExpence] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(expence);

    setexpence((prestate) => [
      ...prestate,
      { ...expence, id: crypto.randomUUID() },
    ]);

    // const expences = { title, category, amount, id: crypto.randomUUID() };
    // setexpence((prestate) =>
    //   [...prestate, expences]
    // );

    // setTitle("");
    // setCategory("");
    // setAmount("");

    // const expence = {
    //   ...getFormdata(e.target),
    //   id: crypto.randomUUID()
    // };
    // setexpence((prevstate) => [...prevstate, expence]);
  };
  // const getFormdata = (form) => {
  //   const formData = new FormData(form);
  //   const data = {};
  //   for (const [key, value] of formData.entries()) {
  //     data[key] = value;
  //   }
  //   return data;
  // };
 
 
 
  const myRef = useRef(10);
  console.log(myRef);
  let mynum = 0;
  console.log(myRef)
  return (
    <>
      <button
        className="p-2 bg-red-600 h-10"
        onClick={() => {
          myRef.current = myRef.current + 1;
          mynum = mynum + 1;
          console.log(myRef.current);
          console.log(mynum);
          ref={myRef}
        }}
      >
        Click me{" "}
      </button>
      
      <form className="lg:w-[45%] w-full" onSubmit={handleSubmit}>
        <div>
          <div className="my-7">
            <label
              htmlFor="Title"
              className="block mb-2 font-semibold text-gray-700"
            >
              Name of Booking
            </label>
            <input
              type="text"
              name="title"
              value={expence.title}
              onChange={(e) => {
                setExpence((preState) => ({
                  ...preState,
                  title: e.target.value,
                }));
              }}
              className="border p-2 w-full focus:ring-2 outline-0 ring-red-500 rounded-md transition-all duration-300 hover:border-red-300"
            />
          </div>

          <div className="my-7">
            <label
              htmlFor="category"
              className="block mb-2 font-semibold text-gray-700"
            >
              Select Category
            </label>
            <select
              value={expence.category}
              onChange={(e) => {
                setExpence((preState) => ({
                  ...preState,
                  category: e.target.value,
                }));
              }}
              id="category"
              name="category"
              className="border p-2 w-full focus:ring-2 outline-0 ring-red-500 rounded-md transition-all duration-300 hover:border-red-300"
            >
              <option value="" hidden>
                Select category
              </option>
              <option value="Birthday">Birthday</option>
              <option value="Sadi">Sadi</option>
              <option value="Corporate">Corporate</option>
              <option value="Event">Event</option>
            </select>
          </div>

          <div className="my-7">
            <label
              htmlFor="Amount"
              className="block mb-2 font-semibold text-gray-700"
            >
              Amount
            </label>
            <input
              value={expence.amount}
              onChange={(e) => {
                setExpence((preState) => ({
                  ...preState,
                  amount: e.target.value,
                }));
              }}
              type="number"
              name="amount"
              className="border p-2 w-full focus:ring-2 outline-0 ring-red-500 rounded-md transition-all duration-300 hover:border-red-300"
            />
          </div>

          <div className="my-7">
            <button
              type="submit"
              className="p-2 w-full text-center bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-300"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Forms;
