//event listener for volunteering for a task - trigger taskTaker & Status = true
// event listener for deleting a task X
// event listener for updating  a task X 
// event listener for cancelling a task: removing status to false, and remove "taskTaker" user variable from the user




// UPDATE TASK
const updateFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#task-name').value.trim();
    const startTime = document.querySelector('start-time').value.trim();
    const endTime = document.querySelector('end-time').value.trim();
    const description = document.querySelector('task-description').value.trim();

    if(name || startTime || endTime || description) {
        const response = await fetch(`/api/tasks`, {
            method: 'PUT',
            body: JSON.stringify({ name, startTime, endTime, description}),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            document.location.update('/tasks/${id}');
        } else {
            alert('Failed to update task.')
        }
    }
};

//DELETE TASK
const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('task-id')) {
        const id = event.target.getAttribute('task-id');
        
        const response = await fetch(`/api/tasks/${id}`, {
            method: 'DELETE',
        });
        
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert ('Failed to delete task.');
        }
    }
};

document
    .querySelector('.update-task')
    .addEventListener('submit', updateHandler)

document
  .querySelector('.delete-task')
  .addEventListener('submit', delButtonHandler);