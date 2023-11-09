import { starFull, starOutline } from '../assets'

const StarRating = () => {
    return (
        <div className='flex gap-1 items-center mb-4'>
            <img src={starFull} alt="star" className='w-[10px] h-[10px] md:w-[17px] md:h-4' />
            <img src={starFull} alt="star" className='w-[10px] h-[10px] md:w-[17px] md:h-4' />
            <img src={starFull} alt="star" className='w-[10px] h-[10px] md:w-[17px] md:h-4' />
            <img src={starFull} alt="star" className='w-[10px] h-[10px] md:w-[17px] md:h-4' />
            <img src={starOutline} alt="empty star" className='w-[10px] h-[10px] md:w-[17px] md:h-4' />
            <p className='text-[#3D5278] text-sm md:text-base'>440+ Reviewers</p>
        </div>
    )
}

export default StarRating