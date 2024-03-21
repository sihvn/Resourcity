"use client";

import Link from 'next/link'
import BaseTemplate from '../../components/baseTemplate';

export default function Tutorial() {
    return (
        <BaseTemplate>
            <div className='flex items-center justify-center'>
                <iframe
                    width='1280'
                    height='720'
                    src="https://www.youtube.com/embed/Fhwp9i6P110"
                    frameborder="0"
                    allowfullscreen
                />
            </div>
        </BaseTemplate>
    );
}