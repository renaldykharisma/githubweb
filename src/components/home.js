import { Input, Select, message, List, Card, Button, Pagination, Spin } from 'antd';
import React, { useState, useEffect } from 'react';
import CardLayout from './card-layout';
import './home.css';
import Profile from './profile';
import Services from './services-helper';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';

const { Search } = Input;
const { Option } = Select;

export default function Home(){

    const screens = useBreakpoint();
    let service = new Services();
    const [roleId, setRoleId] = useState(0);
    const [userInfo, setUserInfo] = useState(null);
    const [dataResp, setDataResp] = useState([]);
    const [per_page] = useState(30);
    const [page, setPage] = useState(1)
    const [name, setUserName] = useState('');
    const [isLoad, setIsLoad] = useState(false);

    const roleItems= [
        {
            id: 0,
            name: 'User Repository'
        },
        {
            id: 1,
            name: 'Organization Repository'
        }
    ];

    useEffect(() => {
    }, [dataResp, userInfo]);

    const roleChange = (value) =>{
        setRoleId(roleId => roleId = value);
    }

    const onSearch = (value) => {
        setIsLoad(async(isLoad = true) => {
            if(!value){
                setDataResp(dataResp => dataResp = []);
                setUserInfo(userInfo => userInfo = null);
                setPage(page => page = 1);
                setIsLoad(false);
            }
            let isData = Boolean;
            setUserName(name => name = value);
            setPage(page => page = 1);
            const respRepoList = await getRepoList(roleId, value, per_page, page);
            const resp = await service.getUserInformation(value);
            respRepoList.data === undefined ? isData = false : isData = true;
            if(isData){
                setDataResp(dataResp => dataResp = respRepoList.data);
                setUserInfo(userInfo => userInfo = resp.data);
            }else{
                setDataResp(dataResp => dataResp = []);
                setUserInfo(userInfo => userInfo = null);
                setPage(page => page = 1);
                message.error(respRepoList.error.toString());
            }
            setIsLoad(false);
        });
    }

    async function getRepoList(roleid, name, perpage, page){
        const resp = await service.getRepoList(roleid, name, perpage, page);
        return {data: resp.data, error: !resp.error?.response ? resp.error : resp.error.response?.data.message};
    }

    const onPageChange = (val) => {
        setIsLoad(async(isLoad = true) => {
            const respRepoList = await getRepoList(roleId, name, per_page, val);
            setDataResp(dataResp => dataResp = respRepoList.data);
            setIsLoad(false);
        });
    }

    return(
        <div breakpoint="xs">
            <div className="search-field">
                <h1>Welcome to Github Project</h1><br />
                <div className="search-deck">
                    <Select defaultValue={roleItems[0].name} size="large" style={{ width: 260 }} onChange={roleChange}>{
                        roleItems.map((item, i) => (
                            <Option key={i} value={item.id}>{item.name}</Option>
                        ))
                    }
                    </Select>&nbsp;
                    <Search placeholder="search your name" allowClear size="large" 
                    onSearch={onSearch} style={{width: screens.xs ? '100%' : 400}} className="search-field" />
                </div>
            </div>
            <Spin size="large" spinning={isLoad}>
                <br />
                {
                    !userInfo ? <></> : <Profile profileData={userInfo}></Profile>
                }   
                <br />
                <List
                    grid={{ gutter: 3, xs: 1, sm: 2, md: 2, lg: 2, xl: 3, xxl: 4 }}
                    dataSource = {dataResp}
                    renderItem = {
                        item =>(
                            <List.Item>
                                <Card className="card" 
                                title={item.name} 
                                actions={[
                                <Button type="text" onClick={()=>{window.open(`https://github.com/${name}/${item.name}`, "_blank")}}>Repo detail</Button>,
                                ]}>
                                    {
                                        <CardLayout dataRepos={item}></CardLayout>
                                    }
                                </Card>
                            </List.Item>
                        )
                    }
                    >
                </List>
                <br/>
                <Pagination size={screens.xs ? 'small' : 'default'} style={{textAlign: 'center'}} defaultCurrent={page} total={dataResp?.length} onChange={onPageChange} showSizeChanger={false}  />
            </Spin>
        </div>
    )
}
