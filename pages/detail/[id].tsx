import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { GoVerified } from 'react-icons/go';
import { MdOutlineCancel } from 'react-icons/md';
import { BsFillPlayFill } from 'react-icons/bs';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import axios from 'axios';
import { BASE_URL } from '../../utils';
import { Video } from '../../types';

interface IProps {
    postDetails: Video;
}

const Detail = ({ postDetails }: IProps) => {
    const [post, setPost] = useState(postDetails);

    const videoRef = useRef<HTMLVideoElement>(null);

    if (!post) return null;

    return (
        <div className='flex w-full absolute left-0 top-0 bg-white flex-wrap lg:flex-nowrap'>
            <div></div>
        </div>
    );
};

export const getServerSideProps = async ({
    params: { id },
}: {
    params: { id: string };
}) => {
    const { data } = await axios.get(`${BASE_URL}/api/detail/${id}`);

    return {
        props: {
            postDetails: data,
        },
    };
};

export default Detail;
