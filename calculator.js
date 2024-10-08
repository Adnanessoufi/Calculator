const statement  = document.querySelector('.statement')
const result = document.querySelector('.result')
const numbers = document.querySelectorAll('.numbers')
const operations = document.querySelectorAll('.operation')
const equal = document.querySelector('.equal')
let equalSign = false
let operator = false


numbers.forEach((number)=>number.addEventListener('click',(e)=>{
  operator = false
  statement.textContent += e.target.innerText
}))

operations.forEach((operation)=>operation.addEventListener('click',(e)=>{
  if (operator === false){

    if(equalSign === true){
      statement.textContent = result.textContent 
      result.textContent = ''
     }

    statement.textContent += " " + e.target.innerText + " "
    operator = true
    
    
}}))

equal.addEventListener('click',(e)=>{
  if (equalSign === false || operator === false){
    let operation = statement.textContent
    operation = operation.replace(/x/g,"*").replace(/%/g,"/")
    result.textContent = eval(operation)
    statement.textContent += " = " 
    equalSign = true
}})




