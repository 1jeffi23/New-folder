function count(str) {
    let map = new Map();
    for (let i = 0; i < str.length; i++) {
        if (map.has(str[i])) {
            map.set(str[i]) + 1;
        } else {
            map.set(str[i], (map.get(str) || 0) + 1);
        }
    }
    for (let j = 0; j < str.length; j++) {
        if (map.get(str[j]) == 1) {
            return str[j];
        }
    }
}
let str = "abbccddeffeag";
console.log(count(str));