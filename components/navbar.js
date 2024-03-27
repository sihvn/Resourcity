import React, { useState, useEffect } from 'react';
import BaseTemplate from './baseTemplate';
import MenuBar from './menuBar';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            {isMobile ? <BaseTemplate /> : <MenuBar />}
        </div>
    );
};

export default Navbar;