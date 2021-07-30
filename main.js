const display = document.querySelector("#display")
const lengthEl = document.querySelector(".length")
const upperEl = document.querySelector("#upper")
const lowerEl = document.querySelector("#lower")
const numberEl = document.querySelector("#numbers")
const symbolEl = document.querySelector("#symbols")
const btn = document.querySelector(".btn")


//console.log(getRandomSymbol())



const randomFunc = {
  upper: getRandomUpper,
  lower: getRandomLower,
  number: getRandomNum,
  symbol: getRandomSymbol
}

btn.addEventListener("click",() => {
  let length = lengthEl.value;
  
  const hasUpper = upperEl.checked
  const hasLower = lowerEl.checked
  const hasNumber = numberEl.checked
  const hasSymbol = symbolEl.checked
  
  display.innerText = generatePass(hasUpper,
    hasLower,
    hasNumber,
    hasSymbol,
    length)
})


function generatePass(upper,lower,number,symbol,length){
  let generatedFunc = ''
  
  let typesCount = upper + lower + number + symbol;
  
  
  let typesArr = [{ upper },{ lower },{ number },{ symbol }].filter(item => 
    Object.values(item)[0]
  )
  
  //console.log(typesArr)
  
  if(typesCount === 0){
    return '';
  }
  
  for (let i = 0; i < length; i+=typesCount) {
  
  typesArr.forEach(type => {
    const funcName = Object.keys(type)[0];
    //console.log(funcName)
    generatedFunc+=randomFunc[funcName]();
    
    
  })
  
  
  
  
  }
  
  let finalPass = generatedFunc.slice(0,length)
  
  return finalPass;
  //console.log(typesCount)
}


function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random()*26 + 65))
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97))
}


function getRandomNum() {
  return String.fromCharCode(Math.floor(Math.random() * 10 + 48))
}

function getRandomSymbol() {
   let symbol = "@!#$%^&*<>?7"
  return symbol [Math.floor((Math.random() * symbol.length))]
}

