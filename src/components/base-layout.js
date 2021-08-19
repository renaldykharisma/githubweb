import './base-layout.css';
import { Button, Layout, Space } from 'antd';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';

const { Header, Content } = Layout;
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
                    <div>
                        <Button type="text" onClick={()=>{window.open('https://github.com/renaldykharisma/githubweb', "_blank")}}><p style={{color: 'white'}}>
                        Click Here to Show Source Code</p></Button>
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
