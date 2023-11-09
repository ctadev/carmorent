import React from 'react'

const FormInput = ({ name, keyName, value, userForm, setUserForm, type }) => {
    return (
        <div className='flex flex-col'>
            <h3 className='font-medium text-lg mb-4'>{name}</h3>
            <input type={type} placeholder={name} value={value}
                onChange={(e) => { setUserForm({ ...userForm, [keyName]: e.target.value }) }}
                required className='rounded-md md:rounded-xl bg-[#F6F7F9] px-4 md:px-8 py-4 placeholder:font-light' />
        </div>
    )
}

export default FormInput