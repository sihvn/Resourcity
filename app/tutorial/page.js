"use client";

import Link from 'next/link'
import BaseTemplate from '../../components/baseTemplate';

export default function Tutorial() {
    return (
        <BaseTemplate>
            <>
                <h1>Tutorial</h1>
                <h2>
                    <Link href="/">Back to home</Link>
                </h2>
            </>
        </BaseTemplate>
    );
}