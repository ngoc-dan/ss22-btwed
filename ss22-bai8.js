let arr = [1,8,7,8,1,9,9,2,15,15]
let sum = 0
let max = 0
arr.sort
for (let i = 0; i < 99; i++) {
    let check = 0
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] == i) {
            check++
        }
    }
    if (check > sum) {
        sum = check
        max = i
    }
}
alert(max)
