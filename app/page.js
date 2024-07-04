"use client";

import BaseTemplate from '../components/baseTemplate';
import GameBackground from '../components/gamebackground';
import Navbar from '../components/navbar';
import Footer1 from '../components/footer';
import { useEffect, useState } from 'react';
import { Layout } from 'antd';

//TODO: fix winodw not defined error with https://stackoverflow.com/questions/75692116/next-js-13-window-is-not-defined
function getWindowDimensions() {
    if (typeof window === 'undefined') {
        return {
            width,
            height
        };
    }
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;

}

export default function Page() {

    const { height, width } = useWindowDimensions();
    const isMobile = width <= 768;

    return (
        <Layout>
            <Navbar />
            <div className='flex items-center justify-center'>
                <iframe
                    style={{ width: width, height: isMobile ? height * 0.4 : height }}
                    src="https://www.youtube.com/embed/KpgShENMN90"
                    frameBorder="0"
                    allowFullScreen
                />
            </div>
            <GameBackground />
            <Footer1 />

        </Layout>


    );
}