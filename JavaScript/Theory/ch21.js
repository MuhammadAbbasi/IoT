cities = ["lahore","karachi","islamabad","Quetta","Larkana","Pehawar"];
check = "Thatta";

for(var i = 0; i < cities.length; i++){
    if (check.toLowerCase() === cities[i].toLowerCase()){
        console.log("Found in list");
    }
    else{
        console.log("Not Found")
    }
} 