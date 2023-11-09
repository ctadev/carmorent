import Image from 'next/image';
import { useState } from 'react';

const IconText = ({ icon, text }) => {
    return (
        <>
            <Image
                src={icon}
                width={20}
                height={20}
                className='object-contain'
                alt='icon'
            />
            <p className='text-sm text-secondary-400'>{text}</p>
        </>
    );
};

const Carcard = ({ model, type, image, price, passengers }) => {
    const [hold, setHold] = useState('');

    return (
        <>
            <main className='sm:w-3/4 lg:max-w-lg bg-white py-3 px-5 rounded-lg'>
                <header className='flex justify-between mb-8'>
                    <div>
                        <h2 className='text-xl uppercase font-bold'>{model}</h2>
                        <p className='uppercase text-secondary-400'>{type}</p>
                    </div>
                    <Image
                        src='/heart.png'
                        width={20}
                        height={20}
                        alt='icon'
                        className='object-contain'
                    />
                </header>
                <article className='flex sm:justify-between lg:flex-col mb-8'>
                    <Image
                        src={image}
                        width={300}
                        height={300}
                        alt='card'
                        className='object-contain lg:place-self-center lg:mb-8'
                    />
                    <ul className='sm:self-center lg:flex lg:justify-between lg:w-3/5 mb-8'>
                        <li className='flex space-x-2 mb-2'>
                            <IconText icon='/gas-station.png' text='80L' />
                        </li>
                        <li className='flex space-x-2 mb-2'>
                            <IconText icon='/car-wheel.png' text='automatic' />
                        </li>
                        <li className='flex space-x-2'>
                            <IconText
                                icon='/user-profile.png'
                                text={passengers}
                            />
                        </li>
                    </ul>
                </article>

                <footer className='flex justify-between'>
                    <h2 className='text-lg font-bold'>{`${price} / day`}</h2>
                    <button className='bg-[#3563E9] text-white py-2 px-4 rounded-lg capitalize'>
                        rent now
                    </button>
                </footer>
            </main>
        </>
    );
};

export default Carcard;
