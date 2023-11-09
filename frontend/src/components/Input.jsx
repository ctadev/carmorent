import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchApi } from "../redux/searchSlice";
import { toast } from "react-hot-toast";

import { magnify } from "../assets";

const Input = ({ placeholder, rounded }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  //   const displayToast = (success, message) => {
  //     if (success) {
  //       toast.success(message);
  //     } else {
  //       toast.error(message);
  //     }
  //   };

  const fetchCars = (e) => {
    e.preventDefault();
    dispatch(setSearchApi(search.toLowerCase()));
  };

  return (
    <div
      className={`border border-[#C3D4E966] flex items-center py-[11px] px-[10px] gap-2 rounded-[10px] w-full flex-1 ${
        rounded ? "rounded-[70px]" : "rounded-full"
      }`}
    >
      <img src={magnify} alt="" className="h-[20px]" />
      <form onSubmit={fetchCars}>
        <input
          type="text"
          placeholder={placeholder}
          className="placeholder:text-[14px] border-transparent focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Input;
