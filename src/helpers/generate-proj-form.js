
//function to generate an from to gater project info
const projFormDiv = document.getElementById('projFormDiv');
const form = document.createElement('div');
form.setAttribute('id', 'form')
const submitProjBtn = document.createElement('button');

function generateProjForm() {

    //title
    const projTitleDiv = document.createElement('div');
    projTitleDiv.classList.add('form-group');
    const projTitleLabel = document.createElement('label');
    const projTitleInput = document.createElement('input');

    projTitleLabel.textContent = 'proj Title';
    projTitleLabel.setAttribute('for', 'projTitle');

    projTitleInput.setAttribute('type', 'text');
    projTitleInput.setAttribute('class', 'form-control');
    projTitleInput.setAttribute('id', 'projTitle');

    projTitleDiv.append(projTitleLabel, projTitleInput);
    form.appendChild(projTitleDiv);

    //description
    const projDescrDiv = document.createElement('div');
    projDescrDiv.classList.add('form-group');
    const projDescrLabel = document.createElement('label');
    const projDescrInput = document.createElement('input');

    projDescrLabel.textContent = 'proj Descr';
    projDescrLabel.setAttribute('for', 'projDescr');

    projDescrInput.setAttribute('type', 'text');
    projDescrInput.setAttribute('class', 'form-control');
    projDescrInput.setAttribute('id', 'projDescr');

    projDescrDiv.append(projDescrLabel, projDescrInput);
    form.appendChild(projDescrDiv);

}
    
//submit button 
function displaySubmitProjBtn() {
    submitProjBtn.textContent = 'submit';
    submitProjBtn.setAttribute('id', 'submitProjBtn');
    submitProjBtn.classList.add('btn');
    submitProjBtn.classList.add('btn-primary');
    form.appendChild(submitProjBtn);
    projFormDiv.appendChild(form);
}

export { projFormDiv, form,  submitProjBtn, generateProjForm, displaySubmitProjBtn }
