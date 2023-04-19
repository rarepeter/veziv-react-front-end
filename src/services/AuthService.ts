import { SERVER_URL } from "../data/urls";
import { AuthCredentials } from "../interfaces";

const serverAuthUrl = `${SERVER_URL}/auth/sign-in`;

class AuthService {
  static async login(credentials: AuthCredentials) {
    const response = await fetch(serverAuthUrl, {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status >= 400) {
      return await response.json();
    }

    const responseBody = await response.json();

    return {
      statusCode: response.status,
      ...responseBody,
    };
  }

  static async logOut() {
    localStorage.removeItem("authToken");
  }
}

export default AuthService;
