import './base-layout.css';
import { Button, Layout } from 'antd';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import {
    GithubFilled
  } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
export default function BaseLayout(props){
    const screens = useBreakpoint();
    return(
        <Layout className="layout" breakpoint="xs">
            <Header className="header">
                <div className="logo">
                    <h2 style={{color: 'white'}}>Github Project Web</h2>
                </div>
                {
                    !screens.xs ? 
                    <div className="githublogo">
                        <GithubFilled style={{fontSize: 45, color: 'white'}} />&nbsp;&nbsp;
                        <Button type="link" href={'https://github.com/renaldykharisma/githubweb'}><span style={{fontSize: 20, color: 'white'}}>Source Code</span></Button>
                    </div> : <></>
                }
            </Header>
            <Content className="content">
                <div className="site-layout-content">
                    {props.children}
                </div>
            </Content>
        </Layout>
    )
}
