// function insertion_sort(arr){
//     for(let i=0;i<arr.length;i++){
//         let temp=i+1;
//         for(let j=0;j<=i;j++)
//             while (arr[j]>arr[temp]){
//                  [arr[j],arr[temp]]=[arr[temp],arr[j]];
//             }
//     }
//     return arr;
// }


function insertion_sort(arr){
    for(let i=1;i<arr.length;i++){
        let temp=arr[i];
        let j=i-1;
        while(j>=0 && arr[j]>temp){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=temp;
    }
    return arr;
}
let array =[5,4,3,2,1];
console.log(insertion_sort(array));