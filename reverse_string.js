function reverse_str(str){
    let start=0;
    let end=str.length-1;
    let temp;
    str=str.split("");    //we cannot swap char of array so we first convert it into array
                          // and then into string using join
    while(start<end){
        [str[start],str[end]]=[str[end],str[start]];   //can also use destruturing to swap
        start++;
        end--;
       
    }
    return str.join("");
}
let str="121";

let reverse=reverse_str("121");
if(str==reverse){
   console.log( `${str} is palindrom`);
}
else{
    console.log( `${str} is not a palindrom`);
}