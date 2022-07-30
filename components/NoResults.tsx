import { NextPage } from 'next';
import { MdOutlineVideocamOff } from 'react-icons/md';
import { BiCommentX } from 'react-icons/bi';
interface IProps {
    text: string;
}

const NoResults: NextPage<IProps> = ({ text }) => {
    return (
        <div className='flex flex-col justify-center items-center h-full w-full'>
            <p className='text-7xl mb-3'>
                {text ===
                'No comments yet! Be the first one to add a comment.' ? (
                    <BiCommentX />
                ) : (
                    <MdOutlineVideocamOff />
                )}
            </p>
            <p className='text-xl text-center'>{text}</p>
        </div>
    );
};

export default NoResults;
