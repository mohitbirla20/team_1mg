document.querySelector("button").addEventListener("click",myFunction);
    
let data=[];

function myFunction(){
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#pass").value;
    let obj={};
    obj.uEmail=email;
    obj.uPassword=password;
    data.push(obj);
    localStorage.setItem("userData",JSON.stringify(data));
    alert("Signed up successfully ");
    alert("Now Please login");
    window.location.href="login.html";
   
}