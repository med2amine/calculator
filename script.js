let num1 
let num2
let operator

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

getbtn.forEach(button=>{
    button.addEventListener("click",()=>{
        displayvalue += button.textContent
        displayElement.textContent = displayvalue
    })
})

let getop = document.querySelectorAll(".operator")

getop.forEach(op=>{
    op.addEventListener("click",()=>{
        if (num1 !== null && operator !== null){
            num2 = Number(displayvalue)
            let result = operate(num1,num2,operator)
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

equal.addEventListener("click",()=>{
    num2 = Number(displayvalue)
    displayvalue = String(operate(num1,num2,operator))
    displayElement.textContent = displayvalue

})

let cl = document.querySelector(".cl")

cl.addEventListener("click",()=>{
    displayvalue = ""
    num1 = null
    num2 = null
    operator = null
    displayElement.textContent = 0
})

let ret = document.querySelector(".ret")

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

fl.addEventListener("click",()=>{
    if (!displayvalue.includes(".")){
        displayvalue += "."
        displayElement.textContent = displayvalue
    }
})
