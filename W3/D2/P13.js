//function scope
function scope(){
    var insideVar = 10;
    let insideLet = 20;
    const insideConst = 30;
    console.log(insideVar); //10
    console.log(insideLet);//20
    console.log(insideConst);//30
}
scope();
//  console.log(insideVar); //Function scoped
//  console.log(insideLet);//block scoped
//  console.log(insideConst);//block scoped

function varFunctionScoped(){
    if(true){
        var x = 40;
        let y = 50;
    }
    console.log("x:",x); //40
    console.log("y:",y); //ReferenceError: y is not defined 
}
varFunctionScoped();