let numbers = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7]
let n =+prompt("nhap so can kiem tra")
let sum = 0
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] == n){
        sum++
    }
}
if (sum == 0){
    alert("so " + n + " khong ton tai")
}else{
    alert("so " + n + " suat hien " + sum +" lan trong mang")
}