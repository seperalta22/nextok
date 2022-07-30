import Image from 'next/image';
import Link from 'next/link';
import { GoVerified } from 'react-icons/go';

import useAuthStore from '../store/authStore';
import NoResults from './NoResults';

const Comments = () => {
    const { userProfile } = useAuthStore();
    const comments = [];

    return (
        <div className='border-t-2 border-gray-200 pt-4 px-10 bg-[#f8f8f8] border-b-2 lg:pb-0 pb-[100px]'>
            <div className='overflow-scroll lg:h-[475px]'>
                {comments.length > 0 ? (
                    <div>videos</div>
                ) : (
                    <NoResults text='No comments yet! Be the first one to add a comment.' />
                )}
            </div>
            {userProfile && (
                <div className='absolute bottom-0 left-0 pb-6 px-2 md:px-10'>
                    <form onSubmit={() => {}} className='flex gap-4' action=''>
                        <input
                            value={''}
                            onChange={() => {}}
                            placeholder='Add a comment...'
                            className='bg-primary px-6 py-4 text-base font-medium border-2 w-[250px] md:w-[700px] lg:w-[350px] border-green-100 focus:outline-none focus:border-2 focus:border-gray-300 flex-1 rounded-lg'
                        />
                    </form>
                </div>
            )}
        </div>
    );
};

export default Comments;
