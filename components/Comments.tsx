import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GoVerified } from 'react-icons/go';

import useAuthStore from '../store/authStore';
import NoResults from './NoResults';
import { IUser } from '../types';

interface IProps {
    isPostingComment: boolean;
    comment: string;
    setComment: Dispatch<SetStateAction<string>>;
    addComment: (e: React.FormEvent) => void;
    comments: IComment[];
}

interface IComment {
    comment: string;
    length?: number;
    _key: string;
    postedBy: {
        _id?: string;
        _ref: string;
    };
}

const Comments = ({
    comment,
    setComment,
    addComment,
    comments,
    isPostingComment,
}: IProps) => {
    const { userProfile, allUsers } = useAuthStore();

    return (
        <div className='border-t-2 border-gray-200 pt-4 px-10 bg-[#f8f8f8] border-b-2 lg:pb-0 pb-[100px]'>
            <div className='overflow-scroll lg:h-[475px]'>
                {comments?.length ? (
                    comments.map((item, i) => (
                        <>
                            {allUsers.map(
                                (user: IUser) =>
                                    user._id ===
                                        (item.postedBy._id ||
                                            item.postedBy._ref) && (
                                        <div
                                            className='p-2 items-center'
                                            key={i}
                                        >
                                            <Link href={`/profile/${user._id}`}>
                                                <div>
                                                    <div className='w-8 h-8 mt-1'>
                                                        <Image
                                                            src={user.image}
                                                            alt={
                                                                "user's profile"
                                                            }
                                                            width={35}
                                                            height={35}
                                                            className='rounded-full'
                                                            layout='responsive'
                                                        />
                                                    </div>

                                                    <div className='hidden xl:block'>
                                                        <p className='flex gap-1 items-center text-base font-bold text-primary lowercase'>
                                                            {user.userName.replaceAll(
                                                                ' ',
                                                                ''
                                                            )}
                                                            <GoVerified className='text-blue-400' />
                                                        </p>
                                                        <p className='capitalize text-gray-400 text-xs'>
                                                            {user.userName}
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div>
                                                <p>{item.comment}</p>
                                            </div>
                                        </div>
                                    )
                            )}
                        </>
                    ))
                ) : (
                    <NoResults text='No comments yet! Be the first one to add a comment.' />
                )}
            </div>
            {userProfile && (
                <div className='absolute bottom-0 left-0 pb-6 px-2 md:px-10'>
                    <form
                        onSubmit={addComment}
                        className='flex gap-4'
                        action=''
                    >
                        <input
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder='Add a comment...'
                            className='bg-primary px-6 py-4 text-base font-medium border-2 w-[250px] md:w-[700px] lg:w-[350px] border-green-100 focus:outline-none focus:border-2 focus:border-gray-300 flex-1 rounded-lg'
                        />
                        <button
                            className='text-base text-gray-400'
                            onClick={addComment}
                        >
                            {isPostingComment ? 'Commenting...' : 'Comment'}
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Comments;
