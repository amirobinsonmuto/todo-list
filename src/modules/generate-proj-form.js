// function to generate an from to gater project info
const projFormDiv = document.getElementById("proj-form-div");
const projForm = document.createElement("form");
projForm.setAttribute("id", "projForm");
const submitProjBtn = document.createElement("button");
const cancelProjBtn = document.createElement("button");
// title
const projTitleDiv = document.createElement("div");
projTitleDiv.classList.add("form-group");
const projTitleLabel = document.createElement("label");
const projTitleInput = document.createElement("input");

const generateProjForm = (addProjBtn) => {
  addProjBtn.classList.add("hidden");

  // title
  projTitleLabel.textContent = "Project Title";
  projTitleLabel.setAttribute("for", "projTitle");
  projTitleLabel.classList.add("form-label");
  projTitleInput.setAttribute("type", "text");
  projTitleInput.setAttribute("class", "form-control");
  projTitleInput.setAttribute("id", "projTitle");
  projTitleInput.setAttribute("name", "projTitle");
  projTitleInput.required = true;

  projTitleDiv.append(projTitleLabel, projTitleInput);
  projForm.appendChild(projTitleDiv);
  projFormDiv.appendChild(projForm);
};

// submit button
const displaySubmitProjBtn = () => {
  submitProjBtn.setAttribute("value", "submit");
  submitProjBtn.textContent = "Submit";
  submitProjBtn.setAttribute("id", "submitProjBtn");
  submitProjBtn.classList.add("btn");
  submitProjBtn.classList.add("btn-primary");
  submitProjBtn.setAttribute("type", "submit");
  projForm.appendChild(submitProjBtn);
  projFormDiv.appendChild(projForm);
};

const displayCancelProjBtn = () => {
  cancelProjBtn.textContent = "Cancel";
  cancelProjBtn.setAttribute("id", "cancelProjBtn");
  cancelProjBtn.classList.add("btn");
  cancelProjBtn.classList.add("btn-secondary");
  cancelProjBtn.setAttribute("type", "button");
  projForm.appendChild(cancelProjBtn);
  projFormDiv.appendChild(projForm);
};

export {
  projFormDiv,
  projForm,
  submitProjBtn,
  cancelProjBtn,
  projTitleInput,
  generateProjForm,
  displaySubmitProjBtn,
  displayCancelProjBtn,
};
