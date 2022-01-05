import AxiosService from "./AxioService";
const headerConfig = {
    headers: { 
        "x-access-token": localStorage.getItem("token")
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
    AddToCart(url) {
        console.log(headerConfig)
        return axiosService.Post(url,{},headerConfig);
    }
    GetCartItems(url) {
        console.log(headerConfig)
        return axiosService.Get(url, headerConfig);
    }
    

}

export default UserService;