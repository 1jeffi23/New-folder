function target_index(arr,target){
   
   let start=arr[0];
   let end=arr.length-1;
   while(start<=end){
     let mid=Math.floor(arr.length/2 );
    if(arr[mid]==target){
        return mid;
    }
    else if(target>arr[mid]){
        start=mid+1;
    }
    else{
        end=mid-1;
    }
   }
   return -1;

}

let array=[1,2,3,4,5];
console.log(target_index(array,3));