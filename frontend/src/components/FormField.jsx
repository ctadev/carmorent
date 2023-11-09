import React from 'react';

const FormField = ({ labelName, type, name, placeholder, value, handleChange}) => {
  	return (
    	<div>
			<div className='flex items-center gap-2 mb-2'>
				<label
					htmlFor={name}
					className="block text-sm font-medium text-gray-900 text-[16px]"
				>
					{labelName}
				</label>
			</div>
			<input
				type={type}
                name={name}
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
				required
				className='bg-gray-50 border  border-gray-300 text-gray-900 text-[16px] rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3'
			/>
    	</div>
  	)
}

export default FormField