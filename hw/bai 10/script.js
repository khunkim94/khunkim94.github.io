// Viết chương trình nhập hệ số a, b của phương trình bậc 1 ax + b = 0, tính và in ra nghiệm của phương trình. Sử dụng toán tử logic để đánh giá các trường hợp của phương trình

// let a = Number(prompt("Nhập hệ số a:"));
// let b = Number(prompt("Nhập hệ số b:"));
// let x = -b / a;
// a == 0 && b == 0 && console.log("pt vô số nghiệm");
// a == 0 && b !== 0 && console.log("pt vô nghiệm");
// a !== 0 && b !== 0 && console.log(x + " là nghiệm của pt");

// Viết chương trình nhập 3 số a, b, c. Sử dụng toán tử logic kiểm tra và in ra số lớn nhất

// let a = Number(prompt("Nhập số a:"));
// let b = Number(prompt("Nhập số b:"));
// let c = Number(prompt("Nhập số c:"));
// a > b && a > c && console.log(a + " là số lớn nhất");
// b > a && b > c && console.log(b + " là số lớn nhất");
// c > a && c > b && console.log(c + " là số lớn nhất");

// Viết chương trình nhập 3 số a, b, c bất kỳ. Kiểm tra 3 số đó có tạo thành tam giác hợp lệ hay không và in ra kết quả, sử dụng toán tử logic

// let a = Number(prompt("Nhập số a:"));
// let b = Number(prompt("Nhập số b:"));
// let c = Number(prompt("Nhập số c:"));
// (a + b) >= c && (b + c) >= a && (c + a) >= b && console.log("Ba số này là tam giác hợp lệ");
// (a + b) < c && (b + c) < a && (c + a) < b && console.log("Ba số này KHÔNG PHẢI là tam giác hợp lệ");

// VCT nhập ba số a, b, c, kiểm tra và in ra số lớn nhất

// let a = Number(prompt("Nhập số a:"));
// let b = Number(prompt("Nhập số b:"));
// let c = Number(prompt("Nhập số c:"));
// if (a > b && a > c) {
//     console.log(a + " là số lớn nhất");
// } else if (b > a && b > c) {
//     console.log(b + " là số lớn nhất");
// } else {
//     console.log(c + " là sô lớn nhất");
// }

// VCT nhập một năm Year, kiểm tra và in ra năm đó có phải năm nhuận hay không

// let a = prompt("Nhập một năm bất kỳ:");
// if (a % 400 == 0) {
//     console.log(a + " là năm nhuận");
// } else if (a % 4 == 0 && a % 100 != 0) {
//     console.log(a + " là năm nhuận");
// } else {
//     console.log(a + " KHÔNG PHẢI là năm nhuận");
// }

//  VCT nhập một ký tự char, kiểm tra và in ra ký tự đó là nguyên hay phụ âm (tiếng Anh)

// let char = prompt("Nhập một ký tự bất kỳ:");
// if (char == "a" || char == "A" || char == "e" || char == "E" || char == "i" || char == "I" || char == "o" || char == "O" || char == "u" || char == "U") {
//     console.log(char + " là nguyên âm");
// } else {
//     console.log(char + " là phụ âm");
// }

// VCT nhập một ký tự char, kiểm tra và in ra ký tự đó là chữ thường hay chữ in hoa

// let char = prompt("Nhập một ký tự bất kỳ:");
// if (char >= "a" && char <= "z") {
//     console.log(char + " là chữ THƯỜNG");
// } else {
//     console.log(char + " là chữ HOA");
// }

// VCT nhập ba hệ số a, b, c, của phương trình bậc 2 ax2 + bx2 + c = 0, tính và in ra nghiệm phương trình đó

//  VCT nhập số điểm point ở thang điểm 10 của sinh viên quy đổi sang thang điểm chữ:
// - point == 10 => A
// - point < 8.5 => B
// - point < 7.0 => C
// - point < 5.5 => D
// - point < 4.0 => F

// let point = Number(prompt("Nhập số điểm trên thang điểm 10:"));
// if (point == 10) {
//   console.log("Đây là điểm A");
// } else if (7 <= point && point < 8.5) {
//   console.log("Đây là điểm B");
// } else if (5.5 <= point && point < 7.0) {
//   console.log("Đây là điểm C");
// } else if (4 <= point && point < 5.5) {
//   console.log("Đây là điểm D");
// } else  if (point < 4) {
//   console.log("Đây là điểm F");
// } else {
//     console.log("Điểm không hợp lệ");
// }
