
const calcTriangleArea = document.getElementById('calcTriangleArea')
const closeTriangleArea = document.getElementById('closeTriangleArea')

function triangleArea(){
    var num1 = document.getElementById('AreaTriangle1').value;
    var num2 = document.getElementById('AreaTriangle2').value;
    AreaT = num2 * num1 / 2

    const element = document.createElement("h2");
    var content = document.createTextNode(AreaT);
    element.appendChild(content);
    element.classList.add('fs-1');
    document.getElementById('resultTriangleArea').appendChild(element);
}
function removeTriangleArea(){
    const element = document.getElementsByClassName('fs-1');
    console.log(element);
    element[0].remove();
}

calcTriangleArea.addEventListener('click', triangleArea);
closeTriangleArea.addEventListener('click', removeTriangleArea);

const calcSum = document.getElementById('calcSum')

function sum(){
    var num1 = document.getElementById('sum1').value;
    var num2 = document.getElementById('sum2').value;
    sum = parseInt(num1) + parseInt(num2)
    const element = document.createElement("h2");
    var content = document.createTextNode(sum);
    element.appendChild(content);
    element.classList.add('fs-1');
    document.getElementById('resultTriangleArea').appendChild(element);
}

calcSum.addEventListener('click', sum);

const calcElevationSquared = document.getElementById('calcElevationSquared')

function elevationSquared(){
    var num1 = document.getElementById('elev1').value;
    elevation = Math.pow(num1, 2)
    const element = document.createElement("h2");
    var content = document.createTextNode(elevation);
    element.appendChild(content);
    element.classList.add('fs-1');
    document.getElementById('resultTriangleArea').appendChild(element);
}

calcElevationSquared.addEventListener('click', elevationSquared);

const calcConvertion = document.getElementById('calcConvertion')

function euroConversion(){
    var num1 = document.getElementById('Euro').value;
    conv = num1 * 1.08 + " dolares"
    const element = document.createElement("h2");
    var content = document.createTextNode(conv);
    element.appendChild(content);
    element.classList.add('fs-1');
    document.getElementById('resultTriangleArea').appendChild(element);
}

calcConvertion.addEventListener('click', euroConversion);

const calcAPSquare = document.getElementById('calcAPSquare')

function calcAreaPerimeter(){
    var num1 = document.getElementById('side').value;
    AreaS = num1 * num1
    PerimeterS = parseInt(num1) + parseInt(num1) + parseInt(num1) + parseInt(num1)
    const element = document.createElement("h2");
    var content = document.createTextNode("Area: " + AreaS + " Perimetro: "+ PerimeterS);
    element.appendChild(content);
    element.classList.add('fs-1');
    document.getElementById('resultTriangleArea').appendChild(element);
}

calcAPSquare.addEventListener('click', calcAreaPerimeter);

const calcAVCilinder = document.getElementById('calcAVCilinder')

function calcAreaVolume(){
    var num1 = document.getElementById('sideC').value;
    var num2 = document.getElementById('radiusC').value;
    const pi = 3.14;
    AreaC = parseInt(2 * pi * num2 * num1) + parseInt(2 * pi * Math.pow(num2, 2));
    VolumeC = parseInt(pi * Math.pow(num2, 2) * num1);
    const element = document.createElement("h2");
    var content = document.createTextNode("Area: " + AreaC + " Volumen: "+ VolumeC);
    element.appendChild(content);
    element.classList.add('fs-1');
    document.getElementById('resultTriangleArea').appendChild(element);
}

calcAVCilinder.addEventListener('click', calcAreaVolume);

const calcLACircumference = document.getElementById('calcLACircumference')

function calcLengthArea(){
    var num1 = document.getElementById('radioCircumference').value;
    const pi = 3.14;
    lengthC = parseInt(2 * pi * num1);
    AreaC = parseInt(pi * Math.pow(num1, 2));
    const element = document.createElement("h2");
    var content = document.createTextNode("Longitud: " + lengthC + " Area: "+ AreaC);
    element.appendChild(content);
    element.classList.add('fs-1');
    document.getElementById('resultTriangleArea').appendChild(element);
}

calcLACircumference.addEventListener('click', calcLengthArea);

const calcAverage = document.getElementById('calcAverage')

function calcAverageNum(){
    var num1 = document.getElementById('average1').value;
    var num2 = document.getElementById('average2').value;
    var num3 = document.getElementById('average3').value;
    Average = (parseInt(num1) + parseInt(num2) + parseInt(num3)) / 3;
    const element = document.createElement("h2");
    var content = document.createTextNode("Promedio: " + Average);
    element.appendChild(content);
    element.classList.add('fs-1');
    document.getElementById('resultTriangleArea').appendChild(element);
}

calcAverage.addEventListener('click', calcAverageNum);