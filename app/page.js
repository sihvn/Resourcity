import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css';
import MenuBar from '../components/menuBar';

export default function Page() {
    return (
        <>
            <Head>
                <title>Capstone Game Name</title>
            </Head>
            <MenuBar />
        </>
    )
}