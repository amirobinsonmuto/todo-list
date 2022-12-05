
//function to generate an from to gater project info
const projFormDiv = document.getElementById('proj-form-div');
const projForm = document.createElement('form');
projForm.setAttribute('id', 'projForm')
const submitProjBtn = document.createElement('button');
const cancelProjBtn = document.createElement('button');
//title
const projTitleDiv = document.createElement('div');
projTitleDiv.classList.add('form-group');
const projTitleLabel = document.createElement('label');
const projTitleInput = document.createElement('input');
//description
const projDescrDiv = document.createElement('div');
projDescrDiv.classList.add('form-group');
const projDescrLabel = document.createElement('label');
const projDescrInput = document.createElement('textarea');


function generateProjForm(addProjBtn) {

    addProjBtn.classList.add('hidden');
    
    //title
    projTitleLabel.textContent = 'Project Title';
    projTitleLabel.setAttribute('for', 'projTitle');
    projTitleLabel.classList.add('form-label');
    projTitleInput.setAttribute('type', 'text');
    projTitleInput.setAttribute('class', 'form-control');
    projTitleInput.setAttribute('id', 'projTitle');
    projTitleInput.setAttribute('name', 'projTitle');
    projTitleInput.required = true;

    projTitleDiv.append(projTitleLabel, projTitleInput);
    projForm.appendChild(projTitleDiv);

    //description
    projDescrLabel.textContent = 'Project Description';
    projDescrLabel.setAttribute('for', 'projDescr');
    projDescrLabel.classList.add('form-label');
    projDescrInput.setAttribute('rows', '4');
    projDescrInput.setAttribute('cols', '20');
    projDescrInput.setAttribute('class', 'form-control');
    projDescrInput.setAttribute('id', 'projDescr');

    projDescrDiv.append(projDescrLabel, projDescrInput);
    projForm.appendChild(projDescrDiv);

    projFormDiv.appendChild(projForm);

}
    
//submit button 
function displaySubmitProjBtn() {
    submitProjBtn.setAttribute('value', 'submit');
    submitProjBtn.textContent = 'Submit'    ;
    submitProjBtn.setAttribute('id', 'submitProjBtn');
    submitProjBtn.classList.add('btn');
    submitProjBtn.classList.add('btn-primary');
    submitProjBtn.setAttribute('type', 'submit');
    projForm.appendChild(submitProjBtn);
    projFormDiv.appendChild(projForm);
}

function displayCancelProjBtn() {
    cancelProjBtn.textContent = 'Cancel';
    cancelProjBtn.setAttribute('id', 'cancelProjBtn');
    cancelProjBtn.classList.add('btn');
    cancelProjBtn.classList.add('btn-secondary');
    cancelProjBtn.setAttribute('type', 'button');
    projForm.appendChild(cancelProjBtn);
    projFormDiv.appendChild(projForm);
}



export { projFormDiv, projForm,  submitProjBtn, cancelProjBtn, projTitleInput,
         generateProjForm, displaySubmitProjBtn, displayCancelProjBtn }
