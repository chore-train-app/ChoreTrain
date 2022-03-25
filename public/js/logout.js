const logoutHandler = async (event) => {
  event.preventDefault();

  const response = await fetch("api/users/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Unable to log in");
  }
};

document.querySelector(".login-form").addEventListener("submit", loginHandler);
