import axios from 'axios'
window.axios = axios;
axios.defaults.baseURL = process.env.VUE_APP_DATA_SERVICE_URL+'/api/';
axios.defaults.headers.common['Content-Type'] = 'application/json';
let sessionKey = sessionStorage.getItem('sessionKey');
if(sessionKey) axios.defaults.headers.common.Authorization = 'Bearer ' + sessionKey;