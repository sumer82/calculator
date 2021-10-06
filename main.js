let btn1 = document.getElementById("1");
let btn2 = document.getElementById("2");
let btn3 = document.getElementById("3");
let btn4 = document.getElementById("4");
let btn5 = document.getElementById("5");
let btn6 = document.getElementById("6");
let btn7 = document.getElementById("7");
let btn8 = document.getElementById("8");
let btn9 = document.getElementById("9");
let btn0 = document.getElementById("0");
let btnmul = document.getElementById("*");
let btndiv = document.getElementById("/");
let btnadd = document.getElementById("+");
let btnsub = document.getElementById("-");
let btnclr = document.getElementById("clr");
let btneql = document.getElementById("=");
let btnmodulo = document.getElementById("%");
let btnbackspace = document.getElementById("back");


btn1.onclick = function () {
     document.getElementById("output-value").innerHTML += "1";
}

btn2.onclick = function () {
    document.getElementById("output-value").innerHTML += "2";
}
btn3.onclick = function () {
    document.getElementById("output-value").innerHTML += "3";
}
btn4.onclick = function () {
    document.getElementById("output-value").innerHTML += "4";
}
btn5.onclick = function () {
    document.getElementById("output-value").innerHTML += "5";
}
btn6.onclick = function () {
    document.getElementById("output-value").innerHTML += "6";
}
btn7.onclick = function () {
    document.getElementById("output-value").innerHTML += "7";
}
btn8.onclick = function () {
    document.getElementById("output-value").innerHTML += "8";
}
btn9.onclick = function () {
    document.getElementById("output-value").innerHTML += "9";
}
btn0.onclick = function () {
    document.getElementById("output-value").innerHTML += "0";
}
btnmul.onclick = function () {
    document.getElementById("output-value").innerHTML += btnmul.innerHTML;
    document.getElementById("history-value").innerHTML += document.getElementById("output-value").innerHTML;
    document.getElementById("output-value").innerHTML = "";
}
btndiv.onclick = function () {
    document.getElementById("output-value").innerHTML += btndiv.innerHTML;
    document.getElementById("history-value").innerHTML += document.getElementById("output-value").innerHTML;
    document.getElementById("output-value").innerHTML = "";
}
btnadd.onclick = function () {
    document.getElementById("output-value").innerHTML += btnadd.innerHTML;
    document.getElementById("history-value").innerHTML += document.getElementById("output-value").innerHTML;
    document.getElementById("output-value").innerHTML = "";
}
btnsub.onclick = function () {
    document.getElementById("output-value").innerHTML += btnsub.innerHTML;
    document.getElementById("history-value").innerHTML += document.getElementById("output-value").innerHTML;
    document.getElementById("output-value").innerHTML = "";
}
btnmodulo.onclick = function () {
    document.getElementById("output-value").innerHTML += btnmodulo.innerHTML;
    document.getElementById("history-value").innerHTML += document.getElementById("output-value").innerHTML;
    document.getElementById("output-value").innerHTML = "";
}
btneql.onclick = function () {
    document.getElementById("history-value").innerHTML += document.getElementById("output-value").innerHTML;
    document.getElementById("output-value").innerHTML = "";
    document.getElementById("output-value").innerHTML += eval(document.getElementById("history-value").innerHTML);
    document.getElementById("history-value").innerHTML = "";
}
btnclr.onclick = function () {
    document.getElementById("history-value").innerHTML = "";
    document.getElementById("output-value").innerHTML = "";
}
btnbackspace.onclick = function(){
    output = document.getElementById("output-value").innerHTML;
    if(output){//if output has a value
       output = output.substr(0,output.length-1);
       document.getElementById("output-value").innerHTML = output;
       }
}
