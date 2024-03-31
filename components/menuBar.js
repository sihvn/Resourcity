// MenuBar.js
import Link from 'next/link';
import { Menu, Layout } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const MenuBar = () => {
    return (
        <div>
            <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 mb-64">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
                    <a className="items-center rtl:space-x-reverse">
                        <img src="/Resourcity/images/logo.png" className="h-24" />
                    </a>
                    <ul className="flex flex-col p-4 md:p-0 mt-4 rounded-lg md:space-x-8 md:flex-row md:mt-0" id="navbar-sticky">
                        <Link href="/" className="hover:text-gray-500 cursor-pointer">Home</Link>
                        <Link href="/rules" className="hover:text-gray-500 cursor-pointer">Game Rules</Link>
                        <Link href="/tutorial" className="hover:text-gray-500 cursor-pointer">Tutorial</Link>
                        <Link href="/gamescore" className="hover:text-gray-500 cursor-pointer">Game Score</Link>
                        <Link href="/leaderboard" className="hover:text-gray-500 cursor-pointer">Leaderboard</Link>
                        <Link href="/faq" className="hover:text-gray-500 cursor-pointer">FAQ</Link>
                    </ul>
                </div>
            </nav>
            <div className="h-32"></div>
        </div>


    )
}

export default MenuBar;