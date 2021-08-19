import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import moment from 'moment';
import React, { useState, useEffect } from 'react';
import Services from './services-helper';

export default function CardLayout(dataRepos){

    const service = new Services();
    const screens = new useBreakpoint();
    const [itemRepos, setdataRepo] = useState({});
    const [lang, setDataLang] = useState({});

    async function setDataRepository(data){
        const resp = await service.getLanguages(data.languages_url);
        setdataRepo(itemRepos => itemRepos = data);
        setDataLang(lang => lang = resp.data);
    }

    useEffect(() => {
        const resp = dataRepos.dataRepos;
        setDataRepository(resp)
    }, [dataRepos])
    
    return(
        <div breakpoint="xs">
            <table>
                <tbody>
                    {
                        !screens.xs ?
                        <tr>
                            <td>Repo Name</td>
                            <td style={{paddingLeft: '8px'}}>:</td>
                            <td style={{paddingLeft: '2px'}}>{itemRepos.full_name ? 
                            itemRepos.full_name.slice(0, 37).concat(itemRepos.full_name.length > 38 ? '...' : '') : '-'}</td>
                        </tr> : <></>
                    }
                    <tr>
                        <td>Owner</td>
                        <td style={{paddingLeft: '8px'}}>:</td>
                        <td style={{paddingLeft: '2px'}}>{itemRepos.owner ? itemRepos.owner.login : '-'}</td>
                    </tr>
                    <tr>
                        <td>Languages</td>
                        <td style={{paddingLeft: '8px'}}>:</td>
                        <td style={{paddingLeft: '2px'}}>{lang ? Object.keys(lang).map(function(key){
                            return key
                        }).join(', ') : '-'}</td>
                    </tr>
                    <tr>
                        <td>Stargazers</td>
                        <td style={{paddingLeft: '8px'}}>:</td>
                        <td style={{paddingLeft: '2px'}}>{itemRepos.stargazers_count}</td>
                    </tr>
                    <tr>
                        <td>Fork Count</td>
                        <td style={{paddingLeft: '8px'}}>:</td>
                        <td style={{paddingLeft: '2px'}}>{itemRepos.forks_count}</td>
                    </tr>
                    <tr>
                        <td>Updated At</td>
                        <td style={{paddingLeft: '8px'}}>:</td>
                        <td style={{paddingLeft: '2px'}}>{moment(itemRepos.updated_at).format(!screens.xs ? 'LLL' : 'LL')}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}