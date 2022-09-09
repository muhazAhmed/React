
function Sum(a,b){
    let sum = a + b
    return sum
}

function Sub(a,b){
    let sub = a - b
    return sub
}

function Div(a,b){
    let div = a / b
    div = div.toFixed(2);
    return div
}

function Mult(a,b){
    let mult = a * b
    return mult
}

export {Sum, Sub, Div, Mult};