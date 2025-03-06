let numbers = [2,7,4,9,5,3]
let num = +prompt("nhp so can kiem tra")
let check = false
for (let i= 0;i< numbers.length;i++){
        if (numbers[i]==num){
            check = true
        }
}
if(check == true ){
    alert("bingo")
}else if(check ==false){
    alert("chúc bạn may mắn lần sau")
}