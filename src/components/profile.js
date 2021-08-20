import { Avatar, Button, Space } from 'antd';
import React, { useState, useEffect } from 'react';
import { GithubOutlined } from '@ant-design/icons';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import './profile.css';

export default function Profile(profileData){
    const screens = new useBreakpoint();
    const [dataProfileState, setProfileData] = useState({});

    function setProfilesData(data){
        setProfileData(dataProfileState => dataProfileState = data);
    }

    useEffect(() => {
        const resp = profileData.profileData;
        setProfilesData(resp);
    }, [profileData]);

    return(
        <div breakpoint="xs">
            {
                !screens.xs ? 
                <Space className="layout-profile" size={40} align="center">
                    <div className="avatar-profile">
                        <Avatar
                            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                            src={dataProfileState.avatar_url}
                        />&nbsp;&nbsp;
                        <div style={{marginTop: '8px'}}>
                            <p>{dataProfileState.login}</p>
                            <p>{dataProfileState.bio}</p>
                        </div> 
                    </div>
                    <span>Location: {dataProfileState.location ? dataProfileState.location : '-'}</span>
                    <span>Work In: {dataProfileState.company ? dataProfileState.company : '-'}</span>
                    <span>{dataProfileState.followers}&nbsp;Followers</span>
                    <span>{dataProfileState.following}&nbsp;Following</span>
                    <span>{dataProfileState.public_repos}&nbsp;Repositories</span>
                    <Button type="primary" shape="round" icon={<GithubOutlined />} onClick={()=>{window.open(`https://github.com/${dataProfileState.login}`, "_blank")}}>
                        Visit Profile
                    </Button>
                </Space> 
                :
                <div>

                <div className="layout-profile">
                    <Avatar
                        className="avatar-mobile"
                        size={{ xs: 80, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                        src={dataProfileState.avatar_url}
                    />  
                </div>
                <table className="table-bio">
                    <tbody>
                        <tr>
                            <td>
                                Name
                            </td>
                            <td style={{paddingLeft: '30px'}}>
                                :
                            </td>
                            <td style={{paddingLeft: '3px'}}>
                                {dataProfileState.login}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Bio
                            </td>
                            <td style={{paddingLeft: '30px'}}>
                                :
                            </td>
                            <td style={{paddingLeft: '3px'}}>
                                {dataProfileState.bio}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Location
                            </td>
                            <td style={{paddingLeft: '30px'}}>
                                :
                            </td>
                            <td style={{paddingLeft: '3px'}}>
                                {dataProfileState.location ? dataProfileState.location : '-'}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Work In
                            </td>
                            <td style={{paddingLeft: '30px'}}>
                                :
                            </td>
                            <td style={{paddingLeft: '3px'}}>
                                {dataProfileState.company ? dataProfileState.company : '-'}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Followers
                            </td>
                            <td style={{paddingLeft: '30px'}}>
                                :
                            </td>
                            <td style={{paddingLeft: '3px'}}>
                                {dataProfileState.followers}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Following
                            </td>
                            <td style={{paddingLeft: '30px'}}>
                                :
                            </td>
                            <td style={{paddingLeft: '3px'}}>
                                {dataProfileState.following}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Repositories
                            </td>
                            <td style={{paddingLeft: '30px'}}>
                                :
                            </td>
                            <td style={{paddingLeft: '3px'}}>
                                {dataProfileState.public_repos}
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            }
            
        </div>
        
    )
}