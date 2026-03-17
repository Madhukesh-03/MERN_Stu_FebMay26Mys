//Callback nesting
console.log("Starting nested callback now");

setTimeout(function(){
    console.log("Steo 1: user loaded ");

    setTimeout(function(){
        console.log("Step 2: Orders Loaded. ");

        setTimeout(function(){
            console.log("Step 3: Payments Loaded.");

            setTimeout(function(){
                console.log("Step 4:Shipment loaded .");
                console.log("We are in callback hell!!!");
            },1000);
        },800);
    },600);
},400);