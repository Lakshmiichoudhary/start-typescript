const num1Element = document.getElementById("num1") as HTMLInputElement;
const num2Element = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector("button")!;

const numresult : Array<number> = [];
const textresult : Array<string>= []  

type numOrString = number | string;

function add (num1: numOrString ,num2: numOrString) {
    if (typeof num1 === "number" && typeof num2 === "number"){
        return num1 + num2
    } else if (typeof num1 === "string" && typeof num2 === "string"){
        return num1 + num2
    }
    return +num1 + +num2;
}

function printresult (resObj : {val : number,timeStrap : Date}){
    console.log(resObj.val)
}

buttonElement.addEventListener("click", () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1,+num2);
    numresult.push(result as number)
    const stringNum = add(num1,num2)
    textresult.push(stringNum as string)
    printresult({val : result as number , timeStrap : new Date()})
    console.log(numresult,textresult)
})

