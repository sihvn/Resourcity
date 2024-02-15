import Link from 'next/link'
import Head from 'next/head'

export default function FAQ() {
    return (
        <>
            <Head>
                <title> FAQ</title>
            </Head>

            <h1>FAQ</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    );
}