import BaseService from "../services/base-service";
import axiosInstance from "../services/base-connection";

export default class Services extends BaseService{

    async getRepoList(type, names, per_page, page){
        let urlUser = 'users';
        let urlOrg = 'orgs';
        let pageQuery = `per_page=${per_page}&page=${page}`;
        let query = `${axiosInstance.defaults.baseURL}/${type === 0 ? urlUser : urlOrg}/${names ? names : ''}/repos?${pageQuery}`;
        return await this.get(query);
    }

    async getUserInformation(name){
        return await this.get(`${axiosInstance.defaults.baseURL}/users/${name}`);
    }

    async getLanguages(url){
        return await this.get(url);
    }

}
