import { MdKeyboardArrowDown } from 'react-icons/md'

const TimeCard = ({ text, date, time }) => {
    return (
        <div className='bg-white w-full rounded-[10px] p-4 max-w-md md:max-w-2xl'>
            <div className='flex items-center gap-2 mb-6'>
                {text === 'Pick-Up' ? (
                    <div className='w-4 h-4 rounded-full flex items-center justify-center bg-[#3563E94D]'>
                        <div className='w-2 h-2 rounded-full bg-[#3563E9]' />
                    </div>
                ) : (
                    <div className='w-4 h-4 rounded-full flex items-center justify-center bg-[#5CAFFC4D]'>
                        <div className='w-2 h-2 rounded-full bg-[#5CAFFC]' />
                    </div>
                )}
                <h2 className='font-medium text-[#1A202C] text-xl'>{text}</h2>
            </div>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-[#1A202C] font-bold text-xl'>Locations</h3>
                    <div className='flex items-center gap-1'>
                        <p className='text-[#90A3BF] font-light text-sm flex md:hidden'>Semarang</p>
                        <p className='text-[#90A3BF] font-light text-sm hidden md:flex'>Select your city</p>
                        <MdKeyboardArrowDown className='text-xl' />
                    </div>
                </div>
                <div className='border-r' />
                <div className='flex flex-col gap-2'>
                    <h3 className='text-[#1A202C] font-bold text-xl'>Date</h3>
                    <div className='flex items-center gap-1'>
                        <p className='text-[#90A3BF] font-light text-sm flex md:hidden'>{date}</p>
                        <p className='text-[#90A3BF] font-light text-sm hidden md:flex'>Select your date</p>
                        <MdKeyboardArrowDown className='text-xl' />
                    </div>
                </div>
                <div className='border-r' />
                <div className='flex flex-col gap-2'>
                    <h3 className='text-[#1A202C] font-bold text-xl'>Time</h3>
                    <div className='flex items-center gap-1'>
                        <p className='text-[#90A3BF] font-light text-sm flex md:hidden'>{time}</p>
                        <p className='text-[#90A3BF] font-light text-sm hidden md:flex'>Select your time</p>
                        <MdKeyboardArrowDown className='text-xl' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimeCard