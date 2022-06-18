
let cartArr = JSON.parse(localStorage.getItem("Pcart")) || []
if (cartArr.length == 0) {
    document.querySelector("body").innerHTML = "<p>Oops!<br>Looks like there is no item in your cart yet.</p > "
    alert("Your Cart Is Empty")
    window.location.href="product-page.html"
} else {

    let Pquantity = cartArr.length
    //total amount and discount
    let subsum = 0;
    let dis = 0;

    //coupon apply
    let coupon = document.querySelector("#promo");

    function checkDiscount() {

        if (coupon.value == "masai30") {
            console.log(coupon.value)
            let discount = (+subsum) * 30 / 100
            dis = (+subsum) - discount;
            alert("Congrats... You got 30% Discount")
            document.querySelector("#total").innerText = dis;
            document.querySelector("#discount").innerText = 30 + "%"
        }
        else {
            alert("Invalid Promocode")
        }
    }


    displayTable(cartArr)

    function displayTable(cartArr) {

        let tBody = document.querySelector("tbody");

        cartArr.forEach(function (el, index) {
            let tr = document.createElement("tr");

            let td1 = document.createElement("td");
            let pic = document.createElement("img")
            pic.src = el.pic
            td1.append(pic)

            let td2 = document.createElement("td");
            td2.innerText = el.pname

            let td3 = document.createElement("td");
            td3.innerText = "₹ " + el.price;

            let td4 = document.createElement("td");

            let span2 = document.createElement("span")
            let quantity = 1
            span2.innerText = quantity

            let span4 = document.createElement("span")
            span4.innerText = "x"
            span4.addEventListener("click", function () {
                removeItem(el, index);
            });
            td4.append(span2, span4)

            tr.append(td1, td2, td3, td4)

            tBody.append(tr)

            subsum = subsum + (+el.price)
            let a = document.querySelector("#quantity")
            a.innerText = Pquantity
            let b = document.querySelector("#subtotal")
            b.innerText = "₹ " + subsum
            let c = document.querySelector("#discount")
            c.innerText = dis + "%"

            let d = document.querySelector("#total")
            d.innerText = "₹ " + subsum

        })

    }
    function removeItem(elem, index) {
        cartArr.splice(index, 1);
        localStorage.setItem("Pcart", JSON.stringify(cartArr));
        window.location.reload();
    }

    document.querySelector("#checkout").addEventListener("click",checkout)

    function checkout(){
        window.location.href="address.html"
    }
    

}


