"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Layout, Drawer, Button, Menu, theme } from 'antd';
import { useRouter } from 'next/navigation';

const { Header, Content, Footer, Sider } = Layout;
const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
    (icon, index) => ({
        key: String(index + 1),
        label: `nav ${index + 1}`,
    }),
);

const BaseTemplate = ({ children }) => {
    const router = useRouter();
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const [collapsed, setCollapsed] = useState(true);

    const handleClick = (id) => {
        setCollapsed(!collapsed); // Close the drawer upon clicking an item
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 64; // The offset you want above the element after scrolling
            const elementPosition = element.getBoundingClientRect().top; // Element's position relative to the viewport
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        router.push(id);
    }



    return (
        <Layout>
            <Header
                style={{
                    padding: 0,
                    background: colorBgContainer,
                    display: 'flex', // Add flex display to align items horizontally
                    position: 'fixed',
                    width: '100%',
                    alignItems: 'center', // Align items vertically
                }}
            >
                <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                        fontSize: '16px',
                        width: 64,
                        height: 64,
                    }} />
                <img src="/Resourcity/images/logo.png" className="h-10" />

            </Header>
            <Content style={{ paddingTop: 32 }}></Content>

            <Layout>
                <Drawer
                    onClose={() => setCollapsed(!collapsed)}
                    open={!collapsed}
                    placement='left'
                >
                    <Menu theme="light" mode="inline" onClick={() => setCollapsed(!collapsed)}>
                        <Menu.Item key="1">
                            <Link href="/">Home</Link>
                        </Menu.Item>
                        <Menu.SubMenu key="gameRules" title="Game Rules">
                            <Menu.Item key="/rules#game-setup" onClick={() => handleClick('/rules#game-setup')}>
                                Game Setup
                            </Menu.Item>
                            <Menu.Item key="/rules#player-actions" onClick={() => handleClick('/rules#player-actions')}>
                                Player Actions
                            </Menu.Item>
                            <Menu.Item key="4" onClick={() => handleClick('/rules#forming-loops')}>
                                Forming Loops
                            </Menu.Item>
                            <Menu.Item key="5" onClick={() => handleClick('/rules#farm-actions')}>
                                Farm Actions
                            </Menu.Item>
                            <Menu.Item key="6" onClick={() => handleClick('/rules#farm-examples')}>
                                Farm Examples
                            </Menu.Item>
                            <Menu.Item key="7" onClick={() => handleClick('/rules#crisis-cards')}>
                                Crisis Cards
                            </Menu.Item>
                            <Menu.Item key="8" onClick={() => handleClick('/rules#huat-cards')}>
                                Huat Cards
                            </Menu.Item>
                            <Menu.Item key="9" onClick={() => handleClick('/rules#super-powers')}>
                                Superpowers
                            </Menu.Item>
                            <Menu.Item key="10" onClick={() => handleClick('/rules#game-components')}>
                                Game Component
                            </Menu.Item>
                            <Menu.Item key="11" onClick={() => handleClick('/rules#instruction-card')}>
                                Instruction Card
                            </Menu.Item>
                        </Menu.SubMenu>
                        <Menu.Item key="12">
                            <Link href="/tutorial">Tutorial</Link>
                        </Menu.Item>
                        <Menu.Item key="13">
                            <Link href="/gamescore">Game Score</Link>
                        </Menu.Item>
                        <Menu.Item key="14">
                            <Link href="/leaderboard">Leaderboard</Link>
                        </Menu.Item>
                        <Menu.Item key="15">
                            <Link href="/faq">FAQ</Link>
                        </Menu.Item>
                    </Menu>
                </Drawer>

                <Content
                    style={{
                        margin: '24px 16px 0',

                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <div
                        style={{

                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {children}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};
export default BaseTemplate;