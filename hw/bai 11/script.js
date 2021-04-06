// VCT in ra nếu số chia hết cho 3 thì in Fizz, chia hết cho 5 thì in Buzz, chia hết cho cả 3 và 5 thì in FizzBuzz, không chia hết cho cả 3 và 5 thì in BizzFuzz, trong khoảng 0 -> 50

// for (let i = 1; i <= 50; i++) {
//     if ((i % 3 == 0) && (i % 5 == 0)) {
//         console.log("FizzBuzz");
//     } else if (i % 3 == 0) {
//         console.log("Fizz");
//     } else if (i % 5 == 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

// VCT tính và in ra tổng bội chung của 3 và 5 trong khoảng 0 -> 100

// VCT nhập vào một số n, kiểm tra số đó có phải số nguyên tố hay không và in ra kết quả
// let n = Number(prompt("Nhập số n:"));

// if (n < 2) {
//     console.log(n + " KHÔNG phải số nguyên tố");
// } else if (n == 2) {
//     console.log(n + " là số nguyên tố");
// } else {
//     for (i = 3; i <= Math.sqrt(n); i++) {
//         if (n % i == 0) {
//             console.log(n + " KHÔNG phải số nguyên tố");
//         } else {
//             console.log(n + " là số nguyên tố");
//         }
//     }
// }

// VCT nhập vào 2 số a, b kiểm tra và in ra các số nguyên tố trong khoảng a -> b

// let a = Number(prompt("Nhập số a:"));
// let b = Number(prompt("Nhập số b:"));

// if (a >= b) {
//     console.log("Không hợp lệ");
// } else {
//     for (i = a; i <= b; i++) {
//         if (i < 2) {
//             continue;
//         } else for (j = 2; j <= Math.sqrt(i); j++) {
//             if (j % i == 0) {
//                 continue;
//             } else {
//                 console.log(j);
//             }
//         }
//     }
// }

// VCT in ra bảng cửu chương ngược (từ 10 -> 1)

// let sum = 0;
// for (let i = 10; i >= 1; i--) {
//     // i = 1 -> 10
//     // i * 1 -> 10
//     let s = "";

//     for (let j = 10; j >= 1; j--) {
//         s += i * j + " ";
//     }

//     console.log(s)
// }

// VCT in ra chữ số đầu và cuối của một số. VD 12345 -> 15

// VCT kiểm tra và in ra một số có phải số Palindrome hay không

let n = Number(prompt("Nhập số bất kỳ:"));
let sum = 0;

for (i = n; n != 0; n = n / 10) {
  r = n % 10;
  sum = sum * 10 + r;
}

if (i == sum) {
  console.log(n + " là số Palindrome");
} else {
  console.log(n + " KHÔNG phải là số Palindrome");
}

// VCT kiểm tra và in ra một số có phải số Armstrong hay không

// VCT tính và in ra giai thừa Factorial của một số

// VCT kiểm tra và in ra một số có phải số Perfect hay không

// VCT kiểm tra và in ra một số có phải số Strong hay không
