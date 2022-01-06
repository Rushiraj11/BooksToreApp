import axios from "axios";

class AxiosService {
    Post(url, data,headers=false){
        return axios.post(url, data,headers);
    }
    Get(url,headers=false){
        return axios.get(url,headers)
    }
    Put(url,data,headers=false){
        return axios.put(url, data,headers);
    }
    

}

export default AxiosService;