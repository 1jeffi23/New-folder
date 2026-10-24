function count_occurences(arr,target){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            count++;
        }
    }
    return count;
}

let array=[1,2,2,3,3,4,4,4,5,6];
console.log(count_occurences(array,7));