const printMul3 = document.getElementById('printMul3')
const closePrintMul3 = document.getElementById('closePrintMul3')

function calcMul3(){
    for(var i = 1; i <= 100; i++){
        res = 3 * i;
        resCont = `3 x ${i} = ${res}`
        const element = document.createElement("h2");
        var content = document.createTextNode(resCont);
        element.appendChild(content);
        element.classList.add('fs-1');
        document.getElementById('DeNum').appendChild(element);
    }
}
function removeCalcMul3(){
    var del = 0
    const arre = document.getElementsByClassName('fs-1').length;
    do{
        del ++
        console.log(del)
        const element = document.getElementsByClassName('fs-1');
        element[0].remove();
    }while(del != arre)
}

printMul3.addEventListener('click', calcMul3);
closePrintMul3.addEventListener('click', removeCalcMul3);

const printImp = document.getElementById('printImp')

function calcImp(){
    for(var i = 0; i <= 100; i++){
        if(i % 2 != 0){
            const element = document.createElement("h2");
            var content = document.createTextNode(i);
            element.appendChild(content);
            element.classList.add('fs-1');
            document.getElementById('DeNum').appendChild(element);
        }
    }
}

printImp.addEventListener('click', calcImp);


const printPar = document.getElementById('printPar')

function calcPar(){
    var arr = [];
    for(var i = 0; i <= 100; i++){
        if(i % 2 === 0){
            const element = document.createElement("h2");
            var content = document.createTextNode(i);
            element.appendChild(content);
            element.classList.add('fs-1');
            document.getElementById('DeNum').appendChild(element);
        }
    }
}

printPar.addEventListener('click', calcPar);

const printSquare = document.getElementById('printSquare')

function calcSquare(){
    for(var i = 0; i <= 30; i++){
        rest = i * i  
        const element = document.createElement("h2");
        var content = document.createTextNode(rest);
        element.appendChild(content);
        element.classList.add('fs-1');
        element.classList.add('text-break');
        document.getElementById('DeNum').appendChild(element);  
    }
}

printSquare.addEventListener('click', calcSquare);

const printSumSquare = document.getElementById('printSumSquare')

function calcSumSquare(){
    var sumConst = 0;
    for(var i = 1; i <= 100; i++){
        rest = i * i
        sumConst = sumConst + rest
    }
        const element = document.createElement("h2");
        var content = document.createTextNode(sumConst);
        element.appendChild(content);
        element.classList.add('fs-1');
        document.getElementById('DeNum').appendChild(element);
}

printSumSquare.addEventListener('click', calcSumSquare);

const printSumRange = document.getElementById('printSumRange')

function calcSumRange(){
    var num1 = document.getElementById('r1').value;
    var num2 = document.getElementById('r2').value;
    for(var i = num1; i <= num2; i++){
        const element = document.createElement("h2");
        var content = document.createTextNode(i);
        element.appendChild(content);
        element.classList.add('fs-1');
        document.getElementById('DeNum').appendChild(element);
    }
}

printSumRange.addEventListener('click', calcSumRange);

