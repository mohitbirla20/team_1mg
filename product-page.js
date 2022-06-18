
    var Products_page = [

        {

            image_url:
                "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1649963382/f6t1ibz3qh3ag0o486xv.jpg",
            name: "Tata 1mg Immunity & Wellness Supplement Tablet ",
            quantity: "bottle of 60 capsules",
            Ratings: "4.6☆",

            strikedoffprice: 99,
            offprice: '10 % Off',
            price: 89,
            button: "ADD",

        },

        {

            image_url:
                "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1642507775/gmkrpf1imjj9djwvq4gq.jpg",
            name: "Tata 1mg Multivitamin Supreme,Zinc, Calcium and Vitamin D...",
            quantity: "bottle of 60 capsules",
            Ratings: "4.1☆",

            strikedoffprice: 995,
            offprice: '55 % Off',
            price: 448,
            button: "ADD",

        },

        {

            image_url:
                "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1637323384/niilbcbb6dm0tkxvjzvg.jpg",
            name: "NutriBears Multivitamin Growth & Immunity Support Gummies..",
            quantity: "bottle of 30 gummies ",
            Ratings: "4.7☆",

            strikedoffprice: 399,
            offprice: '5 % Off',
            price: 376,
            button: "ADD",

        },

        {

            image_url:
                "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1653417013/ibcufhk27uqhpgy9kfcg.jpg",
            name: "Zincovit Tablets",
            quantity: "Strip of 15 Tablets",
            Ratings: "4.5☆",

            strikedoffprice: 105,
            offprice: '15 % Off',
            price: 89,
            button: "ADD",

        },

        {

            image_url:
                "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1653417158/rjl5upkgyuexb7pl1olo.jpg",
            name: "Shelcal 500 Tablet",
            quantity: "Strip of 15 Tablets",
            Ratings: "4.5☆",

            strikedoffprice: 119.5,
            offprice: '16 % Off',
            price: 100,
            button: "ADD",

        },

        {

            image_url:
                "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1642507827/fwram2p7rbkoigjg6zas.jpg",
            name: "Tata 1mg Salmon Omega 3 Fish Oil Capsule",
            quantity: "bottle of 60 capsules",
            Ratings: "4.4☆",

            strikedoffprice: 995,
            offprice: '55 % Off',
            price: 448,
            button: "ADD",

        },


        {

            image_url:
                "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1632312417/sftqra1arzgoufnxvfgz.jpg",
            name: "Evion 400mg Capsules",
            quantity: "strip of 10 capsules",
            Ratings: "4.3☆",

            strikedoffprice: 50,
            offprice: '21 % Off',
            price: 35.9,
            button: "ADD",

        },

        {

            image_url:
                "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1632312844/jpr9uwzjgcnvmspmqwgp.jpg",
            name: "Neurobion XT Tablets",
            quantity: "strip of 30 tablets",
            Ratings: "4.2☆",

            strikedoffprice: 172.5,
            offprice: '15 % Off',
            price: 146,
            button: "ADD",

        },

        {

            image_url:
                "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600084831/cropped/fx9yieiiwdk6t3fbwii1.jpg",
            name: "Orofer XT Capsule",
            quantity: "strip of 10 tablets",
            Ratings: "4.2☆",

            strikedoffprice: 51,
            offprice: '22 % Off',
            price: 34.7,
            button: "ADD",

        },

        {

            image_url:
                "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1653417142/dqsctsosbmzve5bhnlkj.jpg",
            name: "New A to z Gold Soft Gelatin Capsule",
            quantity: "strip of 15 soft gelatin capsules",
            Ratings: "4.5☆",

            strikedoffprice: 180,
            offprice: '15 % Off',
            price: 153,
            button: "ADD",

        },

        {

            image_url:
                "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1632312306/r4bjtkdzxnzlrfvdmaps.jpg",
            name: "Seven Seas Original Cod-Liver oil Capsule",
            quantity: "bottle of 100 soft gelatin capsules",
            Ratings: "4.5☆",
            strikedoffprice: 320.9,
            offprice: "7 % Off",
            price: 298,
            button: "ADD",
        },

        {
            image_url:
                "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1625118755/lnokjri7seuxwnv2qbwy.jpg",
            name: "Revital H Capsule",
            quantity: "bottle of 60 soft gelatin capsules",
            Ratings: "4.4☆",
            strikedoffprice: 550,
            offprice: "12 % Off",
            price: 484,
            button: "ADD",

        },
    ]

    function handleSort() {
        let selected = document.querySelector("#sort").value;
        if (selected == "dec") {
            Products_page.sort(function (a, b) {
                return ((+b.price) - (+a.price))
            })
            displaydiv(Products_page)
        }
        if (selected == "inc") {
            Products_page.sort(function (a, b) {
                return ((+a.price) - (+b.price))
            })
            displaydiv(Products_page)
        }

    }

    displaydiv(Products_page)

    let cartArr = JSON.parse(localStorage.getItem("Pcart")) || []

    function displaydiv(Products_page) {
        document.querySelector("#container").innerHTML = "";

        let maindiv = document.querySelector("#container")

        Products_page.forEach(function (el) {
            let innerdiv = document.createElement("div")

            let productPic = document.createElement("img");
            productPic.src = el.image_url;

            let productName = document.createElement("h4");
            productName.innerText = el.name

            let productQuantity = document.createElement("p");
            productQuantity.innerText = el.quantity

            let rating = document.createElement("h4");
            rating.innerText = el.Ratings

            let productPrice = document.createElement("div");
            let str = document.createElement("p")
            str.innerText = "MRP "
            let strikeprice = document.createElement("p")
            strikeprice.innerText = el.strikedoffprice
            let dis = document.createElement("p")
            dis.innerText = el.offprice

            productPrice.append(str, strikeprice, dis)
            let bottomdiv = document.createElement("div")
            let pprice = document.createElement("p")
            pprice.innerText = "₹ " + el.price
            let btn = document.createElement("p");
            btn.innerText = el.button
            bottomdiv.append(pprice, btn)
            btn.addEventListener("click", function () {
                cartFunction(el)
            })

            innerdiv.append(productPic, productName, productQuantity, rating, productPrice, bottomdiv)
            maindiv.append(innerdiv)
        })
        document.querySelector("body").append(maindiv)
    }

    function cartFunction(el) {
        let cartObj = {
            pic: el.image_url,
            pname: el.name,
            price: el.price
        }
        if (checkCart(cartObj.pname) === true) {
            cartArr.push(cartObj);
            localStorage.setItem("Pcart", JSON.stringify(cartArr))
            alert("Product Added to Cart Successfully")
        } else {
            alert("Product Already in the Cart")
        }

    }

    function checkCart(name) {
        let filtered = cartArr.filter(function (el) {
            return name === el.pname
        });
        if (filtered.length > 0) {
            return false;
        }
        else {
            return true;
        }
    }







