flag=true;
function toilety() {
    var toilet = [];
    
    
    if (flag==true) {
        document.getElementById("demo").innerHTML = "hello world!";
        flag=false;
    }else{
        document.getElementById("demo").innerHTML = "bye world!";
        flag=true;
    }
    for (let index = 0; index < 9; index++) {
        toilet[index] = index + index + 1;
        console.log(toilet[index]);
    }






    console.log("hello world.")
    console.log(toilet);

}

