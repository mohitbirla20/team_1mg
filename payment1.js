function debCard(){
    document.querySelector("#paymeth").innerHTML="";
    let h2=document.createElement("h2");
    h2.innerText="Debit Card Details"
    let lb1=document.createElement("label");
    lb1.innerText="Card Number";
    let ip1=document.createElement("input");
    ip1.setAttribute("type","number");
    ip1.setAttribute("placeholder","Enter Card Number");

    let lb2=document.createElement("label");
    lb2.innerText="Expiry Date";
    let ip2=document.createElement("input");
    ip2.setAttribute("type","date");
    ip2.style.cursor="pointer";

    let lb3=document.createElement("label");
    lb3.innerText="Enter CVV Number";
    let ip3=document.createElement("input");
    ip3.setAttribute("type","password");
    ip3.setAttribute("placeholder","Enter 3 digit CVV Number");

    let lb4=document.createElement("label");
    lb4.innerText="Enter Cardholder's Name";
    let ip4=document.createElement("input");
    ip4.setAttribute("type","text");
    ip4.setAttribute("placeholder","Enter Cardholder's Name");

    let btn=document.createElement("button");
    btn.innerText="PROCEED";
    btn.addEventListener("click",otp);




    document.querySelector("#paymeth").append(h2,lb1,ip1,lb2,ip2,lb3,ip3,lb4,ip4,btn);
}
function credCard(){
document.querySelector("#paymeth").innerHTML="";
    let h2=document.createElement("h2");
    h2.innerText="Credit Card Details"
    let lb1=document.createElement("label");
    lb1.innerText="Card Number";
    let ip1=document.createElement("input");
    ip1.setAttribute("type","number");
    ip1.setAttribute("placeholder","Enter Card Number");

    let lb2=document.createElement("label");
    lb2.innerText="Expiry Date";
    let ip2=document.createElement("input");
    ip2.setAttribute("type","date");
    ip2.style.cursor="pointer";
    let lb3=document.createElement("label");
    lb3.innerText="Enter CVV Number";
    let ip3=document.createElement("input");
    ip3.setAttribute("type","password");
    ip3.setAttribute("placeholder","Enter 3 digit CVV Number");
   
    let lb4=document.createElement("label");
    lb4.innerText="Enter Cardholder's Name";
    let ip4=document.createElement("input");
    ip4.setAttribute("type","text");
    ip4.setAttribute("placeholder","Enter Cardholder's Name");

    let btn=document.createElement("button");
    btn.innerText="PROCEED";
    btn.addEventListener("click",otp);




    document.querySelector("#paymeth").append(h2,lb1,ip1,lb2,ip2,lb3,ip3,lb4,ip4,btn);
}

function netBank(){
document.querySelector("#paymeth").innerHTML="";
let h2=document.createElement("h2");
h2.innerText="Netbanking Details";
let lb1=document.createElement("label");
lb1.innerText="Username";
let ip1=document.createElement("input");
ip1.style.marginTop="-50px"
ip1.setAttribute("type","text");
ip1.setAttribute("placeholder","Enter Username");
let lb2=document.createElement("label");
lb2.innerText="Password";
let ip2=document.createElement("input");
ip2.setAttribute("type","password");
ip2.style.marginTop="-50px"
ip2.setAttribute("placeholder","Enter Password");
let btn=document.createElement("button");
    btn.innerText="PROCEED";
    btn.addEventListener("click",otp);
document.querySelector("#paymeth").append(h2,lb1,ip1,lb2,ip2,btn);

}
function otp(){
window.location.href="otp1.html";
}