import Image from 'next/image';
import Link from 'next/link';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { IoMdAdd } from 'react-icons/io';

import Logo from '../utils/logo.png';
import { createOrGetUser } from '../utils';

import useAuthStore from '../store/authStore';
import { AiOutlineLogout } from 'react-icons/ai';

const Navbar = () => {
    const { userProfile, addUser, removeUser }: any = useAuthStore();

    return (
        <div className='w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
            <Link href='/'>
                <div className='w-[100px] m:w-[130px] '>
                    <Image
                        className='cursor-pointer'
                        src={Logo}
                        alt='logo'
                        layout='responsive'
                    />
                </div>
            </Link>
            <div className='"relative hidden md:block'>
                <form action=''></form>
            </div>

            <div>
                {userProfile ? (
                    <div className='flex gap-5 md:gap-10 '>
                        <Link href='/upload'>
                            <button className='border-2 px-2 md:px-4 text-base font-semibold flex items-center gap-2'>
                                <IoMdAdd className='text-xl' />
                                {``}
                                <span className='hidden md:block'>Upload</span>
                            </button>
                        </Link>
                        {userProfile && (
                            <Link href='/'>
                                <>
                                    <Image
                                        width={35}
                                        height={35}
                                        className='rounded-full cursor-pointer'
                                        src={userProfile.image}
                                        alt='profile photo'
                                    ></Image>
                                </>
                            </Link>
                        )}
                        <button
                            type='button'
                            className='px-2 hover:scale-125'
                            onClick={() => {
                                googleLogout();
                                removeUser();
                            }}
                        >
                            <AiOutlineLogout color='red' fontSize={25} />
                        </button>
                    </div>
                ) : (
                    <GoogleLogin
                        onSuccess={(response) =>
                            createOrGetUser(response, addUser)
                        }
                        onError={() => console.log('Error')}
                    />
                )}
            </div>
        </div>
    );
};

export default Navbar;
