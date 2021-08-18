import Axios from 'axios';
import React from 'react';

export default class BaseService extends React.Component{
    async get(urls){
        let result = null;

        await Axios.get(encodeURI(urls))
        .then(response =>{
            let resp = response;
            result = resp;
        }).catch(err=>{
            result = {error: err}
        });
        return result;
    }
}