"use client";

import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import GameBackground from './gamebackground';
import MenuBar from './menuBar';
import Base from 'antd/es/typography/Base';

const { Header, Content, Footer } = Layout;
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

    return (
        <Layout>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <a className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/CapstoneProject/images/logo.png" className="h-16" />
                        {/* <span className="self-center text-2xl font-semibold whitespace-nowrap">Resourcity</span> */}
                    </a>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px 0',
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

                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    The Circle for Human Sustainability ©{new Date().getFullYear()} Created by SUTD ACE Capstone Group
                </Footer>
            </Layout>
            <MenuBar />
        </Layout>
    );
};
export default BaseTemplate;