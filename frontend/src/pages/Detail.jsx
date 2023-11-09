import { Button, Filters, CardList, StarRating, HeroCard } from "../components";
import { detail1 } from "../assets";
import { popularCars } from "../constants/carLists";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const [detail, getDetail] = useState([]);
  const [cars, setCars] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:5000/api/v1/addCarRoutes/id", {
          params: { id: id },
        })
        .then((response) => {
          getDetail(response.data.data);
        });
    };
    const fetchCars = async () => {
      axios
        .get("http://localhost:5000/api/v1/addCarRoutes")
        .then((response) => setCars(response.data.data));
    };
    fetchData();
    fetchCars();
  }, [id]);

  return (
    <div className="flex bg-background items-center justify-center">
      <section className="flex w-full max-w-[1440px]">
        <div className="flex bg-background h-full w-full">
          <div className="hidden md:flex">
            <Filters />
          </div>
          <div className="flex flex-col items-center px-6 md:px-0 w-full">
            <div className="flex flex-col items-center xl:flex-row justify-start w-full">
              <div className="flex flex-col w-full">
                <div className="pt-8 pb-6 md:px-8 rounded-xl flex justify-center">
                  <HeroCard
                    title="Sports car with the best design and acceleration"
                    description="Safety and comfort while driving a futuristic and elegant sports car"
                    img="bg-herocar3 bg-blue-500"
                    styles="w-full rounded-lg h-[240px] sm:h-[320px] lg:h-[360px] bg-no-repeat bg-contain bg-center"
                    notAllowed={false}
                    photo={detail[0]?.photo}
                  />
                </div>
                <div className="flex gap-5 w-full justify-center md:px-8 pb-8">
                  <img
                    src={detail1}
                    alt="car image"
                    className="w-24 h-16 rounded-xl"
                  />
                  <img
                    src={detail1}
                    alt="car image"
                    className="w-24 h-16 rounded-xl"
                  />
                  <img
                    src={detail1}
                    alt="car image"
                    className="w-24 h-16 rounded-xl"
                  />
                </div>
              </div>
              <div className="bg-white p-4 md:p-6 rounded-xl md:mt-8 max-w-[492px]">
                <h3 className="font-semibold text-[#1A202C] text-xl md:text-3xl pb-2 md:pb-3 capitalize">
                  {detail[0]?.title}
                </h3>
                <StarRating />
                <p className="text-sm md:text-xl text-[#3D5278] leading-[200%] md:leading-10 mb-4">
                  NISMO has become the embodiment of Nissan's outstanding
                  performance, inspired by the most unforgiving proving ground,
                  the "race track".
                </p>
                <div className="flex justify-between mb-4">
                  <div className="flex gap-6 w-[50%]">
                    <h4 className="text-[#90A3BF] text-sm md:text-lg font-light">
                      Type Car
                    </h4>
                    <p className="text-sm md:text-lg font-medium capitalize">
                      {detail[0]?.type}
                    </p>
                  </div>
                  <div className="flex gap-6 w-[50%]">
                    <h4 className="text-[#90A3BF] text-sm md:text-lg font-light">
                      Capacity
                    </h4>
                    <p className="text-sm md:text-lg font-medium">
                      {detail[0]?.capacity} Person
                    </p>
                  </div>
                </div>
                <div className="flex pb-8">
                  <div className="flex gap-6 w-[50%]">
                    <h4 className="text-[#90A3BF] text-sm md:text-lg font-light">
                      Steering
                    </h4>
                    <p className="text-sm md:text-lg font-medium">Manual</p>
                  </div>
                  <div className="flex gap-6 w-[50%]">
                    <h4 className="text-[#90A3BF] text-sm md:text-lg font-light">
                      Gasoline
                    </h4>
                    <p className="text-sm md:text-lg font-medium">70L</p>
                  </div>
                </div>
                <div className="flex justify-between md:mt-12">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1">
                      <p className="text-2xl md:text-3xl font-bold">
                        ${detail[0]?.price}/
                      </p>
                      <span className="text-[#90A3BF] text-sm md:text-base">
                        days
                      </span>
                    </div>
                    <span className="text-[#90A3BF] text-sm md:text-base line-through">
                      $100.00
                    </span>
                  </div>
                  {detail[0]?.userOwner !== user?._id && (
                    <Link to={`/rent/${detail[0]?._id}`}>
                      <Button text="Rent Now" size="large" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <CardList
              cards={cars}
              page="home"
              title="Recent Cars"
              subText="View All"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Detail;
