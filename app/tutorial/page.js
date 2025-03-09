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
                    src="https://www.youtube.com/embed/_3p7gh8M3KM?si=qdkp72CTm8xhRYuI"
                    frameBorder="0"
                    allowFullScreen
                />
            </div>
            <Footer1 />
        </>


    );
}
