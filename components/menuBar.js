// MenuBar.js
import Link from 'next/link';
import { Menu } from 'antd';

const MenuBar = () => {
    return (
        <Menu theme="dark" mode="inline">
            <Menu.Item key="1">
                <Link href="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link href="/rules">Game Rules</Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link href="/tutorial">Tutorial</Link>
            </Menu.Item>
            <Menu.Item key="4">
                <Link href="/newgame">New Game</Link>
            </Menu.Item>
            <Menu.Item key="5">
                <Link href="/leaderboard">Leaderboard</Link>
            </Menu.Item>
            <Menu.Item key="6">
                <Link href="/faq">FAQ</Link>
            </Menu.Item>
        </Menu>
    )
}

export default MenuBar;