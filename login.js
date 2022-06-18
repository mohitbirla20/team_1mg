function loginFun(){
    let dataFrmLs=JSON.parse(localStorage.getItem("userData"))||[];
    let email=document.querySelector("#email").value;
    let pass=document.querySelector("#pass").value;
    dataFrmLs.forEach(function(elem){
        if(email==elem.uEmail && pass==elem.uPassword){
            alert("login successfull");
        }else{
            alert("Invalid Email and Password");
        }
    })

}