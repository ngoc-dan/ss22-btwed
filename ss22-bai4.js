let number = prompt("nhap day so");
if (number > 0 && number < 99999999999999) {
    let arr = number.split("");
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    alert(max + " la so lon nhat trong day so")
} else {
    alert("day khong hop le");
}