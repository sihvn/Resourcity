// MenuBar.js
import Link from 'next/link';
import { Dropdown, Menu, Layout } from 'antd';
import { DownOutlined } from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;

const MenuBar = (e) => {
    const handleClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 86;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const menu = (
        <Menu>
            <Menu.Item key="16" onClick={(e) => handleClick('game-setup')}>
                <div>Game Setup</div>
            </Menu.Item>
            <Menu.Item key="17" onClick={(e) => handleClick('player-actions')}>
                <div>Player Actions</div>
            </Menu.Item>
            <Menu.Item key="18" onClick={(e) => handleClick('forming-loops')}>
                <div>Forming Loops</div>
            </Menu.Item>
            <Menu.Item key="19" onClick={(e) => handleClick('farm-actions')}>
                <div>Farm Actions</div>
            </Menu.Item>
            <Menu.Item key="20" onClick={(e) => handleClick('farm-examples')}>
                <div>Farm Examples</div>
            </Menu.Item>
            <Menu.Item key="21" onClick={(e) => handleClick('crisis-cards')}>
                <div>Crisis Cards</div>
            </Menu.Item>
            <Menu.Item key="22" onClick={(e) => handleClick('huat-cards')}>
                <div>Huat Cards</div>
            </Menu.Item>
            <Menu.Item key="23" onClick={(e) => handleClick('super-powers')}>
                <div>Superpowers</div>
            </Menu.Item>
            <Menu.Item key="24" onClick={(e) => handleClick('game-components')}>
                <div>Game Component</div>
            </Menu.Item>
            <Menu.Item key="25" onClick={(e) => handleClick('instruction-card')}>
                <div>Instruction Card</div>
            </Menu.Item>
        </Menu>

    );
    const items = [{
        label: 'Game Setup',
        key: '16',
        onClick: () => handleClick('game-setup'),
    },

    {
        label: 'Player Actions',
        key: '17',
        onClick: () => handleClick('player-actions'),
    },
    {
        label: 'Forming Loops',
        key: '18',
        onClick: () => handleClick('forming-loops'),
    },
    {
        label: 'Farm Actions',
        key: '19',
        onClick: () => handleClick('farm-actions'),
    },
    {
        label: 'Farm Examples',
        key: '20',
        onClick: () => handleClick('farm-examples'),
    },
    {
        label: 'Crisis Cards',
        key: '21',
        onClick: () => handleClick('crisis-cards'),
    },
    {
        label: 'Huat Cards',
        key: '22',
        onClick: () => handleClick('huat-cards'),
    },
    {
        label: 'Superpowers',
        key: '23',
        onClick: () => handleClick('super-powers'),
    },
    {
        label: 'Game Component',
        key: '24',
        onClick: () => handleClick('game-components'),
    },
    {
        label: 'Instruction Card',
        key: '25',
        onClick: () => handleClick('instruction-card'),
    },
    ];
    return (
        <div>
            <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 mb-64">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
                    <a className="items-center rtl:space-x-reverse">
                        <img src="/Resourcity/images/logo.png" className="h-24" />
                    </a>
                    <div className="flex flex-col p-4 md:p-0 mt-4 rounded-lg md:space-x-8 md:flex-row md:mt-0" id="navbar-sticky">
                        <Link href="/" className="hover:text-gray-500 cursor-pointer">Home</Link>
                        <Dropdown menu={{ items: items }} trigger={['click']}>
                            <div className="hover:text-gray-500 cursor-pointer">
                                Game Rules <DownOutlined />
                            </div>
                        </Dropdown>
                        <Link href="/tutorial" className="hover:text-gray-500 cursor-pointer">Tutorial</Link>
                        <Link href="/gamescore" className="hover:text-gray-500 cursor-pointer">Game Score</Link>
                        <Link href="/leaderboard" className="hover:text-gray-500 cursor-pointer">Leaderboard</Link>
                        <Link href="/faq" className="hover:text-gray-500 cursor-pointer">FAQ</Link>
                    </div>
                </div>
            </nav>
        </div>


    )
}

export default MenuBar;