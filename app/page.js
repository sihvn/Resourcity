import Link from 'next/link'
import Head from 'next/head'
import MenuBar from '../components/menuBar';
import GameBackground from '../components/gamebackground';

export default function Page() {
    return (
        <>
            <Head>
                <title>Capstone Game Name</title>
            </Head>
            <MenuBar />
            <GameBackground />
        </>
    )
}