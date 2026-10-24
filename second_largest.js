


function second_small(arr) {
    let smallest = arr[0];
    let scnd = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            scnd = smallest;
            smallest = arr[i];
        }
        else if (scnd == smallest) {

            scnd = arr[i + 1];
        }
        else if (arr[i] > smallest && scnd > arr[i]) {
            scnd = arr[i];
        }
    }
    return scnd;
}

let array = [2, 4, 6, 7];
console.log(second_small(array));