// Nhập số n. Kiểm tra và in số đó là chẵn hay lẻ, sử dụng toán tử logic
// let n = Number(prompt("Nhập số n"));

// // Kiểm tra số chẵn hay lẻ
// n % 2 == 0 // true -> là số chẵn

// n % 2 == 0 && console.log(n + " là số chẵn");
// n % 2 !== 0 && console.log(n + " là số lẻ");

// Nhập 2 số a,b. Kiểm tra và in số lớn hơn, sử dụng toán tử logic
// let a = Number(prompt("Nhập số a"));

// let b = Number(prompt("Nhập số b"));

// a > b && console.log(a + " là số lớn hơn");
// a < b && console.log(b + " là số lớn hơn");

// Nhập chuỗi String.Sử dụng toán tử logic kiểm tra và in ra nếu
// str = Ba-- > Tahafy ba đẹp trai
// các trường hợp khác --> thầy bà vẫn đẹp trai

// let str = prompt("Nhập chuỗi Str:");

// str === "Ba" && console.log("Thầy Ba đẹp trai");
// str !== "Ba" && console.log("Thầy Ba vẫn đẹp trai");

// Bài 3
// let a = Number(prompt("Nhập số a:"));

// if (a % 2 == 0) {
//     console.log("a là số chẵn");
// } else {
//     console.log("a là số lẻ");
// }

// Bài 4
// let a = Number(prompt("Nhập số a"));
// let b = Number(prompt("Nhập số b"));

// if (a > b) {
//     console.log(a + " là số lớn hơn");
// } else {
//     console.log(b + " là số lớn hơn");
// }

// Bài 5
// let a = Number(prompt("Nhập một tháng trong năm:"));

// if (0 < a && a < 4) {
//   console.log(a + " là mùa xuân");
// } else if (a < 7) {
//   console.log(a + " là mùa thu");
// } else if ( a < 10) {
//   console.log(a + " là mùa hè");
// } else if (a < 13) {
//   console.log(a + " là mùa đông");
// } else {
//   console.log("Không hợp lệ");
// }

// bài 6
// let a = Number(prompt("Nhập số a:"));
// if (a % 5 == 0 && a % 11 == 0) {
//     console.log(a + " chia hết cho cả 5 và 11");
// } else {
//     console.log(a + " không chia hết cho cả 5 và 11");
// }

// bài 7
let a = Number(prompt("Nhập số a"));
let b = Number(prompt("Nhập số b"));

if (a == 0 && b == 0) {
    console.log("pt vô số nghiệm");
} else if (a == 0 && b !== 0) {
    console.log("pt vô nghiệm");
} else {
    let x = (-b / a);
    console.log(x + " là nghiệm của pt");
}
