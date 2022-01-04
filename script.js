let runningTotal=0;
let buffer="0";
let previouseOperator = null;
const screen = document.querySelector(".screen");


function rerender(){
    screen.innerText=buffer;
}

function buttonClick(value){
    if(isNaN(parseInt(value))){
        handleSymbol(value);
    }
    else {
        handleNumber(value);
    }
    rerender();
    }

    function handleNumber(value){
        if (buffer === "0"){
            buffer = value;
        }
        else{
            buffer += value;
        }

    }

    function handleSymbol(value){
        switch (value){

            case 'C':
            buffer ="0";
            runningTotal=0;
            previouseOperator = null;
            break;

            case "=":
                if (previouseOperator === null)
                return;
                {
                flushOperation(parseInt(buffer));
                previouseOperator = null;
                buffer = "" + runningTotal;
                runningTotal=0;}
                break;
            
            case "←":
                if (buffer.length===1){
                    buffer="0";
                } else {
                    buffer=buffer.substring(0, buffer.length-1);
                }
                break;
                default:
                    handleMath(value);
                    break;
        }
    }
    
    function handleMath(value){
        const intBuffer = parseInt(buffer);
        if (runningTotal===0){
            runningTotal=intBuffer;
        }
        else{
            flushOperation(intBuffer);
        }

        previouseOperator = value;

        buffer = "0";
    }

    function flushOperation (intBuffer){
        console.log("here");
        if (previouseOperator==="+"){
            runningTotal+=intBuffer
        }
        else if (previouseOperator==="-"){
            runningTotal-=intBuffer
        }
        else if (previouseOperator==="×"){
            runningTotal*=intBuffer
        }
        else if (previouseOperator==="÷"){
            runningTotal/=intBuffer
        }
        
    }


document.querySelector(".calc-buttons").addEventListener("click", function(event){
 buttonClick(event.target.innerText);
})