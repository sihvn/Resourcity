"use client";

import Link from 'next/link'
import BaseTemplate from '../../components/baseTemplate';
import Navbar from '../../components/navbar';
import Footer1 from '../../components/footer';

export default function Tutorial() {
    return (

        <>
            <Navbar />
            <div className='flex items-center justify-center'>
                <iframe
                    width='1280'
                    height='720'
                    src="https://www.youtube.com/embed/4U9iDY_4Tag"
                    frameborder="0"
                    allowfullscreen
                />
            </div>
            <Footer1 />
        </>


    );
}