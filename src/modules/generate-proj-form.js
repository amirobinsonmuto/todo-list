
//function to generate an from to gater project info
const projFormDiv = document.getElementById('proj-form-div');
const projForm = document.createElement('div');
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
const projDescrInput = document.createElement('input');


function generateProjForm() {

    //title
    projTitleLabel.textContent = 'proj Title';
    projTitleLabel.setAttribute('for', 'projTitle');

    projTitleInput.setAttribute('type', 'text');
    projTitleInput.setAttribute('class', 'form-control');
    projTitleInput.setAttribute('id', 'projTitle');

    projTitleDiv.append(projTitleLabel, projTitleInput);
    projForm.appendChild(projTitleDiv);

    //description
    projDescrLabel.textContent = 'proj Descr';
    projDescrLabel.setAttribute('for', 'projDescr');

    projDescrInput.setAttribute('type', 'text');
    projDescrInput.setAttribute('class', 'form-control');
    projDescrInput.setAttribute('id', 'projDescr');

    projDescrDiv.append(projDescrLabel, projDescrInput);
    projForm.appendChild(projDescrDiv);

    projFormDiv.appendChild(projForm);

}
    
//submit button 
function displaySubmitProjBtn() {
    submitProjBtn.textContent = 'submit';
    submitProjBtn.setAttribute('id', 'submitProjBtn');
    submitProjBtn.classList.add('btn');
    submitProjBtn.classList.add('btn-primary');
    submitProjBtn.classList.add('mt-3');
    submitProjBtn.classList.add('me-2');
    projForm.appendChild(submitProjBtn);
    projFormDiv.appendChild(projForm);
}

function displayCancelProjBtn() {
    cancelProjBtn.textContent = 'cancel';
    cancelProjBtn.setAttribute('id', 'cancelProjBtn');
    cancelProjBtn.classList.add('btn');
    cancelProjBtn.classList.add('btn-secondary');
    cancelProjBtn.classList.add('mt-3');
    projForm.appendChild(cancelProjBtn);
    projFormDiv.appendChild(projForm);
}



export { projFormDiv, projForm,  submitProjBtn, cancelProjBtn,
         generateProjForm, displaySubmitProjBtn, displayCancelProjBtn }
