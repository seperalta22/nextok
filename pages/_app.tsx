import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
    const [isSSR, setIsSSR] = useState(true); //* SSR is true when the app is rendered on the server

    useEffect(() => {
        //* SSR is false when the app is rendered on the client
        setIsSSR(false);
    }, []);

    if (isSSR) return null;

    return (
        <div>
            <Navbar />
            <div className='flex gap-6 md:gap-20'>
                <div className='h-[92vh] overflow-hidden xl:hover:overflow-auto'>
                    <Sidebar />
                </div>
                <div className='mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1 '>
                    <Component {...pageProps} />
                </div>
            </div>
        </div>
    );
};

export default MyApp;
