import './base-layout.css';
import { Layout } from 'antd'
// import {
//     GithubOutlined
//   } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
export default function BaseLayout(props){
    return(
        <Layout className="layout">
            <Header className="header">
                <div className="logo"></div>
            </Header>
            <Content className="content">
                <div className="site-layout-content">
                    {props.children}
                </div>
            </Content>
            <Footer className="footer">Github Repo Web ©2021 Created by Renaldy Kharisma</Footer>
        </Layout>
    )
}
