import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

import { heroCover, agentProfile } from "../assets";
import Button from "../components/Button";
import CarCard from "../components/CarCard";
import { Loader } from "../components";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const toggle = useSelector((state) => state.apiSlice);

  const [data, setData] = useState(null);

  const [myrentals, setMyRentals] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:5000/api/v1/addCarRoutes/user-cars", {
          params: { _id: user._id },
        })
        .then((response) => {
          setData(response.data.data);
        });
    };
    fetchData();

    const fetchMyRentals = async () => {
      await axios
        .get(`http://localhost:5000/api/v1/addCarRoutes/myrentals/${user._id}`)
        .then((response) => {
          setMyRentals(response.data.data);
        });
    };
    fetchMyRentals();
  }, [toggle]);

  return (
    <main className="bg-[#F6F7F9]">
      <div className="container mx-auto lg:grid w-full max-w-[1400px] px-4 mt-8">
        <h1 className="sm:max-w-xl mx-auto mb-6 text-xl font-bold capitalize lg:max-w-none sm:w-10/12 lg:w-full">
          my profile
        </h1>
        <header className="bg-white sm:w-10/12 sm:max-w-xl relative mx-auto rounded-lg mb-8 lg:max-w-none lg:w-full">
          <div className=" rounded-lg">
            <div className="h-full">
              <img
                src={heroCover}
                alt="hero-img"
                width={100}
                height={100}
                className="object-cover w-full lg:h-52 rounded-r-lg rounded-l-lg"
              />
            </div>

            <div className="flex justify-between py-0 px-6 -mt-14">
              <div className="mb-4">
                <div className="h-[100px] w-[100px]">
                  <img
                    src={user.avatar}
                    alt="agent-profile"
                    className="h-full w-full rounded-full"
                  />
                </div>
                <h2 className="text-lg font-bold capitalize">agent name</h2>
                <p className="text-secondary-300 capitalize">
                  {user.firstName} {user.lastName}
                </p>
              </div>
              <button className="self-start py-2 px-4 rounded-lg capitalize bg-white opacity-50 ease-in-out hover:opacity-100 duration-200">
                edit cover
              </button>
            </div>
            <div className="absolute bottom-4 right-2">
              <Button text={"edit profile"} />
            </div>
          </div>
        </header>
        <h1 className="sm:max-w-xl mx-auto mb-6 text-xl font-bold capitalize lg:max-w-none sm:w-10/12 lg:w-full text-secondary-300">
          Cars you rented:
        </h1>
        {myrentals ? (
          <section className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {myrentals?.map((car, i) => (
              <CarCard key={i} {...car} notAllowed={true} />
            ))}
          </section>
        ) : (
          <Loader />
        )}
        <div className="w-full bg-black h-[5px] mt-6" />
        <h1 className="sm:max-w-xl mx-auto mb-6 text-xl font-bold capitalize lg:max-w-none sm:w-10/12 lg:w-full text-secondary-300 mt-4">
          Cars You Posted for Rent:
        </h1>
        {data ? (
          <section className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data?.map((car, i) => (
              <CarCard key={i} {...car} />
            ))}
          </section>
        ) : (
          <Loader />
        )}
        <Link
          className="bg-[#3563E9] text-white py-2 px-4 rounded-lg ease-in-out hover:bg-white hover:text-[#3563E9] hover:outline duration-200 sm:block lg:inline text-center capitalize  text-lg sm:w-10/12 sm:max-w-xl sm:mx-auto lg:max-w-none lg:w-auto place-self-center mb-4 mt-16"
          to="/add-car"
        >
          add more cards to rent
        </Link>
      </div>
    </main>
  );
};

export default Profile;
