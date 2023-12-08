// Bài 5: Viết chương trình tính lãi ngân hàng (lãi mẹ đẻ lại con) khi biết số tiền ban đầu, số tháng cho vay và lãi xuất hàng tháng.

function tinhtoan(){
    let a = parseFloat(document.getElementById('sotiengui').value);
    let b = parseInt(document.getElementById('sothanggui').value);
    let c = parseFloat(document.getElementById('tilelai').value);
    let tonglai = 0;
    let tongtien = 0;
    let laikep = a;

     for(i = 1; i <= b; i++){
        tonglai = (laikep * c)/100;
        laikep += tonglai
        
    }
    tongtien = tonglai + a
    
    document.write( "tổng lãi là: " +tonglai.toFixed(2) + "<br />")
    document.write( "tổng tiền là: " + tongtien.toFixed(2))
}