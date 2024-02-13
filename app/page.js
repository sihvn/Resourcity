import Link from 'next/link'

export default function Page() {
    return (
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
        </ul>)
}