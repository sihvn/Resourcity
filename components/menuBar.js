// MenuBar.js
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { Dropdown, Menu, Layout } from 'antd';
import { DownOutlined } from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;

const MenuBar = (e) => {
    const router = useRouter()

    const handleClick = (id) => {
        // router.push('/rules')
        // router.events.on('routeChangeComplete', () => console.log(router.pathname))
        router.push(id)
        const element = document.getElementById(id);
        console.log(document)
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

    const items = [{
        label: 'Game Setup',
        key: '16',
        onClick: () => handleClick('/rules#game-setup'),
    },

    {
        label: 'Player Actions',
        key: '17',
        onClick: () => handleClick('/rules#player-actions'),
    },
    {
        label: 'Forming Loops',
        key: '18',
        onClick: () => handleClick('/rules#forming-loops'),
    },
    {
        label: 'Farm Actions',
        key: '19',
        onClick: () => handleClick('/rules#farm-actions'),
    },
    {
        label: 'Farm Examples',
        key: '20',
        onClick: () => handleClick('/rules#farm-examples'),
    },
    {
        label: 'Crisis Cards',
        key: '21',
        onClick: () => handleClick('/rules#crisis-cards'),
    },
    {
        label: 'Huat Cards',
        key: '22',
        onClick: () => handleClick('/rules#huat-cards'),
    },
    {
        label: 'Superpowers',
        key: '23',
        onClick: () => handleClick('/rules#super-powers'),
    },
    {
        label: 'Game Component',
        key: '24',
        onClick: () => handleClick('/rules#game-components'),
    },
    {
        label: 'Instruction Card',
        key: '25',
        onClick: () => handleClick('/rules#instruction-card'),
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
                        {/* <Dropdown menu={{ items: items }} trigger={['click']}>
                            <Link href="/rules" passHref>
                                <button className="hover:text-gray-500 cursor-pointer">
                                    Game Rules <DownOutlined />
                                </button>
                            </Link>

                        </Dropdown> */}
                        <Dropdown menu={{ items: items }} trigger={['click']}>
                            <a className="hover:text-gray-500 cursor-pointer">
                                Game Rules <DownOutlined />
                            </a>
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