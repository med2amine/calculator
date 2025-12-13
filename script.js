let num1 
let num2
let operator

/*variable to know if something is displayed*/
let isResultDisplayed = false

function add(num1,num2){
    return num1 + num2
}

function substract(num1,num2){
    return num1 - num2
}

function multiply(num1,num2){
    return num1*num2
}

function divide(num1,num2){
    if (num2===0){
        return "impossible to divide by 0"
    }
    return num1/num2
}

function modulo(num1,num2){
    return num1%num2
}

/*function to do the calculation ( takes two numbers and an operator )*/
function operate(num1,num2,operator){
    if (operator==="+"){
        return add(num1,num2)
    }
    else if (operator==="-"){
        return substract(num1,num2)
    }
    else if (operator==="*"){
        return multiply(num1,num2)
    }
    else if (operator==="/"){
        return divide(num1,num2)
    }
    else if (operator==="%"){
        return modulo(num1,num2)
    }
}

let displayElement = document.querySelector(".screen")
let getbtn = document.querySelectorAll(".nums")
let displayvalue = ""

displayElement.textContent = 0

/*function to know wich number was pressed and to add it*/
getbtn.forEach(button=>{
    button.addEventListener("click",()=>{
        if (isResultDisplayed){
            displayvalue = button.textContent
            isResultDisplayed = false
        }else if (displayvalue === 0){
            displayvalue = button.textContent
        }
        else{
            displayvalue += button.textContent
        }
        displayElement.textContent = displayvalue
    })
})

let getop = document.querySelectorAll(".operator")

/*function to know wich operator was clicked and to do the operation if the user continues and not press equal*/
getop.forEach(op=>{
    op.addEventListener("click",()=>{
        if (isResultDisplayed){
            num1 = Number(displayvalue)
            operator = op.textContent
            displayvalue = ""
            isResultDisplayed = false
        } else if  (num1 !== null && operator !== null && displayvalue !==""){
            num2 = Number(displayvalue)
            let result = operate(num1,num2,operator)
            if (typeof result === "number"){
                result = Math.round(result * 100000000)/100000000
            }
            displayvalue = String(result)
            displayElement.textContent = displayvalue
            num1 = result
            operator = op.textContent
            displayvalue = ""
        }else{
            num1 = Number(displayvalue)
            operator = op.textContent
            displayvalue = ""
        }
    })
})

let equal = document.querySelector(".equal")

/*function to execute if user press equal button*/
equal.addEventListener("click",()=>{
    if (num1 === null || operator === null || displayvalue === ""){
        return;
    }
    num2 = Number(displayvalue)
    let result = operate(num1,num2,operator)
    if (typeof result === "number"){
        result = Math.round(result * 100000000)/100000000
    }
    displayvalue = String(result)
    displayElement.textContent = displayvalue
    isResultDisplayed = true
})

let cl = document.querySelector(".cl")

/*function to clear*/
cl.addEventListener("click",()=>{
    displayvalue = ""
    num1 = null
    num2 = null
    operator = null
    displayElement.textContent = 0
    isResultDisplayed = false
})

let ret = document.querySelector(".ret")

/*function to return if user pressed the wrong number*/
ret.addEventListener("click",()=>{
    if (displayvalue.length === 1){
        displayvalue = "0"
        displayElement.textContent = displayvalue
    } else{
        displayvalue = displayvalue.slice(0,-1)
        displayElement.textContent = displayvalue
    }
})

let fl = document.querySelector(".fl")

/*function to make float*/
fl.addEventListener("click",()=>{
    if (!displayvalue.includes(".")){
        displayvalue += "0."
        displayElement.textContent = displayvalue
    }
})
