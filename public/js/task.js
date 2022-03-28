//event listener for volunteering for a task - trigger taskTaker & Status = true
// event listener for deleting a task X
// event listener for updating  a task X
// event listener for cancelling a task: removing status to false, and remove "taskTaker" user variable from the user

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
    const id = event.target.getAttribute("task-id");

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
//     .addEventListener('submit', updateHandler)

// document
//   .querySelector('.delete-task')
//   .addEventListener('submit', delButtonHandler);

document
  .querySelector(".create-task-form")
  .addEventListener("submit", newTaskFormHandler);
