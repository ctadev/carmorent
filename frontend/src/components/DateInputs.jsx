import { Dropdown } from "./";
import data from "../constants/data";
import timeData from "../constants/time";
import axios from "axios";
import { useEffect, useState } from "react";

const DateInputs = ({ title }) => {
  const [locData, setLocData] = useState(null);

  useEffect(() => {
    const location = async () => {
      await axios
        .get("http://localhost:5000/api/v1/addCarRoutes")
        .then((response) => {
          setLocData(response.data.data);
        });
    };
    location();
  },[]);

  return (
    <main className="bg-white-0 rounded-lg py-4 px-8 md:px-6 xl:px-4 w-full flex items-center justify-center">
      <div className="">
        <section className="flex gap-2">
          <input type="radio" />
          <h1 className="text-[16px] font-semibold text-gray-900">{title}</h1>
        </section>
        <section className="grid grid-cols-3 gap-4 mt-2">
          <Dropdown title="Locations" data={locData} type="normal" />
          <Dropdown title="Date" />
          <Dropdown title="Time" data={timeData} type="normal" />
        </section>
      </div>
    </main>
  );
};

export default DateInputs;
