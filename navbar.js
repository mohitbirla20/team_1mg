let dataFrmLs=JSON.parse(localStorage.getItem("loginData"));

if(dataFrmLs.length==1){
    document.querySelector("#login").innerHTML=dataFrmLs[0].uEmail;
    document.querySelector("#signup").innerHTML="";
}