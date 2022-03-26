const logoutHandler = async (event) => {
  event.preventDefault();

  const response = await fetch("api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("User is not logged in");
  }
};

document.querySelector("#logout").addEventListener("click", logoutHandler);
