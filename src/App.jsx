import React, { useState } from "react";
import Forms from "./Components/Forms";
import Expencetable from "./Components/Expencetable";
import ExpenceData from "./ExpenceData";
import PesonalForm from "./Components/PesonalForm";

function App() {
  const [expences, setexpence] = useState(ExpenceData);

  return (
    <>
      <h1 className="py-5 text-center lg:text-6xl text-4xl font-bold text-red-600">
        Track your Expense
      </h1>
      <div className="w-[90%] mx-auto justify-between flex flex-wrap gap-2 p-1">
        <Forms setexpence={setexpence} />
        <Expencetable expences={expences} />
      </div>
    </>
  );
}

export default App;
