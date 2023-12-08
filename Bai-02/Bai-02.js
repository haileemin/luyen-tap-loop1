// Bài 2: Tính giai thừa của một số nguyên dương

let n = prompt("Số cần tính giai thừa là: ");
let total = 1;
for (i = 1; i <= n; i++) {
    total = total * i;
} 
document.write(total);