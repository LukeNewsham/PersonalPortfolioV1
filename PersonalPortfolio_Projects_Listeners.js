//shortcut variables for DOM elements ---
const project1 = document.getElementById('project1');
const project2 = document.getElementById('project2');
const project3 = document.getElementById('project3');
const projects = [project1, project2, project3];


const project1Info = document.getElementById('project1Info');
const project2Info = document.getElementById('project2Info');
const project3Info = document.getElementById('project3Info');

let projectDescription = document.getElementById('descriptions');
let projectAnswer = document.getElementById('projectAnswer');

//--- 



//hovering over project boxes ---
projects.forEach(p => {
    p.onmouseover = function(){
        p.style.backgroundColor = 'lightblue'
        p.style.color = 'white'
        p.style.transition = '0.02s'
    };

    p.onmousedown = function(){
        p.style.backgroundColor = 'darkblue'
        p.style.color = 'white'
        p.style.margin = '2.5rem 1.5rem 1.5rem 2.5rem'
        p.style.boxShadow = '0rem 0rem 0rem 0rem'
    }

    p.onmouseup = function(){
        p.style.margin = '2rem'
        p.style.boxShadow = '0.5rem 0.5rem 1rem 0.2rem lightgray';
    }

    p.onmouseleave = function(){
        if (p.style.backgroundColor != 'darkblue' ) {
        p.style.backgroundColor = 'white';
        p.style.color = 'grey'
        }
    }
})
// ---


//clicking on project boxes ---
function projectClick(){

    //function which resets project button
    function resetProjects(p) {
        console.log(p)
        p.style.backgroundColor = 'white';
        p.style.color = 'darkgrey';

        project1Info.style.display = 'none';
        project2Info.style.display = 'none';
        project3Info.style.display = 'none';

        projectDescription.innerHTML = ''
        projectAnswer.innerHTML = ''
    }    
    
    //uses resetProjects function on all project buttons
    projects.forEach(resetProjects);

    //changes the clicked project button styles
    this.style.backgroundColor = 'darkblue';
    this.style.color = 'white';

    //adds and updates DOM elements for clicked project buttons
    if (this == project1) {
        projectDescription.innerHTML = 'The company that you work for suspects that credit card distributors have been mailing out cards that have invalid numbers. In this project, you have the role of a clerk who checks if credit cards are valid. Every other clerk currently checks using pencil and paper, but you’ll be optimizing the verification process using your knowledge of functions and loops to handle multiple credit cards at a time. Unlike the other clerks, you can spend the rest of your time relaxing!';
        project1Info.style.display = 'inline';
        projectAnswer.style.display = 'inline';
    }
    if (this == project2) {
        projectDescription.innerHTML = " ";
        project2Info.style.display = 'inline';
        projectAnswer.style.display = 'inline';

    }
    if (this == project3) {
        projectDescription.innerHTML = " ";
        project3Info.style.display = 'inline';
        projectAnswer.style.display = 'inline';

    }
   
}
// ---



//colour mode function 

function changeColourMode() {
    if (colourMode.style.backgroundColor = 'white') {
        document.body.style.backgroundColor = 'rgb(25, 40, 58)';
        topHeader.style.backgroundColor = 'black';
        navA.style.color = 'white'
    }
}


//triggers projectClicked function on project buttons
project1.onclick = projectClick;
project2.onclick = projectClick;
project3.onclick = projectClick;

colourMode.onclick = changeColourMode;





