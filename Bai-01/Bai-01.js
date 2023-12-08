// Bài 1: In dãy Fibonaci
let a = 0;
let b = 1;
let n = countFibo = prompt("Bạn muốn thấy bao nhiêu số trong dãy Fibo: ");
for (i = 1; i <= countFibo; i++) {
    let c;
    c = a + b;
    a = b;
    b = c;
    document.write(c + "<br />");
}
