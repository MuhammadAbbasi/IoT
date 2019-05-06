var arr1 = [1,2,3,4,2,4,6,213,55,4,36,3];
var check = 3
var len = arr1.length;
flag = false;

for(var a = 0; a<len; a++)
{
    if(check === arr1[a]){
        flag = true;
        console.log("Found at: "+(a+1));
    }
    
}
if (flag === false){
    console.log("Not found!");
}