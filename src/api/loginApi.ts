async function login(user: { username: string; password: string }) {
  await fetch("https://reqres.in/api/login", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => alert(JSON.stringify(json)));
}

export default login;
