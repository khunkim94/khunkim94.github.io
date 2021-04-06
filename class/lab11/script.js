//  Viết chương trình tính tổng từ 0 -> 100 và in ra kết quả

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum);

// Viết chương trình tính tổng tất cả số lẻ trong khoảng 0 -> 100 và in ra kết quả
// let sum = 0;
// for (let i = 1; i <= 100; i = i + 2) {
//     sum += i;
// }
// console.log(sum);

// Viết chương trình tính tổng tất cả các số lẻ chia hết cho 3 trong khoảng 0 -> 100 và in ra kết quả
// let sum = 0;
// for (let i = 0; i <= 100; i = i + 3) {
//     if (i % 2 != 0) {
//         sum += i;
//   }
// }
// console.log(sum);

// Viết chương trình tính tổng tất cả các số chia hết cho cả 3, 5 và 7 trong khoảng 0 -> 1000 và in ra kết quả

// let sum = 0;

// for (let i = 0; i <= 1000; i++) {
//     if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0) {
//         sum += i
//     }
// }
// console.log(sum);

// Viết chương trình tính tổng bình phương của tất cả các số chia hết cho 3 hoặc 5 hoặc 7 trong khoảng 0 -> 100 và in ra kết quả

//  Viết chương trình in bảng cửu chương từ 1 -> 10

// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     // i = 1 -> 10
//     // i * 1 -> 10
//     let s = "";

//     for (let j = 1; j <= 10; j++) {
//         s += i * j + " ";
//     }

//     console.log(s)
// }

// Break & continue example
// for (let i = 0; true; i++) {

//     if (i % 2 == 0) {
//         continue;
//     }

//     console.log(i);

//     if (i > 10) {
//         break;
//     }
// }

// Viết chương trình cho phép nhập số lượng số tùy ý (dừng nhập nếu input là null hoặc “”), in ra số lớn nhất và nhỏ nhất trong các số đã nhập
// let max;
// let min;

// for (let i = 0; ; i++) {
//     let j = prompt("Nhập một số bất kỳ:");
//     if (j == null || j == "") {
//         break;
//     }
//     j = Number(j);
//     if (i == 0) {
//         max = j;
//         min = j;
//     }
//     if (j >= max) {
//         max = j;
//     }
//     if (ijmin = j;
//     }
// }

// console.log("Số lớn nhất là: " + max);
// console.log("Số nhỏ nhất là: " + min);

// iết hàm maxOfThree(a, b, c) nhận vào 3 số, in ra số lớn nhất
