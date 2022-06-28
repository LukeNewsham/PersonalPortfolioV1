
let checkButton = document.getElementById('project1Button');
let numberBoxString = document.getElementById('numberBoxField');

//numberBoxString.value.split('').map(Number);


function validateCred() {  

    let array = [];

    let numberBoxNumbers = `${numberBoxString.value}`.split('').map(Number);
    
    numberBoxNumbers.forEach(num => {
      array.push(num)
    })

        console.log(array.length)

    //new array to be added together to 100 at the end   
    let total = 0;

    //checks if array is correct length
    if (array.length === 16) {  
  
      //outputs new element depending on place into newArray
      for (i = 15; i >= 0; i--) {
        let newElement = 0      
        if (i % 2 === 0) {
             newElement = array[i]*2;
            if (newElement >= 9) {
              newElement -= 9;            
            }
        } else {
          newElement = array[i]
        }      
        //adds new element to total          
        total += newElement;  
      } 

      console.log(total)
    let modulo = total%10;
    
    if (modulo == 0) {
      document.getElementById('projectAnswer').innerHTML = 'VERIFIED: Modulo is 0'
    } else {
      document.getElementById('projectAnswer').innerHTML = `NOT VERIFIED: modulo is ${modulo}`;
    }
  
    }  else {
      document.getElementById('projectAnswer').innerHTML = 'Please input 16 digits'
    }
    
    
    

    
}
  

checkButton.onclick = validateCred;


/*
  
  function idInvalidCardCompanies(cards) {
    let companies = [];
    for (z = 0; z < cards.length; z++) {
      if (cards[z][0] == 3) {
        companies.push('Amex (American Express)')
      } if (cards[z][0] == 4) {
        companies.push('Visa')
      } if (cards[z][0] == 5) {
        companies.push('Mastercard')
      } if (cards[z][0] == 6) {
        companies.push('Discover')
      }    
    }
  
    let uniqueCompanies = [];
    companies.forEach(company => {
      if (!uniqueCompanies.includes(company)) {
        uniqueCompanies.push(company)
      }
    })
  
    return uniqueCompanies;
  }
  
  
  
  
  function findInvalidCards(nestedArray) {
    let invalidCards = []
    for (j = nestedArray.length-1; j >= 0; j--) { 
        
      if (validateCred(nestedArray[j]) == 0) {
        
        //console.log(`${nestedArray[j]} is a valid credit card because module is ${validateCred(nestedArray[j])}`)
      } else {
        invalidCards.push(nestedArray[j])
        console.log(`${nestedArray[j]} is not a valid credit card because module is ${validateCred(nestedArray[j])}`)
      }
    }
    return idInvalidCardCompanies(invalidCards)
  }
  
 */
  
  //findInvalidCards(batch)

  

  
  
  
  