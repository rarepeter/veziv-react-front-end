import { makeAutoObservable } from "mobx";
import UserDto from "../interfaces/userDto.interface";
import AuthService from "../services/AuthService";
import { AuthCredentials } from "../interfaces";

class AuthStore {
  accessToken: string | null = null;
  isAuth: boolean = false;

  constructor() {
    makeAutoObservable(this);
    this.accessToken = localStorage.getItem("authToken");
    if (localStorage.getItem("authToken")) {
      this.isAuth = true;
    }
  }

  setAccessToken(accessToken: string | null) {
    this.accessToken = accessToken;
  }

  setIsAuth(bool: boolean) {
    this.isAuth = bool;
  }

  async login(credentials: AuthCredentials) {
    const response = await AuthService.login(credentials);
    if (response.statusCode >= 400) {
      throw { message: response.message, solution: response.solution };
    } else {
      localStorage.setItem("authToken", response.access_token);
      this.setAccessToken(response.access_token);
      this.setIsAuth(true);
    }
  }

  async logout() {
    try {
      this.setIsAuth(false);
      this.setAccessToken(null);
      localStorage.removeItem("authToken");
    } catch (err) {
      console.log(err);
    }
  }
}

export default new AuthStore();
