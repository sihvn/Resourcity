// MenuBar.js
import Link from 'next/link';


const MenuBar = () => {
    return (
        <ul className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="\images\logo.jpg" className="h-8" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap">Resourcity</span>
            </a>
            <li>
                <Link href="/" className="hover:text-gray-300 cursor-pointer">Home</Link>
            </li>
            <li>
                <Link href="/rules" className="hover:text-gray-300 cursor-pointer">Game Rules</Link>
            </li>
            <li>
                <Link href="/tutorial" className="hover:text-gray-300 cursor-pointer">Tutorial</Link>
            </li>
            <li>
                <Link href="/newgame" className="hover:text-gray-300 cursor-pointer">New Game</Link>
            </li>
            <li>
                <Link href="/leaderboard" className="hover:text-gray-300 cursor-pointer">Leaderboard</Link>
            </li>
            <li>
                <Link href="/faq" className="hover:text-gray-300 cursor-pointer">FAQ</Link>
            </li>
        </ul>
    )
}

export default MenuBar;