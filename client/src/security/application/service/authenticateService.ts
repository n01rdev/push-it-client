import User from "../../domain/model/User";
import baseAuthService from "./baseAuthService";

export default {
    login(user: User) {
        return baseAuthService.post('/login', user);
    }
}