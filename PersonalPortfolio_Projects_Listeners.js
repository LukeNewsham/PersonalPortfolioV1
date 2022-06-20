


const project1 = document.getElementById('project1');
const project2 = document.getElementById('project2');
const project3 = document.getElementById('project3');
const project4 = document.getElementById('project4');

let projectDescription = document.getElementById('descriptions');



function addDescription(){
    if (this == project1) {
        projectDescription.innerHTML = 'Context: The company that you work for suspects that credit card distributors have been mailing out cards that have invalid numbers. In this project, you have the role of a clerk who checks if credit cards are valid. Every other clerk currently checks using pencil and paper, but you’ll be optimizing the verification process using your knowledge of functions and loops to handle multiple credit cards at a time. Unlike the other clerks, you can spend the rest of your time relaxing!'
    }
}


project1.onclick = addDescription;
project2.onclick = addDescription;
project3.onclick = addDescription;
project4.onclick = addDescription;

