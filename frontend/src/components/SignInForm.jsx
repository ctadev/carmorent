import { FormInput, Button } from '../components'

const SignInForm = ({ handleLogin, handleSignUpClick, errorMessage, setUserForm, userForm }) => {
    return (
        <form type='submit' className='flex flex-col gap-4 w-full' onSubmit={handleLogin}>
            <h4 className='mt-8 text-[#3563E9] text-xl font-extrabold mb-6'>Login</h4>
            <p className='text-sm'>Don't have an account? <span className='text-[#3D5278] cursor-pointer' onClick={handleSignUpClick}>Sign up</span></p>
            {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
            <FormInput keyName='username' type="text" name='Username' setUserForm={setUserForm} userForm={userForm} value={userForm.username} />
            <FormInput keyName='password' type="password" name='Password' setUserForm={setUserForm} userForm={userForm} value={userForm.password} />
            <Button text='Login' size='large' rounded full type='submit' />
        </form>
    )
}

export default SignInForm