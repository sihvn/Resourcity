// MenuBar.js
import Link from 'next/link';
import { Menu, Layout } from 'antd';

const { Sider } = Layout;

const MenuBar = () => {
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            reverseArrow={true}
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div className="demo-logo-vertical" />
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

        </Sider>
    )
}

export default MenuBar;