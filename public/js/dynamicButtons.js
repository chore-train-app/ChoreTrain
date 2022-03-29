// VOLUNTEER FOR TASK
const volunteerHandler = async (event) => {
  event.preventDefault();
  console.log(event.target.id);
  let id = event.target.id.replaceAll(/\D/g, '');
  const response = await fetch("/api/tasks/volunteer/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    alert("Volunteered!");
    document.location.replace("../../api/tasks/zip_code");
  } else {
    alert("Unable to volunteer.");
  }
};

document.querySelectorAll('.volunteer-task').forEach(button => {
  button.addEventListener('click', volunteerHandler);
});

//CANCEL TASK
const cancelHandler = async (event) => {
  event.preventDefault();
  console.log(event.target.id);
  let id = event.target.id.replaceAll(/\D/g, '');
    
  const response = await fetch(
    "/api/tasks/VolunteerCancel/" + id,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (response.ok) {
    alert("Canceled!");
    document.location.replace("/");
  } else {
    alert("Unable to cancel this task.");
  }
};
document
  .querySelector(".cancel-task")
  .addEventListener("submit", cancelHandler);

  // CREATE TASK
const newTaskFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector(".new-task-name").value.trim();
  const startTime = document.querySelector(".new-task-start").value.trim();
  const endTime = document.querySelector(".new-task-end").value.trim();
  const description = document.querySelector(".new-task-desc").value.trim();

  if (name && startTime && endTime && description) {
    const response = await fetch("api/tasks", {
      method: "POST",
      body: JSON.stringify({ name, startTime, endTime, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      console.log(response);
      document.location.replace("/");
    } else {
      alert("Failed to post task.");
    }
  }
};

const openTaskEditor = (event) => {
  
}



// UPDATE TASK
const updateFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#task-name").value.trim();
  const startTime = document.querySelector("start-time").value.trim();
  const endTime = document.querySelector("end-time").value.trim();
  const description = document.querySelector("task-description").value.trim();

  if (name || startTime || endTime || description) {
    const response = await fetch(`/api/tasks`, {
      method: "PUT",
      body: JSON.stringify({ name, startTime, endTime, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.update(`/api/tasks/${id}`);
    } else {
      alert("Failed to update task.");
    }
  }
};

//DELETE TASK
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("task-id")) {
    let id = event.target.id.replaceAll(/\D/g, '');

    const response = await fetch(`/api/tasks/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete task.");
    }
  }
};




// document
//     .querySelector('.update-task')
//     .addEventListener('submit', updateFormHandler)

document
  .querySelector('.delete-task')
  .addEventListener('submit', delButtonHandler);

document
  .querySelector(".create-task-form")
  .addEventListener("submit", newTaskFormHandler);