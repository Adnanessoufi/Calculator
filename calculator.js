const statement  = document.querySelector('.statement')
const result = document.querySelector('.result')
const numbers = document.querySelectorAll('.numbers')
const operations = document.querySelectorAll('.operation')
const equal = document.querySelector('.equal')
const deleteAll = document.querySelector('.deleteAll')
const deleteIcon = document.querySelector('.delete')
const point = document.querySelector('.point')
const negative = document.querySelector('.negative')
let equalSign = false
let operator = false
let firstCar = true


negative.addEventListener('click',()=>{
  if(equalSign){
    result.textContent = ''
    statement.textContent = ''
    equalSign = false 
    firstCar = false
    operator = false
  }

  if(firstCar || operator){
    statement.textContent += '-'
  } else {
    let text = statement.textContent
    let lastChar = text.at(-1)
    text = text.replace(lastChar,`-${lastChar}`)
    statement.textContent = text  
}})

deleteIcon.addEventListener('click',()=>{
  let text = statement.textContent
  if (equalSign===true){
    text = text.replace('= ','')
    equalSign = false
    result.textContent = ''
  }
  statement.textContent = text.replaceAll(' ','').slice(0,-1).replace(/([x\-+÷])/g,' $1 ')
  
})

point.addEventListener('click',(e)=>{
  if (operator){
    statement.textContent += '0'
  }
  statement.textContent += e.target.innerText
})

deleteAll.addEventListener('click',()=>{
  result.textContent = ''
  statement.textContent = ''
  equalSign = false
  operator = false
  firstCar = true
})

numbers.forEach((number)=>number.addEventListener('click',(e)=>{
  if(equalSign){
    result.textContent = ''
    statement.textContent = ''
    equalSign = false
  }
  statement.textContent += e.target.innerText
  firstCar = false
  operator = false
}))

operations.forEach((operation)=>operation.addEventListener('click',(e)=>{
  if (operator === false && firstCar === false){

    if(equalSign){
      statement.textContent = result.textContent 
      result.textContent = ''
      equalSign = false
     }

    statement.textContent += " " + e.target.innerText + " "
    operator = true  
}else if(operator===true){
    let text = statement.textContent
    let lastChar = text.trim().at(-1)
    text = text.replace(lastChar,e.target.innerText+' ')
    statement.textContent = text  
}

}))

equal.addEventListener('click',(e)=>{
  if (equalSign === false || operator === false){
    let operation = statement.textContent
    operation = operation.replace(/x/g,"*").replace(/÷/g,"/")
    result.textContent = eval(operation)
    statement.textContent += " = " 
    equalSign = true
}})



