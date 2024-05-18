"use client";

import BaseTemplate from '../components/baseTemplate';
import GameBackground from '../components/gamebackground';
import Navbar from '../components/navbar';
import Footer1 from '../components/footer';
import { useEffect, useState } from 'react';

export default function Page() {
    const [dimensions, setDimensions] = useState({
        width: '80%',
        height: '100%'
    });

    // useEffect(() => {
    //     const handleResize = () => {
    //         setDimensions({
    //             width: '100%',
    //             height: '100%'
    //         });
    //     };

    //     window.addEventListener('resize', handleResize);

    //     // Cleanup event listener on component unmount
    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);

    return (
        <>
            <Navbar />
            <div className='flex items-center justify-center'>
                <iframe
                    style={{ width: dimensions.width, height: dimensions.height }}

                    src="https://www.youtube.com/embed/8UWY_CAm3x8"
                    frameborder="0"
                    allowfullscreen
                />
            </div>
            <GameBackground />
            <Footer1 />

        </>


    );
}