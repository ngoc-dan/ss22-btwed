let arr = [1,2,4,6,7]
let le = 0
let chan = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            chan =  chan +arr[i]
        } else {
            le = le + arr[i]
        }
    }
    alert("tong cac so chan la : " + chan)
    alert("tong cac so le la : " + le)