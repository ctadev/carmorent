import { useState, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useDispatch } from "react-redux";
import { setHomeApi } from "../redux/homeSlice";

const Dropdown = ({ title, data, type }) => {
  const [dropdown, setDropdown] = useState(false);
  const [value, onChange] = useState(null);
  const [txtValue, setTxtValue] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHomeApi(txtValue))
  }, [txtValue]);

  return (
    <div className={`${title == "Date" && "border-x px-4"} relative`}>
      <h2 className="text-[16px] font-bold text-gray-900">{title}</h2>
      <div
        className="flex items-center justify-between gap-1 md:gap-3 mt-2 cursor-pointer h-[40px]"
        onClick={() => setDropdown(!dropdown)}
      >
        <p className="text-[12px] text-gray-400">
          {type === "normal"
            ? txtValue || `Select your ${title.toLowerCase()}`
            : value?.toDateString() || `Select your ${title.toLowerCase()}`}
        </p>
        <MdKeyboardArrowDown />
      </div>
      {type === "normal" ? (
        <div>
          {dropdown && (
            <div className="absolute bg-white top-20 left-0 w-full rounded-b-md flex flex-col items-center gap-2 z-40 border-blue-400 border border-t-0">
              {data?.map((item, i) => (
                <p
                  key={i}
                  className="hover:bg-blue-500 w-full text-center cursor-pointer py-2 px-2 hover:text-white"
                  onClick={() => {
                    setDropdown(!dropdown);
                    setTxtValue(item.location);
                  }}
                >
                  {item.location}
                </p>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="absolute z-40 w-fit h-full top-[90px] left-[-110%] lg:left-[-70%]">
          {dropdown && <Calendar onChange={onChange} value={value} />}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
