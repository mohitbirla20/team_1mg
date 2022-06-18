function loginFun(){
    let data=[];
    let dataFrmLs=JSON.parse(localStorage.getItem("userData"))||[];
    let email=document.querySelector("#email").value;
    let pass=document.querySelector("#pass").value;
    dataFrmLs.forEach(function(elem){
        if(email==elem.uEmail && pass==elem.uPassword){
            alert("login successfull");
            window.location.href="index.html";
            data.push(elem);
            localStorage.setItem("loginData",JSON.stringify(data));
        }else{
            alert("Invalid Email and Password");
        }
    })

}