import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { HeroCard, Button, CarCard, TimeInput, Loader } from "../../components";

const Home = () => {
  const [data, setData] = useState([]);
  const toggle = useSelector((state) => state.apiSlice);
  const homeApi = useSelector((state) => state.homeSlice);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:5000/api/v1/addCarRoutes", {
          params: { location: homeApi },
        })
        .then((response) => {
          setData(response.data.data);
        });
    };
    fetchData();
  }, [homeApi]);

  return (
    <main className="flex items-center justify-center">
      <section className="max-w-[1400px] w-full px-4">
        {/* Hero Cards */}
        <div className="flex gap-6 pt-6">
          <HeroCard
            title="The Best Platform for Car Rental"
            description="Ease of doing a car rental safely and reliably. Of course at a low price."
            img="bg-herocar1 bg-blue-300"
            styles="w-full rounded-lg h-[240px] sm:h-[320px] lg:h-[360px] bg-no-repeat bg-contain bg-center"
            notAllowed={true}
          />
          <HeroCard
            title="Easy way to rent a car at a low price"
            description="Providing cheap car rental services and safe and comfortable facilities."
            img="bg-herocar2 bg-blue-500"
            styles="w-full rounded-lg h-[240px] sm:h-[320px] lg:h-[360px] bg-no-repeat bg-contain bg-center hidden md:inline"
            btnBG={true}
            notAllowed={true}
          />
        </div>

        {/* Home Inputs Section */}
        <div className="mt-6">
          <TimeInput styles="lg:flex-row lg:justify-between lg:w-full gap-8" />
        </div>

        {/* Home Car Cards */}
        <div className="flex items-center justify-between px-4 pt-10">
          <h1 className="text-gray-400 font-semibold text-[16px]">
            Popular Car
          </h1>
          <h2 className="text-blue-500 text-[16px] font-semibold cursor-pointer">
            View All
          </h2>
        </div>
        {data ? (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data?.map((car, i) => (
              <CarCard key={i} {...car} />
            ))}
          </div>
        ) : (
          <Loader />
        )}
        <div className="flex items-center justify-center pt-4 relative mt-8">
          <Button text="Show More Cars" />
          <p className="absolute text-[#90A3BF] right-0 top-7 font-medium">
            {data ? data.length : "0"}
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
