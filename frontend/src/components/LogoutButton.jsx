import { MdOutlineLogout } from 'react-icons/md'

const LogoutButton = () => {
    return (
        <button className='flex items-center bg-[#ED3F3F] py-3 px-6 text-white rounded-xl gap-2 font-semibold'>
            Logout
            <MdOutlineLogout />
        </button>
    )
}

export default LogoutButton