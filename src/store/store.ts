import { makeAutoObservable } from "mobx";
import UserDto from "../interfaces/userDto.interface";

class AuthStore {
  accessToken: string | null = null;
  user: UserDto | null = null;
  isAuth: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
  }

  setUser(user: UserDto) {
    this.user = user;
  }

  setIsAuth(bool: boolean) {
    this.isAuth = bool;
  }
}

export default new AuthStore();
