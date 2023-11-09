import { signIn, signOut, useSession } from 'next-auth/react';
import { AiOutlineLogin } from 'react-icons/ai';

const SignIn = () => {
  const { data: session } = useSession();

  if (session) {
    return (
        <img src={session?.user?.image ?? 'https://ionicframework.com/docs/img/demos/avatar.svg'} onClick={() => signOut()} className="w-9 h-9 rounded-full cursor-pointer" />
    );
  }
  return (
      <button onClick={() => signIn('google')} className="text-[10px] items-center flex justify-center flex-col"><AiOutlineLogin /> Sign In</button>
  );
};

export default SignIn;
