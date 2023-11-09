import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiFillHome, AiFillPlusSquare } from "react-icons/ai";
import { SlMagnifier } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { morent, menu, filters } from "../assets";
import { Input, Button, LogoutButton } from "../components";
import { setCurrentPage } from "../redux/currentPageSlice";
import { setUser } from "../redux/authSlice";

const Navbar = () => {
  const currentPage = useSelector(
    (state) => state.currentPageSlice.currentPage
  );
  const [isOpen, setIsOpen] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("currentUser"));

  const mobileMenuClasses = mobileMenuVisible
    ? "transform translate-x-0 transition duration-300 ease-in-out"
    : "transform -translate-x-full transition duration-300 ease-in-out";

  useEffect(() => {
    if (user) {
      setUserLoggedIn(true);
    }
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserLoggedIn(false);
    dispatch(setCurrentPage("home"));
    localStorage.removeItem("currentUser");
  };

  const handleLogoutMobile = () => {
    localStorage.removeItem("token");
    dispatch(setCurrentPage("home"));
    setUserLoggedIn(false);
    navigate("/");
    dispatch(setUser(null));
    setMobileMenuVisible(false);
    localStorage.removeItem("currentUser");
  };

  return (
    <main className="flex items-center justify-center bg-white-0 relative">
      <section className="w-full max-w-[1400px] p-4">
        <nav className="flex justify-between items-center">
          <div className="flex flex-row items-center justify-between">
            <Link to="/">
              <div className="flex items-center justify-center">
                <img src={morent} width={148} height={44} alt="logo" />
              </div>
            </Link>
          </div>
          <div className="items-center gap-6 hidden sm:flex">
            <Link to="/">
              <span className="text-[16px] font-medium cursor-pointer hover:text-blue-700">
                Home
              </span>
            </Link>
            <Link to="/search">
              <span className="text-[16px] font-medium cursor-pointer hover:text-blue-700">
                Search Cars
              </span>
            </Link>
            <Link to="/add-car">
              <span className="text-[16px] font-medium cursor-pointer hover:text-blue-700">
                Add Car
              </span>
            </Link>
            {userLoggedIn ? (
              <>
                <Link to={`/profile`} className="h-[45px] w-[45px]">
                  {user && (
                    <img
                      src={user.avatar}
                      alt="logo"
                      className="rounded-full h-full w-full"
                    />
                  )}
                </Link>
                <Link to="/">
                  <div className="hidden md:flex" onClick={handleLogout}>
                    <LogoutButton />
                  </div>
                </Link>
              </>
            ) : (
              <Link to="/login">
                <button className="bg-blue-500 w-[110px] text-white-0 h-[44px] rounded-md">
                  Login
                </button>
              </Link>
            )}
          </div>

          {/* Hidden Menu */}
          <div className="flex gap-2 sm:hidden">
            {userLoggedIn ? (
              <Link to={`/profile`} className="h-[45px] w-[45px]">
                {user && (
                  <img
                    src={user.avatar}
                    width={35}
                    height={35}
                    alt="logo"
                    className="rounded-full w-full h-full"
                  />
                )}
              </Link>
            ) : (
              <Link to="/login">
                <button className="bg-blue-500 w-[110px] text-white-0 h-[44px] rounded-md">
                  Login
                </button>
              </Link>
            )}
            <img
              src={menu}
              width={30}
              height={30}
              alt="menu"
              onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
              className="cursor-pointer"
            />
          </div>
        </nav>

        {/* Mobile view bottom search section */}
        <nav className="sm:hidden w-full z-10 p-4 border-b justify-between bg-neutral-0">
          <div
            className={`pt-4 p-2 gap-6 ${
              location.pathname.includes("search") ? "flex" : "hidden"
            }`}
          >
            <Input placeholder="Search for something here" />
            <div className="">
              <img src={filters} width={48} height={48} alt="logo" />
            </div>
          </div>
        </nav>
      </section>

      {/* Mobile Menu */}
      <div
        className={` pt-6 pb-12 px-5 fixed top-0 w-full bg-[#F7F9FC] rounded-xl z-10 inset-x-1/2 ease-in-out duration-500 transition-all ${mobileMenuClasses} ${
          mobileMenuVisible ? "translate-y-0" : "translate-y-110"
        }`}
        style={{
          transform: `translateX(-50%) ${
            mobileMenuVisible ? "translateY(0)" : "translateY(-140%)"
          }`,
        }}
      >
        <div className="flex items-center justify-between">
          <img src={morent} alt="logo" className="w-[104px] h-5" />
          <AiOutlineClose
            className="text-2xl text-[#3D5278] cursor-pointer"
            onClick={() => setMobileMenuVisible(false)}
          />
        </div>
        <ul className="flex flex-col gap-4 mt-12">
          <Link
            to="/"
            onClick={() => {
              dispatch(setCurrentPage("home"));
              setMobileMenuVisible(false);
            }}
          >
            <li
              className={` rounded flex items-center w-full p-3 font-normal text-lg ${
                currentPage === "home"
                  ? "text-[white] bg-[#3563E9]"
                  : "text-[#3D5278] bg-[#f7f9fc]"
              }`}
            >
              <AiFillHome className="text-lg mr-2" />
              Home
            </li>
          </Link>
          <Link
            to="/search"
            onClick={() => {
              dispatch(setCurrentPage("search cars"));
              setMobileMenuVisible(false);
            }}
          >
            <li
              className={`rounded flex items-center w-full p-3 font-normal text-lg bg-[#3563E9] ${
                currentPage === "search cars"
                  ? "text-[white] bg-[#3563E9]"
                  : "text-[#3D5278] bg-[#f7f9fc]"
              }`}
            >
              <SlMagnifier className="text-lg mr-2" />
              Search Cars
            </li>
          </Link>
          <Link
            to="/add-car"
            onClick={() => {
              dispatch(setCurrentPage("add car"));
              setMobileMenuVisible(false);
            }}
          >
            <li
              className={`rounded flex items-center w-full p-3 font-normal text-lg bg-[#3563E9] ${
                currentPage === "add car"
                  ? "text-[white] bg-[#3563E9]"
                  : "text-[#3D5278] bg-[#f7f9fc]"
              }`}
            >
              <AiFillPlusSquare className="text-lg mr-2" />
              Add Car
            </li>
          </Link>
        </ul>
        {user === null && (
          <Link
            to="/login"
            onClick={() => {
              dispatch(setLoginPageOpen(true));
              setMobileMenuVisible(false);
            }}
          >
            <Button text="Login" />
          </Link>
        )}
        {user != null && (
          <div className="flex flex-col gap-4 mt-8">
            <Link
              to={`/profile`}
              onClick={() => {
                setMobileMenuVisible(false);
                dispatch(setCurrentPage("profile"));
              }}
            >
              <Button text="My Profile" profileImage={user.avatar} />
            </Link>
            <button
              className="bg-red-500 py-4 text-white cursor-pointer text-bold"
              onClick={handleLogoutMobile}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </main>
  );
};
export default Navbar;
