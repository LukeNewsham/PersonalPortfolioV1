
checkButton = document.getElementById('project1Button')


function validateCred() {



    let stringArray = [];
    stringArray.push(document.getElementById('creditCardNumber1').value)
    stringArray.push(document.getElementById('creditCardNumber2').value)
    stringArray.push(document.getElementById('creditCardNumber3').value)
    stringArray.push(document.getElementById('creditCardNumber4').value)
    stringArray.push(document.getElementById('creditCardNumber5').value)
    stringArray.push(document.getElementById('creditCardNumber6').value)
    stringArray.push(document.getElementById('creditCardNumber7').value)
    stringArray.push(document.getElementById('creditCardNumber8').value)
    stringArray.push(document.getElementById('creditCardNumber9').value)
    stringArray.push(document.getElementById('creditCardNumber10').value)
    stringArray.push(document.getElementById('creditCardNumber11').value)
    stringArray.push(document.getElementById('creditCardNumber12').value)
    stringArray.push(document.getElementById('creditCardNumber13').value)
    stringArray.push(document.getElementById('creditCardNumber14').value)
    stringArray.push(document.getElementById('creditCardNumber15').value)
    stringArray.push(document.getElementById('creditCardNumber16').value)

    console.log(stringArray)


    let array = [];
    stringArray.forEach(num => {
        array.push(parseInt(num, 10))
    })
    
    console.log(array)


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
  
    }  
    
    console.log(total)
    let modulo = total%10;
    document.getElementById('descriptions').innerHTML = modulo;

    
  }
  




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
  
 
  
  //findInvalidCards(batch)

  

  
  
  
  