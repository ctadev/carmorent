import { useState, useEffect } from "react";
import { RiGasStationFill } from "react-icons/ri";
import { GiSteeringWheel } from "react-icons/gi";
import { MdPeopleAlt } from "react-icons/md";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setApi } from "../redux/apiSlice";
import { toast } from "react-hot-toast";

import { favorite, heart, heartOutline } from "../assets";
import Button from "./Button";

const IconText = ({ icon, text }) => {
  return (
    <>
      {icon}
      <p className="text-sm text-secondary-400">{text}</p>
    </>
  );
};

const CarCard = ({
  _id,
  title,
  brand,
  type,
  photo,
  price,
  capacity,
  notAllowed,
  userOwner,
}) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [hold, setHold] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const currentUrl = location.pathname;
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("currentUser"));

  const deleteDocumentById = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/addCarRoutes`, {
        params: { _id: _id },
      });
      dispatch(setApi());
      toast.success("You have deleted a car you posted for rent.");
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  useEffect(() => {
    const favoritedCars = JSON.parse(
      localStorage.getItem("favoritedCars") || "[]"
    );
    setIsFavorited(favoritedCars.includes(_id));
  }, [_id]);

  const toggleFavorite = () => {
    let favoritedCars = JSON.parse(
      localStorage.getItem("favoritedCars") || "[]"
    );
    if (isFavorited) {
      favoritedCars = favoritedCars.filter((carId) => carId !== _id);
    } else {
      favoritedCars.push(_id);
    }

    localStorage.setItem("favoritedCars", JSON.stringify(favoritedCars));
    setIsFavorited(!isFavorited);
  };

  return (
    <>
      <main className={`w-full bg-white py-3 px-5 rounded-lg`}>
        <header className="flex items-start justify-between mb-8">
          <div>
            <h2
              className="text-[20px] font-bold capitalize cursor-pointer"
              onClick={() => navigate(`/detail/${_id}`)}
            >
              {title}
            </h2>
            <p className="text-[14px] text-gray-400 font-bold">{type}</p>
          </div>
          <img
            src={isFavorited ? heart : heartOutline}
            width={20}
            height={20}
            alt="icon"
            className="object-contain mt-2 cursor-pointer"
            onClick={toggleFavorite}
          />
        </header>
        <article className="flex justify-between gap-2 lg:flex-col mb-8">
          <div className="h-[200px] w-full">
            <img
              src={photo}
              alt="card"
              className="object-contain lg:place-self-center lg:mb-8 cursor-pointer w-full h-full"
              onClick={() => navigate(`/detail/${_id}`)}
            />
          </div>
          <ul className="flex flex-col flex-wrap items-start sm:flex-row sm:items-center sm:justify-center sm:gap-4 text-gray-400">
            <li className="flex items-center justify-center space-x-1 mb-2">
              <IconText icon={<RiGasStationFill />} text="80L" />
            </li>
            <li className="flex items-center justify-center space-x-1 mb-2">
              <IconText icon={<GiSteeringWheel />} text="Automatic" />
            </li>
            <li className="flex items-center justify-center space-x-1 mb-2">
              <IconText
                icon={<MdPeopleAlt />}
                text={capacity ? capacity : `2 People`}
              />
            </li>
          </ul>
        </article>
        <footer className="flex justify-between">
          <h2 className="text-lg font-bold">
            {`$${price} / `}
            <span className="text-gray-400">day</span>
          </h2>
          {currentUrl == "/profile" ? (
            <div className="flex gap-2">
              <button
                className="bg-[#3563E9] text-white py-2 px-4 rounded-lg capitalize disabled:hidden"
                disabled={notAllowed}
                onClick={() => navigate(`/edit/${_id}`)}
              >
                Edit
              </button>
              <button
                className="bg-[#3563E9] text-white py-2 px-4 rounded-lg capitalize disabled:hidden"
                onClick={() => deleteDocumentById(_id)}
                disabled={notAllowed}
              >
                Delete
              </button>
            </div>
          ) : (
            <>
              {userOwner !== user?._id && (
                <button
                  className="bg-[#3563E9] text-white py-2 px-4 rounded-lg capitalize"
                  onClick={() => navigate(`/rent/${_id}`)}
                >
                  rent now
                </button>
              )}
            </>
          )}
        </footer>
      </main>
    </>
  );
};

export default CarCard;
