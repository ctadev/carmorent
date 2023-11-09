import React from "react";
import { Link } from "react-router-dom";

const LinkText = ({ heading }) => {
  return (
    <>
      <Link
        to={"#"}
        className="block mb-2 capitalize text-gray-400 ease-in-out duration-200 hover:text-[#3563E9] "
      >
        {heading}
      </Link>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center bg-white mt-12">
        <section className="px-4 lg:flex lg:justify-between mt-14 lg:mb-8 w-full max-w-[1400px]">
          <div className="sm:mb-8">
            <h2 className="text-blue-500 text-2xl uppercase font-bold mb-2">
              morent
            </h2>
            <p className="text-gray-400 sm:max-w-[300px] text-base">
              our vision is to provide confidence and help increase your sales
              business
            </p>
          </div>

          <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-4">
            <div>
              <h3 className="font-bold text-xl capitalize mb-4">about</h3>
              <LinkText heading={"how it works"} />
              <LinkText heading={"featured"} />
              <LinkText heading={"partnership"} />
              <LinkText heading={"business relation"} />
            </div>

            <div className=" sm:mb-8">
              <h3 className="font-bold text-xl capitalize mb-4">socials</h3>
              <LinkText heading={"discord"} />
              <LinkText heading={"instagram"} />
              <LinkText heading={"twitter"} />
              <LinkText heading={"facebook"} />
            </div>
            <div className=" sm:mb-8">
              <h3 className="font-bold text-xl capitalize mb-4">community</h3>
              <LinkText heading={"events"} />
              <LinkText heading={"blog"} />
              <LinkText heading={"twitter"} />
              <LinkText heading={"facebook"} />
            </div>
          </div>
        </section>
        <hr className="border border-slate-300 w-full max-w-[1400px]"/>
        <article className="px-4 sm:text-center lg:flex lg:justify-between mt-8 lg:mb-8 w-full max-w-[1400px]">
          <h3 className="sm:mb-2 text-blue-500">
            {new Date().getFullYear()} MORENT.{" "}
            <span className="text-black"> All rights reserved</span>
          </h3>
          <ul className="lg:grid lg:grid-cols-2 lg:gap-x-4">
            <li className="sm:mb-2 ease-in-out duration-200 hover:text-[#3563E9] ">
              <Link to={"#"}>Privacy & Policy</Link>
            </li>
            <li className="sm:mb-2 ease-in-out duration-200 hover:text-[#3563E9] ">
              <Link to={"#"}>Terms & Conditions</Link>
            </li>
          </ul>
        </article>
      </main>
    </>
  );
};

export default Footer;
