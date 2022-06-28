let submitButton = document.getElementById('project2Button');
let projectAnswerElement = document.getElementById('projectAnswer');

function mBCalculation() {

    console.log('worked');
    sex = document.getElementById("sexField").value;
	age = document.getElementById("ageField").value;
	weight = document.getElementById("weightField").value;
	height = document.getElementById("heightField").value;

	if (sex != "" && age > 0 && weight > 0 && height > 0) {
		
			
		console.log(sex, age, weight, height);
		//Coefficents which change depending on sex
		let sexCoefficient = [88.362, 447.593];
		let weightCoefficient = [13.397, 9.247];
		let heightCoefficient = [4.799, 3.098];
		let ageCoefficient = [5.677, 4.330];
		

		//Variable x is chosen by sex input
		if (sex == "Male") {
			var x = 0
		} else {
			var x = 1
		};
			
        console.log(x)
		//Calculation
		let baseMetabolicRate = sexCoefficient[x] + (weightCoefficient[x]*weight) + (heightCoefficient[x]*height) - (ageCoefficient[x]*age);
		
        console.log(baseMetabolicRate);
		//Displays answer in HTML 
		projectAnswerElement.innerHTML = "Your Basic Metabolic Rate (BMR) is  " + Math.round(baseMetabolicRate) + ".";
        
	} else {
        projectAnswerElement.innerHTML = "Please fill in all fields";
    }
}



submitButton.onclick = mBCalculation;