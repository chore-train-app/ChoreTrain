// VOLUNTEER FOR TASK
const volunteerHandler = async (event) => {
  event.preventDefault();
  console.log(event.target.id);
  const response = await fetch("/api/tasks/volunteer/" + event.target.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    alert("Volunteered!");
    document.location.replace("/");
  } else {
    alert("Unable to volunteer.");
  }
};

document.querySelectorAll('.volunteer-task').forEach(button => {
  button.addEventListener('click', volunteerHandler);
});
