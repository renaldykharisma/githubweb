import Axios from 'axios';
import React from 'react';
import { tokenGit } from '../env';

export default class BaseService extends React.Component{
    async get(urls){
        let result = null;
        await Axios.get(encodeURI(urls), {headers: {"Authorization": `token ${tokenGit}`}})
        .then(response =>{
            let resp = response;
            result = resp;
        }).catch(err=>{
            result = {error: err}
        });
        return result;
    }
}