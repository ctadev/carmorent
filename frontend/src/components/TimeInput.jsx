import {
  HiOutlineArrowNarrowUp,
  HiOutlineArrowNarrowDown,
} from "react-icons/hi";

import { DateInputs } from "./";

const TimeInput = ({styles}) => {
  return (
    <main className={`flex flex-col items-center justify-center relative ${styles}`}>
      <DateInputs title="Pick-Up" />
      <DateInputs title="Drop-Off" />
      <button className="flex items-center justify-center text-white bg-blue-500 absolute m-auto inset-0 w-[60px] h-[60px] rounded-lg md:rotate-90">
        <HiOutlineArrowNarrowUp />
        <HiOutlineArrowNarrowDown />
      </button>
    </main>
  );
};

export default TimeInput;
