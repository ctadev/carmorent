import { CarCard } from '../components'

const CardList = ({ title, cards, subText, page }) => {
    return (
        <>
            <div className="flex justify-between mt-8 md:mt-11 mb-5 w-full">
                <p className="text-[#90A3BF] font-normal md:text-lg md:ml-14">{title}</p>
                <button className="text-[#3563E9] font-medium text-sm md:text-lg md:mr-14">
                    {subText}
                </button>
            </div>
            <div className="w-full px-0 md:px-8">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
                    {cards.slice(0, 3).map((card, index) => (
                        <CarCard key={index} {...card} page={page} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default CardList