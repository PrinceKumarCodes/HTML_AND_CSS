// First percentage in circular progress bar 
let number = document.getElementById("number");
let counter = 0;
setInterval(()=>{
    if(counter == 65){
        clearInterval();
    }else{
    counter+=1;
    number.innerHTML = counter + "%";
    }
},30)//30 millisecond speed


//Second percentage in circular progress bar
let secondNumber = document.getElementById("number1");
let secondCounter = 0;
setInterval(()=>{
    if(secondCounter == 80){
        clearInterval();
    }else{
    secondCounter+=1;
    secondNumber.innerHTML = secondCounter + "%";
    }
},25);