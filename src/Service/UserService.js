import AxiosService from "./AxioService";
const headerConfig = {
    headers: { 
        Authorization: localStorage.getItem("token")
     }
}

const axiosService = new AxiosService();

class UserService {

    Login(url, data) {
        return axiosService.Post(url, data);
    }
    Signup(url, data) {
        return axiosService.Post(url, data);
    }
    GetBooks(url) {
        console.log(headerConfig)
        return axiosService.Get(url, headerConfig);
    }
    

}

export default UserService;