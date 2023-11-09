import { useEffect } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import getStripe from "../utils/getStripe";

import { Button, InputWithLabel } from "../components";
import useScrollToTop from "../utils/scrollToTop.js";
import { updateField } from "../redux/timeInputSlice";

const Rent = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const dispatch = useDispatch();
  const { timeInputs } = useSelector((state) => state.timeInputs);
  const {
    pickupLocation,
    dropOffLocation,
    pickupDate,
    dropOffDate,
    pickupTime,
    dropOffTime,
  } = timeInputs;
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");

  useScrollToTop();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const rentData = {
    //   carId: id,
    //   pickupLocation: timeInputs.pickupLocation,
    //   dropOffLocation: timeInputs.dropOffLocation,
    //   pickupDate: timeInputs.pickupDate,
    //   dropOffDate: timeInputs.dropOffDate,
    //   pickupTime: timeInputs.pickupTime,
    //   dropOffTime: timeInputs.dropOffTime,
    // };
    const myParams = { ids: id, users: user._id };

    await axios.put("http://localhost:5000/api/v1/addCarRoutes/rented", {
      ids: id,
      users: user._id,
    });
    toast.success("You have successfully rented this car!");
    navigate("/profile");
  };

  const handleInputChange = (e, fieldName) => {
    dispatch(updateField({ key: fieldName, value: e.target.value }));
  };

  return (
    <div className="bg-[#F6F7F9] pt-8 md:px-72 md:py-10 h-full">
      <div className="bg-white rounded-xl px-6 pt-10 md:p-6">
        <h3 className="font-bold text-2xl mb-1">Rent Car</h3>
        <p className="text-[#90A3BF]">Please enter your info</p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-8 mt-6">
            <InputWithLabel
              label="Pickup Location"
              required={true}
              placeholder="Your location"
              value={pickupLocation}
              onChange={(e) => handleInputChange(e, "pickupLocation")}
            />
            <InputWithLabel
              label="Drop Off Location"
              required={true}
              placeholder="Drop off location"
              value={dropOffLocation}
              onChange={(e) => handleInputChange(e, "dropOffLocation")}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-8 mt-6">
            <InputWithLabel
              label="Pickup Date"
              required={true}
              type="date"
              placeholder="MM/YY/DD"
              icon={<AiOutlineCalendar />}
              value={pickupDate}
              onChange={(e) => handleInputChange(e, "pickupDate")}
            />
            <InputWithLabel
              label="Drop Off Date"
              required={true}
              type="date"
              placeholder="MM/YY/DD"
              icon={<AiOutlineCalendar />}
              value={dropOffDate}
              onChange={(e) => handleInputChange(e, "dropOffDate")}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-8 mt-6">
            <InputWithLabel
              label="Pickup Time"
              required={true}
              type="time"
              placeholder="HH:MM"
              value={pickupTime}
              onChange={(e) => handleInputChange(e, "pickupTime")}
            />
            <InputWithLabel
              label="Drop Off Time"
              required={true}
              type="time"
              placeholder="HH:MM"
              value={dropOffTime}
              onChange={(e) => handleInputChange(e, "dropOffTime")}
            />
          </div>
          <div className="mt-8 mb-10 md:mb-0">
            <Button text="Rent Car" full rounded size="large" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Rent;
