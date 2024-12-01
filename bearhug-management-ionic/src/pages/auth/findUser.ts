interface Params {
  message: string;
  status: boolean;
}

export async function findUserByUsernameAndPassword(
  username: string,
  password: string
) {
  try {
    const response = await fetch("http://localhost:8080/auth/log-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error as Error);
  }
}

export async function registerUser(username: string, password: string) {
  try {
    const response = await fetch("http://localhost:8080/auth/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error as Error);
  }
}
