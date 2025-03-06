let arr = [2, 1, 7, 1, 1, 8, 6, 2, 2, 7]
let n = arr.length
arr.sort()
for (let i = 0; i < n; i++) {
    let check = 0
    for (let j = 0; j < n; j++) {
        if (arr[i] == arr[j]) {
            check++
        }
    }
    arr.splice(i, check - 1)
}
console.log(arr)