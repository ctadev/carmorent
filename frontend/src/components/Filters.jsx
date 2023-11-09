import React, { useState } from 'react';
import { BsCheck } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';

import { updateFilter } from '../redux/activeFiltersSlice';
import { cars } from '../constants/carLists';
import { Input } from '.';

const TypeInputs = ({ type, quantity, checked, onClick }) => {
    return (
        <div className='flex items-center gap-2 mb-8'>
            <BsCheck
                onClick={onClick}
                className={`text-white cursor-pointer text-xl border rounded ${checked
                    ? 'bg-[#3563E9] border-[#3563E9]'
                    : 'bg-white border-[#90A3BF] '
                    }`}
            />
            <p className='text-[#3D5278] font-semibold text-[20px]'>{type}</p>
            <p className='text-[#90A3BF]'>({quantity})</p>
        </div>
    );
};

const CapacityInputs = ({ numberPeople, quantity, checked, onClick }) => {
    return (
        <div className='flex items-center gap-2 mb-8'>
            <BsCheck
                onClick={onClick}
                className={`text-white cursor-pointer text-xl border rounded ${checked
                    ? 'bg-[#3563E9] border-[#3563E9]'
                    : 'bg-white border-[#90A3BF] '
                    }`}
            />
            <p className='text-[#3D5278] font-semibold text-[20px]'>
                {numberPeople} Person
            </p>
            <p className='text-[#90A3BF]'>({quantity})</p>
        </div>
    );
};

const Filters = () => {
    const dispatch = useDispatch();
    const capacityFilters = useSelector(state => state.activeFilters.capacityFilters);
    const typeFilters = useSelector(state => state.activeFilters.typeFilters);
    const filteredCars = useSelector(state => state.carList.filteredCars);

    const handleTypeClick = type => {
        dispatch(updateFilter({ category: 'typeFilters', name: type }))
    }

    const handleCapacityClick = (capacity) => {
        dispatch(updateFilter({ category: 'capacityFilters', name: `${capacity} Person` }));
    };

    return (
        <>
            <main className='w-full bg-white px-8 py-10 rounded-lg lg:sticky lg:top-4'>
                <div className='mb-8'>
                    <h4 className='text-[#94A7CB] text-[12px] font-medium mb-7'>
                        SEARCH
                    </h4>
                    <Input placeholder='Search by brand or title' rounded />
                    <div className='mb-8'>
                        <h4 className='text-[#94A7CB] text-sm font-medium mt-14 mb-7 tracking-widest'>
                            TYPE
                        </h4>
                        {typeFilters.map((typeFilter) => (
                            <TypeInputs
                                key={typeFilter.name}
                                type={typeFilter.name}
                                quantity={typeFilter.count}
                                checked={typeFilter.checked}
                                onClick={() => handleTypeClick(typeFilter.name)}
                            />
                        ))}
                    </div>

                    <div className='mb-8'>
                        <h5 className='text-[#94A7CB] text-sm font-medium mt-14 mb-7 tracking-widest'>
                            CAPACITY
                        </h5>
                        {capacityFilters.map((capacityFilter) => (
                            <CapacityInputs
                                key={capacityFilter.name}
                                numberPeople={parseInt(capacityFilter.name)}
                                quantity={capacityFilter.count}
                                checked={capacityFilter.checked}
                                onClick={() => handleCapacityClick(parseInt(capacityFilter.name))}
                            />
                        ))}
                    </div>

                    <div>
                        <h5 className='mb-2 text-lg font-bold capitalize'>
                            price
                        </h5>
                        <input type='range' name='' id='' />
                    </div>
                </div>
                <button className='bg-[#3563E9] text-white py-2 px-4 rounded-lg capitalize'>
                    clear filters
                </button>
            </main>
        </>
    );
};

export default Filters;
