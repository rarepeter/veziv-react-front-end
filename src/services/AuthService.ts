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

    if (response.ok) {
      const responseBody = await response.json();

      return {
        statusCode: response.status,
        ...responseBody,
      };
    }

    return await response.json();
  }
}

export default AuthService;
