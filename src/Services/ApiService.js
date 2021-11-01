import axios from 'axios';
import {TokenService} from './TokenService';
import EventBus from './Event';
import toast from './ToastService'

// const BASEURL;
axios.interceptors.request.use(config=>{
    EventBus.$emit('loading',true);
    return config;
});

axios.interceptors.response.use(
    function(response){
        EventBus.$emit('loading',false);
        return response;
    },
    function (error){
        EventBus.$emit('loading',false);
        if (error.config.hasOwnProperty('errorHandle') && error.config.errorHandle === false) {
            return Promise.reject(error);
        }

        if (error.response) {
            let r = error.response.data.data;
       
                toast.error(JSON.stringify(r));
            
           
        }
    }
);
export const ApiSetUp = {
    init(baseURL) {
        axios.defaults.baseURL = baseURL;

        // axios.defaults.withCredentials = true;

    },

    setHeader() {
        // console.log("cokkie:",document.cookie)
        // axios.defaults.headers.common.Authorization =  `Bearer ${TokenService.getToken()}`
        // axios.defaults.headers.common['X-CSRF-TOKEN'] = document.cookie
        axios.defaults.headers.common["Authorization"] = `Bearer ${TokenService.getToken()}`
    },
    addFileUploadHeader(){
        axios.headers.common['Content-Type'] = 'multipart/form-data';
    },
    removeFileUploadHeader(){
        axios.defaults.headers.common['Content-Type'] = {}
    },

    removeHeader() {
        axios.defaults.headers.common = {}
    },
    get(resource) {
        return axios.get(resource)
    },

    post(resource, data) {
        return axios.post(resource, data)
    },

    put(resource, data) {
        return axios.put(resource, data)
    },

    delete(resource) {
        return axios.delete(resource)
    },
    customRequest(data) {
        return axios(data)
    }
}
export class Api{
    constructor(baseUrl){
        if (TokenService.getToken()) {
            ApiSetUp.setHeader();
        }
        this.baseUrl = baseUrl
    }
    async sendrequest(http_method,url, data,){
        return await axios.request({
            method:http_method,
            url: this.baseUrl+url,
            data:data,
        });
    }
  
    async register(formdata){
        return await this.sendrequest("post","auth/register", formdata);
    }
    async login(formdata){
        return await this.sendrequest("post","login",formdata);
    }
    async forgotPassword(formData){
        return this.sendrequest("post",'auth/forgot-password',formData);
    }
    async changePassowrdByForgot(formdata){
        return this.sendrequest("post",'auth/change-forgot-password-via-code',formdata);
    }
    
    async getProfileInfo(){
        return this.sendrequest("get",'auth/profile');
    }
    async verifyUserEmail(formdata){
        return this.sendrequest("post",'agentapp/verify-email',formdata);
    }
    async resendCode(){
        return this.sendrequest("get",'agentapp/resend-code');
    }
    async updateProfile(form){
        return this.sendrequest("post",'agentapp/update-profile',form);
    }
    async userProperties(slug){
        return this.sendrequest("post",'agentapp/userProperties/'+slug);
    }
    async all_saved_properties(){
        return this.sendrequest("get","agentapp/my-saved-properties");
    }
    async add_saved_property(form){

        return this.sendrequest("get","agentapp/add-saved-properties/"+form);
    }




}