import axiosClient from "./BaseApiService"

const ENDPOINTS = {
    LOGIN: '/token',
    REFRESH: '/token/refresh',
    REGISTER: '/register'
}

class AuthService {

    async LogIn(credentials) {
        const result = await axiosClient.post(ENDPOINTS.LOGIN,credentials);
        localStorage.setItem("token",result.data.access);
        localStorage.setItem("refresh",result.data.refresh);
        return result.data;
    }

    async Refresh() {
        const refreshToken = { refresh: localStorage.getItem('refresh') } 
        const result = await axiosClient.post(ENDPOINTS.REFRESH,refreshToken);
        localStorage.setItem('token',result.data.access)
    }

    async RegisterNewUser(user) {
        const result = await axiosClient.post(ENDPOINTS.REGISTER,user);
        console.log(result)
    }

    async LogOut() {
        localStorage.setItem('token','');
    }

    GetToken() {
        return localStorage.getItem('token');
    }

}

const authService = new AuthService()
export default authService