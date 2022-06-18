function myFunction(){
       
    let house=document.querySelector("#house").value;
    let lane=document.querySelector("#lane").value;
    let local=document.querySelector("#local").value;
    let land=document.querySelector("#land").value;
    let city=document.querySelector("#city").value;
    let dist=document.querySelector("#dist").value;
    let state=document.querySelector("#state").value;
    let pin=document.querySelector("#pin").value;

    
    let line1=document.createElement("h3");
    line1.innerText="House No.: "+house+", "+"Lane No.: "+lane+", "+local+", "
    let line2=document.createElement("h3");
    line2.innerText=land+", "+city+", "+dist+", ";
    let line3=document.createElement("h3");
    line3.innerText=state+", "+pin+". ";
   
  
   
    document.querySelector("#add").append(line1,line2,line3);
}

function myFunction2(){
window.location.href="payment1.html"
}