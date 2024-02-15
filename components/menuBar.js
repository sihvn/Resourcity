// MenuBar.js
import Link from 'next/link';

const MenuBar = () => {
    return (
        <ul className="flex justify-around space-x-4 bg-gray-200">
            <li>
                <Link href="/" className="hover:font-bold">Home</Link>
            </li>
            <li>
                <Link href="/rules" className="hover:font-bold">Game Rules</Link>
            </li>
            <li>
                <Link href="/tutorial" className="hover:font-bold">Tutorial</Link>
            </li>
            <li>
                <Link href="/newgame" className="hover:font-bold">New Game</Link>
            </li>
            <li>
                <Link href="/leaderboard" className="hover:font-bold">Leaderboard</Link>
            </li>
            <li>
                <Link href="/faq" className="hover:font-bold">FAQ</Link>
            </li>
        </ul>
    )
}

export default MenuBar;