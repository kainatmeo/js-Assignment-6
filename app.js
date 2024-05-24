var cityOfLights = prompt("Enter the name of city of lights");
var capital = prompt("Enter capital of Pakistan")
if(cityOfLights === "karachi"){
   document.write("Welcome to Karachi");
}
if(cityOfLights !== "karachi"){
    alert("Wrong Answer")
}

if(cityOfLights === "karachi" && capital === "islamabad"){
    alert("Correct")
}else{
    alert("Wrong Answer")
}


// task 2

var  gender= prompt("Enter your gender");
 
if( gender === "male" || gender === "other"){
   document.write(" Good morning Sir");
}
 
 else{
    document.write(" Good morning madam"); 
}




//  task 3



 
var  colour= prompt("Enter the traffic light colour");
 
if(colour === "red" ||colour === "yellow" ||colour === "Green"){
   document.write("<table border='2px'>"+ "<tr>"+ "<th>"+  "Signal Colour"
   +"</th>"
    +"<th>"+  "Massage"
   +"</th>"
   
   +
   "<tr>"+ "<td>"+  "Red"
   +"</td>"
    +"<td>"+  "Must Stop"
   +"</td"
   
   +"</tr>"  
   +
   "<tr>"+ "<td>"+  "Yellow"
   +"</td>"
    +"<td>"+  "Ready to move"
   +"</td"
   
   +"</tr>" 
   +
   "<tr>"+ "<td>"+  "Green"
   +"</td>"
    +"<td>"+  "Move now"
   +"</td"
   
   +"</tr>"                                                    
                                                      
                                                     
   
   
   
   + "</table>");
}
 
 else{
    document.write(" Good morning madam"); 
}

// task 4
var fuel = prompt("Enter the remaining fuel in your car (in litres):");

 

  

 
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
} else {
    alert("You have sufficient fuel");
}

 
 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

 

 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}

 

  if("car" < "cat"){
alert("car is smaller than cat");
}




//  task 7

var num = +prompt("Guess the secret number: ")
var secNum = 8;




if(num==secNum){
    document.write("You win!")
}else if(num== 9){
    document.write("Subtract  a number");
}else if(num==7){
    document.write(" Add a number")
}else{
    document.write("Try Again")
}

// task 8

 var userNumber = prompt("Enter a number:");

 
if (userNumber % 3 === 0) {
   
    alert("The number is divisible by 3.");
} else {
 
    alert("The number is not divisible by 3.");
}


// task 9

var userInput = prompt("Enter a number:");

 
if (userInput % 2 === 0) {
 
    alert("The number is even.");
} else {
 
    alert("The number is odd.");
}
//   task 10

 var temp= prompt("Enter the temperature:");

 
if (temp >=39){
 
    alert("It is too hot outside.");
} else if (temp > 30) {
   
    alert("The Weather today is Normal.");
} else if (temp > 20) {
    
    alert("Today’s Weather is cool.");
} else if (temp > 10) {
   
    alert("OMG! Today’s weather is so Cool.");
} else {
     
    alert("The temperature is below 10 degrees.");
}