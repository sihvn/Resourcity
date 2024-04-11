// MenuBar.js
import Link from 'next/link';
import { Dropdown, Menu, Layout } from 'antd';
import { DownOutlined } from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;

const MenuBar = () => {
    const handleClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 86; // The offset you want above the element after scrolling
            const elementPosition = element.getBoundingClientRect().top; // Element's position relative to the viewport
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const menu = (
        <Menu>
            <Menu.Item key="1" onClick={() => handleClick('game-setup')}>
                Game Setup
            </Menu.Item>
            <Menu.Item key="2" onClick={() => handleClick('player-actions')}>
                Player Actions
            </Menu.Item>
            <Menu.Item key="3" onClick={() => handleClick('forming-loops')}>
                Forming Loops
            </Menu.Item>
            <Menu.Item key="4" onClick={() => handleClick('farm-actions')}>
                Farm Actions
            </Menu.Item>
            <Menu.Item key="5" onClick={() => handleClick('farm-examples')}>
                Farm Examples
            </Menu.Item>
            <Menu.Item key="6" onClick={() => handleClick('crisis-cards')}>
                Crisis Cards
            </Menu.Item>
            <Menu.Item key="7" onClick={() => handleClick('huat-cards')}>
                Huat Cards
            </Menu.Item>
            <Menu.Item key="8" onClick={() => handleClick('super-powers')}>
                Superpowers
            </Menu.Item>
            <Menu.Item key="9" onClick={() => handleClick('game-components')}>
                Game Component
            </Menu.Item>
            <Menu.Item key="10" onClick={() => handleClick('instruction-card')}>
                Instruction Card
            </Menu.Item>
        </Menu>
    );
    return (
        <div>
            <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 mb-64">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
                    <a className="items-center rtl:space-x-reverse">
                        <img src="/Resourcity/images/logo.png" className="h-24" />
                    </a>
                    <ul className="flex flex-col p-4 md:p-0 mt-4 rounded-lg md:space-x-8 md:flex-row md:mt-0" id="navbar-sticky">
                        <Link href="/" className="hover:text-gray-500 cursor-pointer">Home</Link>
                        <Dropdown menu={menu} trigger={['click']}>
                            <a className="hover:text-gray-500 cursor-pointer">
                                Game Rules <DownOutlined />
                            </a>
                        </Dropdown>
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