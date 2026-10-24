function scnd_largest(arr){
    let largest=arr[0];
    let scnd_largest=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            scnd_largest=largest;
            largest=arr[i];
        }
        else if(scnd_largest==largest){
            scnd_largest=arr[i+1];
        }
        else if( arr[i]>scnd_largest  && arr[i]!==largest){
            scnd_largest=arr[i];
        }
    }
    return scnd_largest;
}

let array=[7,4,5,6,3];
console.log(scnd_largest(array));