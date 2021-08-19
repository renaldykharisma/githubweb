import { Avatar, Button } from 'antd';
import React, { useState, useEffect } from 'react';
import './profile.css';
import { GithubOutlined } from '@ant-design/icons';

export default function Profile(profileData){
    
    const [dataProfileState, setProfileData] = useState({});

    function setProfilesData(data){
        setProfileData(dataProfileState => dataProfileState = data);
    }

    useEffect(() => {
        const resp = profileData.profileData;
        setProfilesData(resp);
    }, [profileData]);

    return(
        <div className="layout-profile">
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
            <Button type="primary" shape="round" icon={<GithubOutlined />} href={'https://github.com/renaldykharisma'}>
                Visit Profile
            </Button>
        </div>
    )
}