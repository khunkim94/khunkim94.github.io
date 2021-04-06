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
// let sum = 0;

// for (i = 0; i <= 100; i++) {
//   if ((i % 3 == 0) && (i % 5 == 0)) {
//     sum += i;
//   } 
// }

// console.log(sum);



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
//   for (let i = a; i <= b; i++) {
//     for (let j = 2; j <= i; j++) {
//       if (i % j == 0) {
//         break;
//       } else {
//         console.log(i);
//       }
//     }
//   }
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
// let num = Number(prompt("Nhập một số:"));
// let reverse = 0;
// let temp = num;

// while (num > 0) {
//   rem = num % 10;
//   num = parseInt(num / 10);
//   reverse = reverse * 10 + rem;
// }

// if (reverse == temp) {
//   console.log(temp + " là số Plindrome");
// } else {
//   console.log(temp + " KHÔNG phải là số Plindrome");
// }



// VCT kiểm tra và in ra một số có phải số Armstrong hay không
// let num = prompt("Nhập một số bất kỳ:");
// let temp = num;
// let sum = 0;

// while (temp > 0) {
//   // 153/10 = 3
//   let digit = temp % 10;
//   sum += digit ** 3;
//   temp = parseInt(temp / 10);
// }
// if (sum == num) {
//   console.log(num + " là số Amstrong");
// } else {
//   console.log(num + " không phải là số Amstrong")
// }



// VCT tính và in ra giai thừa Factorial của một số
// let num = prompt("Nhập số bất kỳ:");
// let fact = 1;
// if (num == 0) {
//   console.log("Giai thừa của " + num + " là 1");
// } else if (num < 0) {
//   console.log("Không có giai thừa hợp lệ");
// } else {
//   for (let i = 1; i <= num; i++){
//     fact = fact * i;
//   }
//   console.log(" Giai thừa của " + num + " là " + fact);
// }




// VCT kiểm tra và in ra một số có phải số Perfect hay không
// let num = Number(prompt("Nhập số bất kỳ"));
// let s = 0;
// let temp = num;

// for (let i = 1; i <= parseInt(num/2); i++) {
//   if (num % i == 0) {
//     s = s + i;
//   }
// }

// if (s == num) {
//   console.log(num + " là số Perfect");
// } else {
//   console.log(num + " KHÔNG phải là số Perfect");
// }




// VCT kiểm tra và in ra một số có phải số Strong hay không
// let num = Number(prompt("Nhập số bất kỳ:"));
// let originalNum = num;
// let sum = 0;

// while (num > 0) {
//   fact = 1;
//   lastdigit = num % 10;
//   for (i = 1; i <= lastdigit; i++){
//     fact = fact * i;
//   }
//   sum = sum + fact;
//   num = parseInt(num / 10);
// }
// if (originalNum == sum) {
//   console.log(originalNum + " là số Strong");
// } else {
//   console.log(originalNum + " KHÔNG phải là số Strong");
// }