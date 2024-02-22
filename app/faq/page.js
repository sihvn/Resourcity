"use client";

import Link from 'next/link'
import Head from 'next/head'
import BaseTemplate from '../../components/baseTemplate';

export default function FAQ() {
    return (
        <BaseTemplate>
            <>
                <Head>
                    <title> FAQ</title>
                </Head>
                <h1>FAQ</h1>
                <h2>
                    <Link href="/">Back to home</Link>
                </h2>
            </>
        </BaseTemplate>
    );
}