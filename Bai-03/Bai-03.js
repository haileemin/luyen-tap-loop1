let n = 5;
for (i = 1; i <= n; i++) {
    for (a = 1; a <= i; a++ ) {
        document.write("*")
    }
    document.write("<br />");
}

for (i = 1; i <= n; i++) {
    for (a = n; a >= i; a--) {
        document.write("*");
    }
    document.write("<br />");
}

for (i = 1; i <= n; i++) {
    for (a = 1; a <= n; a++) {
        if (a <= n - i) {
            document.write("&nbsp&nbsp");
        } else {
            document.write("*");
        }
    }
    document.write("<br />");
}

for (let i = 1; i <= n; i++) {
    for (let a = 1; a < i; a++) {
        document.write("&nbsp&nbsp");
    }
    for (let b = 1; b <= n - i + 1; b++) {
        document.write("*");
    }
    document.write("<br />");
}