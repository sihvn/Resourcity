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
        router.push(id)
        // router.events.on('routeChangeComplete', () => console.log(router.pathname))
        // router.onRouteChangeStart('./rules')
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

    const subItems = [{
        label: 'Game Setup',
        key: 'game-setup',
        onClick: () => handleClick('/rules#game-setup'),
    },
    {
        label: 'Player Actions',
        key: 'player-actions',
        onClick: () => handleClick('/rules#player-actions'),
    },
    {
        label: 'Forming Loops',
        key: 'forming-loops',
        onClick: () => handleClick('/rules#forming-loops'),
    },
    {
        label: 'Farm Actions',
        key: 'farm-actions',
        onClick: () => handleClick('/rules#farm-actions'),
    },
    {
        label: 'Farm Examples',
        key: 'farm-examples',
        onClick: () => handleClick('/rules#farm-examples'),
    },
    {
        label: 'Crisis Cards',
        key: 'crisis-cards',
        onClick: () => handleClick('/rules#crisis-cards'),
    },
    {
        label: 'Huat Cards',
        key: 'huat-cards',
        onClick: () => handleClick('/rules#huat-cards'),
    },
    {
        label: 'Superpowers',
        key: 'super-powers',
        onClick: () => handleClick('/rules#super-powers'),
    },
    {
        label: 'Game Component',
        key: 'game-components',
        onClick: () => handleClick('/rules#game-components'),
    },
    {
        label: 'Instruction Card',
        key: 'instruction-card',
        onClick: () => handleClick('/rules#instruction-card'),
    },
    ];

    const items = [{
        label: 'Home',
        key: 'home',
        onClick: () => handleClick('/'),
    },

    {
        label: 'Game Rules',
        key: 'rules',
        children: subItems
    },
    {
        label: 'Tutorial',
        key: 'tutorial',
        onClick: () => handleClick('/tutorial'),
    },
    {
        label: 'Game Score',
        key: 'gamescore',
        onClick: () => handleClick('/gamescore'),
    },
    {
        label: 'Leaderboard',
        key: 'leaderboard',
        onClick: () => handleClick('/leaderboard'),
    },
    {
        label: 'FAQ',
        key: 'faq',
        onClick: () => handleClick('/faq'),
    },
    ];



    return (
        <Header className="bg-white " style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
        }}>
            <a className="h-10">
                <img src="/Resourcity/images/logo.png" className="h-10" />
            </a>
            <Menu items={items} mode="horizontal" style={{ display: 'flex', justifyContent: 'flex-end', flex: 1, minWidth: 0 }} >
            </Menu>
        </Header >


    )
}

export default MenuBar;