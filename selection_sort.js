function selection_sort(arr){
    for(let i=0;i<arr.length;i++){
        let smallest=i;
        for(let j=i+1;j<arr.length;j++){
             if(arr[j]<arr[i]){
                smallest=j;
             }
        }
        if(smallest!==i){
        [arr[i],arr[smallest]]=[arr[smallest],arr[i]];
        }
    }
    return arr;
}
let array=[5,4,3,2,1];
console.log(selection_sort(array));