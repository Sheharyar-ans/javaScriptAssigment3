//alert("Welcome to Pakweb");

//alert("Your password is Incorrect")

//alert("Welcome To Js Land");

//var a = 5;
//var b = 10;
//var c = a+b;
//alert(c)

//var b = 10 % 3;
//alert(b)

//var x = 5;
//var y = x++ + ++x + x++ - --x;
//console.log(y);

//var a = prompt("Enter Your Name","Your Name is:");
//alert(a);

// var a = prompt("Enter Name","Enter Your Nmae")
// var b = prompt("Enter Father Nmae","Father Name")
// var c = a + b
// document.write(c);

// var a = prompt("Enter Your Age","Your Age")
// var b = prompt("Enter Your Height")
// var c = a + b
// document.write(c)

// var x = "Enter value";
// var y = "your Value is";
// var a = +prompt(x,y);
// var b = a + 10;
// document.write("The Output is;" + " " + b)

// var age = +prompt("Enter your age");
// if(age == 18){
//     alert("Ypur Age is Equal")
// }
// else if(age < 18){
//     alert("Your Age is less")
// }
// else{
//     alert("Your Age is More")
// }

// var a = "Sheharyar";
// var b = "Ansari";
// var c = a + " " + b
// alert(c);

// var a = 20;
// var b = "20";
// var c = a + b;
// alert(c);

// var a = +prompt("Enter Value");
// var b = +prompt("Enter value");
// var c = a + b;
// document.write(c);

//var a = prompt("Enter Your Average Marks");
//var b = prompt("Enter Your Total Marks");
//var c = a * 100 / b;
//document.write(c);







// var first = prompt("Write Your First Name ");
// var last = prompt("Write Your last Name");
// var fullName= first +  last;
// document.write("Full Name" + fullName)


// var first = prompt("Write Your Mobile Model");
// var a = first.length
// document.write("My Favrate Mobile Is" + " " + first + "<br>" + "Your Value Length is" + " " +  a)




// var cities = prompt("Write City Names");
// var arr = ["Karachi", "Peshawar", "Islamabad", "Faisalabad", "Gujrawala"];
// for(var i = 0; i <arr.length; i++){
//     if(arr[i] === cities){
//         document.write("city has found")
//     }
//     else{
//         alert("City not Found")
//         break
//     }
// }



// var cities = prompt("Write City Names");
// cities = cities.toLowerCase()
// var arr = ["karachi", "peshawar", "islamabad", "faisalabad", "gujrawala"];
// for(var i = 0; i <arr.length; i++){
//     if(arr[i] === cities){
//         alert("City has found")
//         break
//     }else{
//         alert("City has not found")
//         break
//     }

// }




// var cities = prompt("Write City Names");
// var first = cities.slice(0,1)
// first = first.toUpperCase()
// var other = cities.slice(1)
// other = other.toLowerCase()
// cities = first+other
// document.write(cities)

// var arr = ["Karachi", "Peshawar", "Islamabad", "Faisalabad", "Gujrawala"];
// for(var i = 0; i <arr.length; i++){
//     if(arr[i] === cities){
//         alert("City has found")
//         break
//     }else{
//         alert("City has not found")
//         break
//     }

// }


// var str = prompt("Enter some text"); 
// var numChars = str.length; 
// for (var i = 0; i < numChars; i++) { 
//     if (str.slice(i, i + 2) === "  ") { 
//     alert("No double spaces!"); 
//     break;

//     } 
// }


// var text = "The New Yorker magazine doesn't allow the phrase World War II.  They say it should be the Second World War. So lets search the following sentence for the banned characters and replace them with the phrase that the New Yorker prefers"
// var index = text.indexOf("World War II");
// var first = text.slice(0,index)
// var replace = "the second world war"
// var third = text.slice(index+12);
// console.log(index + replace + third);


// var a = "Sheharyar";
// console.log(a.charAt(3));


// var a = "This is Example";
// var b = a.replace("/Example/g","Text");
// document.write(b)

// var a = 3.5;
// var b = Math.round(a);
// document.write(b)


// var a = prompt("Enter Your value");
// var b = Math.round(a);
// document.write(b)

// var a = 3.5;
// var b = Math.ceil(a);
// document.write(b)


// var a = 3.5;
// var b = Math.floor(a);
// document.write(b)


// var heads = prompt("Enter Heads User Name");
// var tails = prompt("Enter tails User Name");
// var toss = Math.random() * 2;
// var floor = Math.floor(toss);
// if(floor === 0){
//     alert(heads + " " + "Win the Toss")
// }else{
//     alert(tails + " " + "Win the Toss")
// }


// var a = 10;
// console.log(a.toString())

// var a = Math.random() * 2;
// var b = a.toFixed(2)
// document.write(b)

//  var bod = new Date(prompt("Enter your Date of Bith","Apr 18, 1999"));
//  var dobmili = bod.getTime()
//  var today = new Date();
//  var todaymili = today.getTime();
//  var diff = todaymili - dobmili;
//  var accuage = Math.floor(diff/(1000*60*60*24*30*12));
//  document.write(accuage);

// var name = "Sheharyar"

// switch(name){
//     case "Sheharyar"
//     alert("Welcome Sheharyar")
//     case "talha"
//     alert("Welcoe our Application")
//     default;
//     alert("hello")
// }

// function btn(){
//     alert("Thanks For Buying Our Product")

// }


//calculator;
// function getNumber(num){
//     var result = document.getElementById("result")
//     result.value += num;
// }

// function clearResult(){
//     var result = document.getElementById('result')
//     result.value = ""
// }
// function getResult(){
//     var result = document.getElementById('result');
//     result.value = eval(result.value);
// }

// function readMore(){
//     var text = document.getElementById("text")
//     var pera = document.getElementById("pera").innerHTML;
//     text.innerHTML = pera
// }

// function big(){
//     var img = document.getElementById("img");
//     img.className = "big"
// }

// function out(){
//     var img = document.getElementById("img");
//     img.className = "out"
// }


// function changeImage(id,src){
//     var image = document.getElementById(id);
//     image.src = src
// }


// function submit1(){
//     var form2 = document.getElementsByClassName('form1');
//     document.write(form2.value);

// }


// function submitBtn(){
//     var val = document.getElementById('val');
//     var val1 = document.getElementById('val1');
//     var val2 = document.getElementById('val2');
//     var val3 = document.getElementById('val3');
//     var val4 = document.getElementById('val4');
//     var val5 = document.getElementById('val5');

//     document.write(val.value )
//     document.write(val1.value)
//     document.write(val2.value)
//     document.write(val3.value)
//     document.write(val4.value)
//     document.write(val5.value)
// }

var p = document.createElement('p');
var text = document.createTextNode('This is Paragraph');
var main = document.getElementById('main');
p.appendChild(text);
main.appendChild(p);