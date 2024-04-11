"use client";

import BaseTemplate from '../components/baseTemplate';
import GameBackground from '../components/gamebackground';
import Navbar from '../components/navbar';
import Footer1 from '../components/footer';

export default function Page() {
    return (
        <>
            <Navbar />
            <div className='flex items-center justify-center'>
                <iframe
                    width='1280'
                    height='720'
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