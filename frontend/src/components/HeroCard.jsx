import Button from "./Button";
import { useLocation } from "react-router-dom";

const HeroCard = ({
  title,
  description,
  img,
  styles,
  btnBG,
  notAllowed,
  photo,
}) => {
  const location = useLocation();
  const currentUrl = location.pathname;

  return (
    <main className={`${styles} ${img} relative`}>
      <section className="flex flex-col w-[60%] sm:w-[50%] gap-2 md:gap-4 p-6">
        <h1 className="font-semibold text-white-0 text-base lg:text-3xl leading-4 sm:leading-7 lg:leading-9">
          {title}
        </h1>
        <p className="font-medium text-xs sm:text-sm lg:text-base text-white-0 leading-4">
          {description}
        </p>
        {notAllowed && <Button text="Rental Car" btnBG={btnBG} />}
      </section>
      <img
          src={photo}
          className="absolute bottom-[10%] w-[50%] left-0 right-0 mx-auto"
        />
    </main>
  );
};

export default HeroCard;
