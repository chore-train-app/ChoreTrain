// VOLUNTEER FOR TASK
const volunteerHandler = async (event) => {
  event.preventDefault();
  console.log(event.target.id);
  let id = event.target.id.replaceAll(/\D/g, "");
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

//CANCEL TASK
const cancelHandler = async (event) => {
  event.preventDefault();
  console.log(event.target.id);
  let id = event.target.id.replaceAll(/\D/g, "");

  const response = await fetch("/api/tasks/VolunteerCancel/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    alert("Canceled!");
    document.location.replace("/");
  } else {
    alert("Unable to cancel this task.");
  }
};

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

//OPEN EDIT TASK FORM
const openTaskEditor = (event) => {
  event.preventDefault();
  event.target.parentElement.parentElement.innerHTML = `
  <form class="update-task-form">
  <div class="grid-x grid-padding-x">
          <div class="large-12 cell">
              <label>Title of Task</label>
              <input class="update-task-name" type="text" placeholder="${event.target.name}" />
          </div>
      </div>
      <div class="grid-x grid-padding-x">
          <div class="large-12 cell">
              <label>Start Date and Time</label>
              <input class="update-start-time" type="text" name="datetime" id="datetime" placeholder="${event.target.dataset.start}" />
          </div>
      </div>
      <div class="grid-x grid-padding-x">
          <div class="large-12 cell">
              <label>End Date and Time</label>
              <input class="update-end-time" type="text" name="datetime" id="datetime" placeholder="${event.target.dataset.end}" />
          </div>
      </div>
      <div class="grid-x grid-padding-x">
          <div class="large-12 cell">
              <label>Description
                  <textarea class="update-task-description" placeholder="${event.target.dataset.desc}"></textarea>
              </label>
          </div>
      </div> 
      <div class="grid-x grid-padding-x">
  <div class="large-12 cell">
      <button id="update_${event.target.id}" type="submit" class="hollow button secondary" href="#">Update Task</button>
  </div>
</div>
</form>
`;
  const updateTaskForm = document.querySelector(".update-task-form");
  updateTaskForm.addEventListener("submit", updateFormHandler);
};

// SUBMIT UPDATE TASK FORM
const updateFormHandler = async (event) => {
  event.preventDefault();

  let id = event.target.id.replaceAll(/\D/g, "");

  const name = document.querySelector(".update-task-name").value.trim();
  const startTime = document.querySelector(".update-start-time").value.trim();
  const endTime = document.querySelector(".update-end-time").value.trim();
  const description = document.querySelector(".update-task-description").value.trim();

  if (name || startTime || endTime || description || id) {
    const response = await fetch(`/api/tasks`, {
      method: "PUT",
      body: JSON.stringify({id, name, startTime, endTime, description }),
      headers: {
        "Content-Type": "application/json",
      },
      
    });
    if (response.ok) {
      document.location.replace(`/`);
    } else {
      alert("Failed to update task.");
    }
  }
};

//DELETE TASK
const delButtonHandler = async (event) => {
  event.preventDefault();
  let id = event.target.id.replaceAll(/\D/g, "");

  const response = await fetch(`/api/tasks/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to delete task.");
  }
};

document.querySelectorAll(".edit-task").forEach((button) => {
  button.addEventListener("click", openTaskEditor);
});

document.querySelectorAll(".delete-task").forEach((button) => {
  button.addEventListener("click", delButtonHandler);
});

document.querySelectorAll(".create-task-form").forEach((button) => {
  button.addEventListener("submit", newTaskFormHandler);
});

document.querySelectorAll(".volunteer-task").forEach((button) => {
  button.addEventListener("click", volunteerHandler);
});
document.querySelectorAll(".cancel-task").forEach((button) => {
  button.addEventListener("click", cancelHandler);
});
