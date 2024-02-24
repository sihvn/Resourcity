"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Layout, Drawer, Button, Menu, theme } from 'antd';
// import GameBackground from './gamebackground';
// import MenuBar from './menuBar';
// import Base from 'antd/es/typography/Base';

const { Header, Content, Footer, Sider } = Layout;
const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
    (icon, index) => ({
        key: String(index + 1),
        label: `nav ${index + 1}`,
    }),
);

const BaseTemplate = ({ children }) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const [collapsed, setCollapsed] = useState(true);

    return (
        <Layout>
            <Header
                style={{
                    padding: 0,
                    background: colorBgContainer,
                    display: 'flex', // Add flex display to align items horizontally
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
                <img src="/CapstoneProject/images/logo.png" className="h-16" />

            </Header>

            <Layout>
                <Drawer
                    onClose={() => setCollapsed(!collapsed)}
                    open={!collapsed}
                    placement='left'
                >
                    <Menu theme="light" mode="inline">
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
                </Drawer>

                <Content
                    style={{
                        margin: '24px 16px 0',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {children}
                    </div>
                </Content>
            </Layout>

            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                The Circle for Human Sustainability ©{new Date().getFullYear()} Created by SUTD ACE Capstone Group
            </Footer>
        </Layout>
    );
};
export default BaseTemplate;