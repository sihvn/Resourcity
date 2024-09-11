"use client";

import BaseTemplate from '../components/baseTemplate';
import GameBackground from '../components/gamebackground';
import Navbar from '../components/navbar';
import Footer1 from '../components/footer';
import { useEffect, useState } from 'react';
import { Row, Col, Layout } from 'antd';
import "./globals.css";

export default function Page() {
    const [dimensions, setDimensions] = useState({
        width: '100%',
        height: '300px'
    });

    return (
        <Layout>
            <Navbar />
            <div className="flex flex-col md:flex-row items-center justify-center">
                {/* YouTube Video */}
                <div className="md:w-1/2 w-full">
                    <iframe
                        className="w-full h-60 md:h-80"
                        src="https://www.youtube.com/embed/KpgShENMN90"
                        title="YouTube video"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Text Content */}
                <div className="md:w-1/2 w-full">
                    <GameBackground />
                </div>
            </div>

            <Footer1 />
        </Layout>


    );
}