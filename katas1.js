function oneThroughTwenty() {
    let meuRetorno = [];
    for (let counter = 1; counter <= 20; counter ++) {
        meuRetorno.push(counter)
    }
    return meuRetorno;
   
}

console.log(oneThroughTwenty())

function evensToTwenty() {
  let meuRetorno = [];
    for (let counter = 2; counter <= 20; counter = counter+2) {
        meuRetorno.push(counter)
    }
    return meuRetorno; 
}

console.log(evensToTwenty())

function oddsToTwenty() {
  let meuRetorno = [];
    for (let counter = 1; counter <= 19; counter = counter+2) {
        meuRetorno.push(counter)
    }
    return meuRetorno; 
}

console.log(oddsToTwenty())

function multiplesOfFive() {
    
  let meuRetorno = [];
    for (let counter = 5; counter <= 100; counter = counter+5) {
        meuRetorno.push(counter)
    }
    return meuRetorno; 
}

console.log(multiplesOfFive())

function squareNumbers() {
    
    let meuRetorno = [];
    for(let counter = 0; counter < 1; counter = counter + 1 ) {
        meuRetorno.push(1, 4, 9, 16, 25, 36, 49, 64, 81, 100)
    }
    return meuRetorno; 
       
}

console.log (squareNumbers())
   
function squareNumbers() {
    
    let meuRetorno = [];
    for(let counter = 0; counter * counter <=100; counter = counter + 1 ) {
        meuRetorno.push(counter*counter)
    }
    return meuRetorno; 
       
}
   
console.log(countingBackwards())
   
   function evenNumbersBackwards() {
             
  let meuRetorno = [];
  for (let counter = 20; counter >= 1; counter = counter-2) {
      meuRetorno.push(counter)
  }
  return meuRetorno;
   }
   
console.log(evenNumbersBackwards())
   
   function oddNumbersBackwards() {
             
  let meuRetorno = [];
  for (let counter = 19; counter >= 1; counter = counter-2) {
      meuRetorno.push(counter)
  }
  return meuRetorno;
   }
   
   console.log(oddNumbersBackwards())
   
   function multiplesOfFiveBackwards() {
       
       
  let meuRetorno = [];
  for (let counter = 100; counter >=5; counter = counter-5) {
      meuRetorno.push(counter)
  }
  return meuRetorno;
   }
   
   console.log(multiplesOfFiveBackwards())
   
   function squareNumbersBackwards() {
      
    let meuRetorno = [];
    for(let counter=10 ; counter*counter >= 1; counter = counter - 1 ){
        meuRetorno.push (counter*counter)
    }
    return meuRetorno; 
       
}
   
  console.log(squareNumbersBackwards())
   
