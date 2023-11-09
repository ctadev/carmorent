import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Button, CarCard, Filters, TimeInput, Loader } from "../components";

const Search = () => {
  const [data, setData] = useState(null);
  const searchApi = useSelector((state) => state.searchSlice);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:5000/api/v1/addCarRoutes/search", {
          params: { search: searchApi },
        })
        .then((response) => {
          setData(response.data.data);
        });
    };
    fetchData();
  }, [searchApi]);

  return (
    <div className="flex bg-background items-center justify-center">
      <section className="flex w-full max-w-[1400px]">
        <div className="hidden md:flex max-w-[360px] min-w-[290px] w-[20%]">
          <Filters />
        </div>
        <div className="py-8 px-6 md:px-8 flex-1 space-y-8 border-t w-[80%]">
          <div>
            <TimeInput styles="xl:flex-row xl:justify-between xl:w-full xl:gap-14 gap-8" />
          </div>
          {data ? (
            <div className="grid grid-flow-dense grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {data?.map((car, i) => (
                <CarCard key={i} {...car} />
              ))}
            </div>
          ) : (
            <Loader />
          )}
          <div className="flex justify-center pt-4 relative">
            <Button text="Show More Cars" />
            <p className="absolute text-[#90A3BF] right-0 top-7 font-medium">
              {data ? data.length : "0"}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Search;
