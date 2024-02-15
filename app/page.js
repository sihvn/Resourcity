import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css';


export default function Page() {
    return (
        <>
            <Head>
                <title>Capstone Game Name</title>
            </Head>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/rules">Game Rules</Link>
                </li>
                <li>
                    <Link href="/tutorial">Tutorial</Link>
                </li>
                <li>
                    <Link href="/newgame">New Game</Link>
                </li>
                <li>
                    <Link href="/leaderboard">Leaderboard</Link>
                </li>
                <li>
                    <Link href="/faq">FAQ</Link>
                </li>
            </ul>
        </>
    )
}