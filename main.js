// Step 1: Images data

var images = [
    {
        name: "Camaro",
        likes: 133,
        dateUploaded: "1/1/2016",
        src: "Camaro.jpg",
    }
    ,
    {
        name: "BMW",
        likes: 20,
        dateUploaded: "10/22/2018",
        src: "BMW.jpg"
    }
    ,
    {
        name: "blue car",
        likes: 322,
        dateUploaded: "10/19/2018",
        src: "blue car.jpg"
    }
    ,
    {
        name: "camray",
        likes: 110,
        dateUploaded: "5/1/2019",
        src: "camray.jpg"
    }
    ,
    {
        name: "mustang",
        likes: 500,
        dateUploaded: "3/12/2013",
        src: "mustang.jpg"
    }
    ,
    {
        name: "hyundai",
        likes: 600,
        dateUploaded: "11/9/2017",
        src: "hyundai.jpg"
    }
    ,
    {
        name: "honda",
        likes: 7,
        dateUploaded: "7/10/2017",
        src: "honda.jpg"
    }
    ,
    {
        name: "silver car",
        likes: 77,
        dateUploaded: "22/5/2017",
        src: "silver car.jpg"
    }
    ,
    {
        name: "red_car",
        likes: 155,
        dateUploaded: "6/8/2017",
        src: "red_car.jpg"
    }
    ,
    {
        name: "porsche",
        likes: 90,
        dateUploaded: "1/1/2015",
        src: "porsche.jpg"
    }
    ,
    {
        name: "suzuki",
        likes: 115,
        dateUploaded: "2/5/2017",
        src: "suzuki.jpg"
    }
]
//================================================================================
// Step 2: Generate the HTML Page using the DOM API

/*
var H_1 = document.createElement('h1');
var text_1 = document.createTextNode("Google image");
H_1.appendChild(text_1);
var div_1 = document.createElement("div");
var input_1 = document.createElement("input"); input_1.id = "inputSearch"; input_1.size = 60;
var span_1 = document.createElement("span");
var button_1 = document.createElement("button"); button_1.className = "but1";
var text_in_Button = document.createTextNode(" search ");
button_1.appendChild(text_in_Button);
//==================================
span_1.appendChild(button_1);
div_1.appendChild(input_1);
div_1.appendChild(span_1);
document.body.appendChild(H_1);
document.body.appendChild(div_1);
*/
var hr1 = document.createElement("hr")

var UlLis1 = document.createElement("ul"); UlLis1.className = "op";

//item1
var item1 = document.createElement("li");
var a1 = document.createElement("a");
a1.textContent = "All";
a1.setAttribute('href', "#");
item1.appendChild(a1);
UlLis1.appendChild(item1);

//item2
var item2 = document.createElement("li");
var a2 = document.createElement("a");
a2.textContent = "image";
a2.setAttribute('href', "#");
item2.appendChild(a2);
UlLis1.appendChild(item2);

//item3
var item3 = document.createElement("li");
var a3 = document.createElement("a");
a3.textContent = "Video";
a3.setAttribute('href', "#");
item3.appendChild(a3);
UlLis1.appendChild(item3);

//item4
var item4 = document.createElement("li");
var a4 = document.createElement("a");
a4.textContent = "news";
a4.setAttribute('href', "#");
item4.appendChild(a4);
UlLis1.appendChild(item4);

//item5
var item5 = document.createElement("li");
var a5 = document.createElement("a");
a5.textContent = "MAP";
a5.setAttribute('href', "#");
item5.appendChild(a5);
UlLis1.appendChild(item5);

//item6
var item6 = document.createElement("li");
var button_2 = document.createElement("button"); button_2.className = "but1";
var a6 = document.createElement("a");
a6.textContent = "Advanced Search";
a6.setAttribute('href', "https://beladi909.github.io/cpit405-assignment-2/Assi2_p3.html");
button_2.appendChild(a6);
item6.appendChild(button_2);
UlLis1.appendChild(item6);


//============================================================================
// create option and add in ul 
var select = document.createElement("select");
select.id = "mySelect";
select.onchange = myFunction;

var op0 = document.createElement("option");
op0.value = "select option";
var text_in_op0 = document.createTextNode("");
op0.appendChild(text_in_op0);
select.appendChild(op0);

//item1
var op1 = document.createElement("option");
op1.value = "name";
var text_in_op1 = document.createTextNode(" sort by name ");
op1.appendChild(text_in_op1);
select.appendChild(op1);


//item2
var op2 = document.createElement("option");
op2.value = "like";
var text_in_op2 = document.createTextNode(" sort by like ");
op2.appendChild(text_in_op2);
select.appendChild(op2);


//item3
var op3 = document.createElement("option");
op3.value = "date";
var text_in_op3 = document.createTextNode(" sort by date ");
op3.appendChild(text_in_op3);
select.appendChild(op3);
UlLis1.appendChild(select);
document.body.appendChild(UlLis1);
document.body.appendChild(hr1);



//--------------------------

addImage();//add Images in page 


function addImage() {
    var ulElem = document.createElement("ul"); ulElem.id = "list";
    var i;
    for (i = 0; i < images.length; i++) {
        var li0 = document.createElement("li");
        var img0 = document.createElement("img");
        img0.src = images[i].src;
        img0.style.height = "200px";
        img0.style.width = "250px";
        li0.appendChild(img0);
        ulElem.appendChild(li0)
    }
    document.body.appendChild(ulElem);
}

//**************************************************************************************** */
// use the DOM API

function sortByName(a, b) {
    return a.name.localeCompare(b.name);
}


function sortByLike(a, b) {

    return b.likes - a.likes;
    console.log("in func");
}


function sortByDate(a, b) {
    console.log("in sort date method")
    var d = new Date(b.dateUploaded);
    var d2 = new Date(a.dateUploaded);
    if (d < d2) {
        return 1;
    }
    else if (d > d2) {
        return -1;
    }
    else {
        return 0;
    }
}

//=================================================================
function myFunction() {
    var x = document.getElementById("mySelect").value;
    if (x == "like") {
        images.sort(sortByLike);
    }

    if (x == "name") {
        images.sort(sortByName);
    }


    if (x == "date") {
        images.sort(sortByDate);
    }


    var ul = document.getElementById("list");
    var lis = ul.getElementsByTagName("li")
    while (lis.length > 0) {
        ul.removeChild(lis[0]);
    }
    console.log("in dis");
    var i;
    for (i = 0; i < images.length; i++) {
        var l_S = document.createElement("li");
        var im_S = document.createElement("img");
        im_S.style.height = "200px";
        im_S.style.width = "250px";
        l_S.appendChild(im_S);
        im_S.src = images[i].src;
        var ulElem1 = document.getElementById("list");
        ulElem1.appendChild(l_S);
    }
    document.body.appendChild(ulElem1);
}







