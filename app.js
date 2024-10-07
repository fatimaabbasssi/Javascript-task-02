var userinput = prompt(`choose any one option from given
     1.Forword-Counting
     2.Backword-Counting 
     OR 
     3.Math's-Table
     select options (Forword , Backword , Table)
   
    `)



// //FORWORD-COUNTING

if(userinput.toLowerCase() === 'forword'){
    document.write("<h3>COUNTING 1 to 100</h3>")
      for(var i = 1; i <= 100; i += 10){

for(var j= i; j < i + 10; j++ ){
    document.write(" " +  j + " " );

}
document.write("</br>")

}
}


//10 to 50
// else if(userinput.toLowerCase() === 'for50'){
//     document.write("<h3>COUNTING 1 to 50</h3>")
//       for(var i = 1; i <= 50; i += 10){

// for(var j= i; j < i + 10; j++ ){
//     document.write(" " +  j + " " );

// }
// document.write("</br>")

// }
// }

// //BACKWORD-COUNTING


else if(userinput.toLowerCase() === 'backword'){

    document.write("<h2>COUNTING 100 to 1</h2>")


for(var i = 100; i >= 1; i -= 10){


for(var j= i; j > i - 10; j-- ){
    document.write(" " +  j + " " );

}
document.write("</br>")
}
}

//50 to 1

// else if(userinput.toLowerCase() === 'back50'){

//     document.write("<h2>COUNTING 100 to 1</h2>")


// for(var i = 50; i >= 1; i -= 10){


// for(var j= i; j > i - 10; j-- ){
//     document.write(" " +  j + " " );

// }
// document.write("</br>")
// }
// }


// //TABLES

else if (userinput.toLowerCase() === 'table'){
    
var table = +prompt("Enter The Number of Table ");
var start = +prompt("Starting");
var end = +prompt(" Ending ");


    document.write("<h2>Table</h2>");

for(var i= start;  i<=end;  i++){
   document.write( table +  "&nbsp; &nbsp;"   + "  x  " + "&nbsp; &nbsp;"   +  i +   "&nbsp; &nbsp;"    +  "  =  " + "&nbsp; &nbsp;" +( table*i) +  "&nbsp; &nbsp; "  +  "</br>")
}

}

// // ELSE
else{

document.write('<h1>Invalid input</h1>')

}

