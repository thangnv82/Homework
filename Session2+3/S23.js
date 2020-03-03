// bài 1
let r = parseFloat(prompt("Nhập bán kính hình tròn"));
let P = 2 * r * Math.PI;
let S = r * r * Math.PI;
console.log(`Chu vi hình tròn bán kính ${r} là ${P}`);
console.log(`Diện tích hình tròn bán kính ${r} là ${S}`);

// bài 2
let d = parseFloat(prompt("Nhập chiều dài hình chữ nhật"));
let r = parseFloat(prompt("Nhập vào chiều rộng hình chữ nhật"));
let S = d * r;
let P = 2 * (d + r);
console.log(`Chu vi hình chữ nhật chiều dài ${d} chiều rộng ${r} là ${P}`);
console.log(`Diện tích hình chữ nhật chiều dài ${d} chiều rộng ${r} là ${S}`);

// bài 3a
let x = parseFloat(prompt("nhập vào giá trị của x"));
let y = 4 * (x * x + 10 * x * Math.sqrt(x + 3 * x + 1));
console.log(y);

// bài 3b
let x = parseFloat(prompt("Nhập vào giá trị của x"));
let y = (Math.sin(Math.PI * x * x) + Math.sqrt(x*x + 1)) / (Math.pow(Math.E , 2 * x) + Math.cos((Math.PI/4) * x));
console.log(y);

// bài 4
let yourMoney = parseInt(prompt("Nhập vào số tiền của bạn:"));
let a = parseInt(yourMoney / 100000);
let b = parseInt((yourMoney - a*100000) / 50000);
let c = parseInt((yourMoney - a * 100000 - b * 50000) / 20000);
let d = parseInt((yourMoney - a*100000 - b * 50000 - c* 20000) / 10000);
console.log(`${yourMoney} tiền của bạn có thể đổi thành ${a} tờ 100000, ${b} tờ 50000, ${c} tờ 20000, ${d} tờ 10000`);

//bài 5
let X = parseInt(prompt("Nhập 1 số có 3 chữ số: "));
    A = X / 100;
    B = (X % 100) / 10;
    C = X % 10; console.log(C);
    total = parseInt(A) + parseInt(B) + parseFloat(C);
console.log(`số ${X} có tổng các chữ số là: ${parseInt(A)} + ${parseInt(B)} + ${parseFloat(C)} = ${total}`);