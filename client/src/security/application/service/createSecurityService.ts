import User from "../../domain/model/User";
import baseAuthService from "./baseAuthService";

export default {
    register(user: User) {
        return baseAuthService.post('/register', user);
    }
}