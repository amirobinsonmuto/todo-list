import { Project, projArr } from "./proj-class.js";

// function to save the array to localStorage.
const populateStorageProjArr = () => {
  localStorage.clear();
  const jsonProjArr = JSON.stringify(projArr);
  // set Item with key "LsProjArr", and the value is an array of objects
  localStorage.setItem("LsProjArr", jsonProjArr);
  console.log(localStorage.getItem("LsProjArr")); // should return jasonProjArr
};

const getProjArrFromLocalStorage = () => {
  const parsedProjArr = JSON.parse(localStorage.getItem("LsProjArr"));
  parsedProjArr.forEach((obj) => {
    let newObj = new Project(obj.projTitle, obj.projDescr);
    newObj.setItemArr(obj.itemArr);
    projArr.push(newObj);
  });
};

export { populateStorageProjArr, getProjArrFromLocalStorage };
