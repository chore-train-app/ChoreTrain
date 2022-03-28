Handlebars.registerPartial("createTask", Handlebars.templates["createTask"]);
Handlebars.registerPartial("editTask", Handlebars.templates["editTask"]);
Handlebars.registerPartial("viewTask", Handlebars.templates["taskDetails"]);

// const createTask = false;
// const editTask = false;
// const viewTask = false;

// function modalContent(context, options) {
//   if (createTask == true) {
//     return "createTask";
//   } else if (viewTask == true) {
//     return "viewTask";
//   } else if (editTask == true) {
//     return "editTask";
//   } else {
//     alert("Something went wrong");
//   }
// }

// Handlebars.registerHelper("modalContent", modalContent());

// document.querySelector(".new-task-button").addEventListener("click", () => {
//   createTask = true;
//   console.log(createTask);
// });

