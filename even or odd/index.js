// Write a JavaScript Program whether the given Number is even or odd.
function evenOdd(){
    let input = document.getElementById("num").value;
    let ans = document.getElementById("demo");
    if(input % 2 == 0){
        ans.innerHTML = "the number is even";
    }
    else{
        ans.innerHTML = "the number is odd";
    }
}