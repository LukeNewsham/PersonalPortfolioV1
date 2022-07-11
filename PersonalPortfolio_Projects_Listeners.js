//shortcut variables for DOM elements ---
const project1 = document.getElementById('project1');
const project2 = document.getElementById('project2');
const project3 = document.getElementById('project3');
const projects = [project1, project2, project3];

const projectsExpanded = document.getElementById('projectsExpanded')


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
        projectAnswer.style.border = '0px solid red';
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

    //removes project1 image if created
    if (projectsExpanded.querySelector('#luhnAlgorithm') !== null) {
        const luhnImage = document.getElementById('luhnAlgorithm');
        projectsExpanded.removeChild(luhnImage);
    }

    //adds and updates DOM elements for clicked project buttons
    if (this == project1) {

        var luhnImage = document.createElement('img');

        if (projectsExpanded.querySelector('#luhnAlgorithm') === null) {        
        projectsExpanded.appendChild(luhnImage);
        luhnImage.setAttribute('src', './Luhn Algorithm.jpg')
        luhnImage.setAttribute('id', 'luhnAlgorithm')
    
        }    
        
        projectDescription.innerHTML = 'Please input a 16 digit number below to validate with Luhn Algorithm:';
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





