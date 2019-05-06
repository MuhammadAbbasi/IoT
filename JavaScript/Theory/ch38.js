var mult = 5;  //global


function domath()
{
    var source = 4;   //local variable

    mult = 10;

    var mult = 40;
    console.log("Result is "+mult * source);
}

console.log(mult);
domath();
console.log(mult);
console.log("a" * 3);





// LAMDA FUNCTION


var exp = function (){
    console.log("This is  anonymous  function");
}

exp();

var exp1 = () => {              // synthetic sugar
    console.log("This is  ARROW  function");        
}

exp1();


// Purity of Function

// if a function depends on external features than its not pure
// Pure function is predictable
