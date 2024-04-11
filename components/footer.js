//Footer.js
import { Layout } from 'antd';
const { Footer } = Layout;

export default function Footer1() {
    return (
        <Layout>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                The Circle for Human Sustainability ©{new Date().getFullYear()} Created by SUTD Capstone Group S44
            </Footer>
        </Layout>

    );
}