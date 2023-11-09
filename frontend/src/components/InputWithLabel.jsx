import React from 'react'

const InputWithLabel = ({ label, type, placeholder, value, onChange, icon, required }) => {
    return (
        <div className='flex flex-col flex-1'>
            <h3 className='font-medium text-lg mb-4'>{label}</h3>
            <div className={`flex items-center rounded-md md:rounded-xl bg-[#F6F7F9] ${!icon && 'pl-4 md:pl-8'}`}>
                {icon && <span className='text-2xl ml-4 text-[#90A3BF]'>{icon}</span>}
                <input required={required} type={type} placeholder={placeholder} className='rounded-md md:rounded-xl bg-[#F6F7F9] px-2 py-4 placeholder:font-light w-full focus:outline-none' value={value} onChange={onChange} />
            </div>
        </div>
    );
};

export default InputWithLabel