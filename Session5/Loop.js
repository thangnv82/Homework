   // bài 1
// for (let i = 0; i <=100; i++) {
//     console.log(i);
// }

   // bài 2
// for (let i = 100; i >=0; i-=1) {
//     console.log(i);  
// }

   // bài 3
//    for (let i = 0; i <=100; i+=2) {
//        console.log(i);   
//    }

//    for (let i = 1; i <=100; i+=2) {
//       console.log(i);
//    }

   //bài 4
//    for (let i = 100; i >=0; i-=2) {
//        console.log(i);
//    }

//    for (let i = 99; i >=0; i-=2) {
//        console.log(i);
//    }

   // bài 5
// let n = prompt("Nhập vào số n:");
// let s = 0;
// for (let i = 0; i <=n; i++) {
//     s = s + i;
//     console.log(i);
// }
// console.log(s) ;


   // bài 6
// let n = 4
// let s = 0
// for (let i = 1; i <=(2 * n + 1); i+=2) {
//     console.log(i);
//     s = s + i;
// }
// console.log(s);


   // bài 7
//    let n = 5;
//    let s = 0;
//    for (let i = 2; i <=( 2 * n); i+=2) {
//        console.log(i);
//        s = s + i;
//    }
//    console.log(s);


   //bài 8
// let n = 4
// let s = 0
// for (let i = 1; i <= n; i++) {
//     console.log(i);
//     s = s + 1 / i;
// }
// console.log(s);


   // bài 9
// let n = 4
// let s = 0
// for (let i = 1; i <=4; i++) {
//     s = s + (1 / (i * (i + 1)));
//     console.log(i);
    
// }
// console.log(s);


   // bài 10
    let n = parseInt(prompt(" nhập vào số n:"))
   function f(n) {
    var s = 0;
    if(n == 0) return(s);
    if(n == 1) {
    s += 1;
    return(s);
    }
    else {
    return(f(n - 1) + f(n - 2));
       }
    }
    function show(n) {
    var i;
    for(i = 0; i <= n; i++) {
    f1.s.value += "  " + f(i);
       }
    }
console.log(f(n));


   // bài 11

   