async function login(user: { username: string; password: string }) {
  return fetch("https://reqres.in/api/login", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => (data.token ? data.token : data.error));
}

async function register(user: { username: string; password: string }) {
  return fetch("https://reqres.in/api/register", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => (data.token ? data.token : data.error));
}

export { login, register };
