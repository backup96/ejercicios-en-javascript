
const detectNum = document.getElementById('detectNum')
const closeDetectNum = document.getElementById('closeDetectNum')

function calcDetectNum(){
    var num1 = document.getElementById('numC').value;
    num1 > 0
    ? DeNum = "Es positivo"
    : num1 == 0
    ? DeNum = "Es neutro"
    : DeNum = "Es negativo";
    const element = document.createElement("h2");
    var content = document.createTextNode(DeNum);
    element.appendChild(content);
    element.classList.add('fs-1');
    document.getElementById('DeNum').appendChild(element);
}
function removeDetectNum(){
    const element = document.getElementsByClassName('fs-1');
    console.log(element);
    element[0].remove();
}

detectNum.addEventListener('click', calcDetectNum);
closeDetectNum.addEventListener('click', removeDetectNum);

const calcMMn = document.getElementById('calcMMn')

function calcDetectMMn(){
    var num1 = document.getElementById('MMnum1').value;
    var num2 = document.getElementById('MMnum2').value;
    num1 > num2 ? MMnum = `${num1} es mayor que ${num2}` 
    : num1 === num2 ? MMnum = `${num1} y ${num2} son iguales` 
    :MMnum = `${num1} es menor que ${num2}` 
    const element = document.createElement("h2");
    var content = document.createTextNode(MMnum);
    element.appendChild(content);
    element.classList.add('fs-1');
    document.getElementById('DeNum').appendChild(element);
}

calcMMn.addEventListener('click', calcDetectMMn);

const calcMM2n = document.getElementById('calcMM2n')

function calcDetectMM2n(){
    var num1 = document.getElementById('MM2num1').value;
    var num2 = document.getElementById('MM2num2').value;
    var num3 = document.getElementById('MM2num3').value;
    if(parseInt(num1) > parseInt(num2) && parseInt(num1) > parseInt(num3)){
        if(parseInt(num2) > parseInt(num3)){
            MMnum = `Numero mayor: ${num1} Numero menor: ${num3}`
        }else{
            MMnum = `Numero mayor: ${num1} Numero menor: ${num2}`
        }
    }else if(parseInt(num2) > parseInt(num1) && parseInt(num2) > parseInt(num3)){
        if(parseInt(num1) > parseInt(num3)){
            MMnum = `Numero mayor: ${num2} Numero menor: ${num3}`
        }else{
            MMnum = `Numero mayor: ${num2} Numero menor: ${num1}`
        }
    }else if(parseInt(num3) > parseInt(num1) && parseInt(num3) > parseInt(num2)){
        if(parseInt(num1) > parseInt(num2)){
            MMnum = `Numero mayor: ${num3} Numero menor: ${num2}`
        }else{
            MMnum = `Numero mayor: ${num3} Numero menor: ${num1}`
        }
    }
    const element = document.createElement("h2");
    var content = document.createTextNode(MMnum);
    element.appendChild(content);
    element.classList.add('fs-1');
    document.getElementById('DeNum').appendChild(element);
}

calcMM2n.addEventListener('click', calcDetectMM2n);

const calcSR = document.getElementById('calcSR')

function calcSRNum(){
    var num1 = document.getElementById('numA').value;
    var num2 = document.getElementById('numB').value;
    num1 < num2
    ? resultSRNum = parseInt(num1) + parseInt(num2)
    : resultSRNum = num1 - num2
    const element = document.createElement("h2");
    var content = document.createTextNode(resultSRNum);
    element.appendChild(content);
    element.classList.add('fs-1');
    document.getElementById('DeNum').appendChild(element);
}
calcSR.addEventListener('click', calcSRNum);

const calcDiv = document.getElementById('calcDiv')

function calcDivNum(){
    var num1 = document.getElementById('numD1').value;
    var num2 = document.getElementById('numD2').value;
    num2 === 0
    ? resultDiv = `La división no es posible`
    : resultDiv = num1 / num2
    const element = document.createElement("h2");
    var content = document.createTextNode(resultDiv);
    element.appendChild(content);
    element.classList.add('fs-1');
    document.getElementById('DeNum').appendChild(element);
}

calcDiv.addEventListener('click', calcDivNum);

const calcSM = document.getElementById('calcSM')

function calcSMNum(){
    var num1 = document.getElementById('SMnum1').value;
    var num2 = document.getElementById('SMnum2').value;
    num1 < 0 || num2 < 0
    ? resultSM = parseInt(num1) + parseInt(num2)
    : resultSM = num1 * num2
    const element = document.createElement("h2");
    var content = document.createTextNode(resultSM);
    element.appendChild(content);
    element.classList.add('fs-1');
    document.getElementById('DeNum').appendChild(element);
}

calcSM.addEventListener('click', calcSMNum);

const calcYear = document.getElementById('calcYear')

function calcYearNum(){
    var num1 = document.getElementById('year').value;
    if((num1[num1.length - 2] + num1[num1.length - 1]) % 4 === 0){
        if((num1[num1.length - 1] + num1[num1.length - 2]) === 0o0){
            if((num1[num1.length - 1] + num1[num1.length - 2]) % 2 === 0 ||
            (num1[num1.length - 1] + num1[num1.length - 2]) % 4 === 0 ||
            (num1[num1.length - 1] + num1[num1.length - 2]) % 5 === 0 ||
            (num1[num1.length - 1] + num1[num1.length - 2]) % 8 === 0 ||
            (num1[num1.length - 1] + num1[num1.length - 2]) % 10 === 0 ||
            (num1[num1.length - 1] + num1[num1.length - 2]) % 16 === 0 ||
            (400 === 0 % num1[num1.length - 1] + num1[num1.length - 2]) ||
            (num1[num1.length - 1] + num1[num1.length - 2]) % 25 === 0 ||
            (num1[num1.length - 1] + num1[num1.length - 2]) % 40 === 0 ||
            (num1[num1.length - 1] + num1[num1.length - 2]) % 50 === 0 ||
            (num1[num1.length - 1] + num1[num1.length - 2]) % 80 === 0 ||
            (num1[num1.length - 1] + num1[num1.length - 2]) % 100 === 0 ||
            (num1[num1.length - 1] + num1[num1.length - 2]) % 200 === 0 ||
            (num1[num1.length - 1] + num1[num1.length - 2]) % 400 === 0){
                resultYear = `Es año bisiesto`
            }else{
                resultYear = `No es año bisiesto`
            }
        }else{
            resultYear = `Es año bisiesto`
        }
    }else{
        resultYear = `No es año bisiesto`
    }
    const element = document.createElement("h2");
    var content = document.createTextNode(resultYear);
    element.appendChild(content);
    element.classList.add('fs-1');
    document.getElementById('DeNum').appendChild(element);
}

calcYear.addEventListener('click', calcYearNum);
