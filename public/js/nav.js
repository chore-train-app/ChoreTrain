const logoutHandler = async (event) => {
  event.preventDefault();

  const response = await fetch("../../api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("User is not logged in");
  }
};

const getTasks = async (event) => {
  event.preventDefault();
  document.location.replace(`/api/tasks/zip_code`);
};
if (document.querySelector("#logout")) {
  document.querySelector("#logout").addEventListener("click", logoutHandler);
}
if (document.querySelector("#tasks")) {
  document.querySelector("#tasks").addEventListener("click", getTasks);
}
