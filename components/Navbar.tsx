import Image from 'next/image';
import Link from 'next/link';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { IoMdAdd } from 'react-icons/io';

import Logo from '../utils/logo.png';
import { createOrGetUser } from '../utils';

import useAuthStore from '../store/authStore';

const Navbar = () => {
    const { userProfile, addUser } = useAuthStore();

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
            <div>SEARCH</div>

            <div>
                {userProfile ? (
                    <div className='flex gap-5 md:gap-10 '>
                        <Link href='/upload'>
                            <button>
                                <IoMdAdd className='text-xl' />
                                {``}
                                <span>Upload</span>
                            </button>
                        </Link>
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
