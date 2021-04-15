// Hàm random số bất kỳ từ 0 -> n

// function rand(n) {
//     return Math.floor(Math.random() * n);
// }

// Viết hàm chuyển đổi một số từ hệ cơ số này sang hệ cơ số khác.
// // Ví dụ
// // Chuyển giá trị 255 từ cơ số 10 sang 16
// convert(255, 10, 16); // “ff”

// function convert(value, from, to) {
//     let temp = parseInt(value, from);
//     return temp.toString(to);
// }

// Viết hàm tạo một số nguyên ngẫu nhiên trong khoảng từ a -> b
// // Ví dụ
// rand(10, 100); // 34

// function rand(a, b) {
//   return Math.floor(Math.random() * ((b-a) + a));
// }

// Viết hàm tạo mã màu HEX ngẫu nhiên
// Ví dụ
// hex(); // “fea34f”

// function hex() {
//     return Math.floor(Math.random() * 255 * 255 * 255).toString(16);
// }

// Viết hàm chuyển đổi một tên thành tên viết tắt.
// Ví dụ
// abbr(“Ba Nguyễn”); // “Ba N.”

// function abbr(name) {
//     let space = name.indexOf(" ");
//     name = name.slice(0, space + 2);
//     return name + ".";
// }

// Viết hàm ẩn địa chỉ email.
// Ví dụ
// hide(“banguyen@techmaster.vn”); // “ba…@techmaster.vn”

// function hide(email) {
//     let domain = email.indexOf("@");
//     domain = email.slice(domain);

//     let pre = email.slice(0, 2);

//     return pre + "..." + domain;
// }

// Viết hàm in ra thứ viết tắt, tương ứng với ngày hiện tại.
// Ví dụ
// dayOfWeek(date); // "T2"

// function dayOfWeek(date) {
//     let day = date.getDay();
//     if (day == 0) {
//         return "CN";
//     } else if (day == 1) {
//         return ("T2");
//     }
// }

// Viết hàm trả về ngày trước ngày hiện tại n ngày
// Ví dụ
// getDateBefore(date, 4); // "2020-02-10" -> "2020-02-06"

// function getDateBefore(date, n) {
//     let nowDate = date.getDate();
//     return new Date(date.setDate(nowDate - n));
// }

// a = [1, 2, 5, 3, 6, 8, 11, 12]

// a.sort(function (a, b) {
//     return a - b;
// })

// arr = [
//     { name: "Ba", age: 29 },
//     { name: "Hạnh", age: 30 },
//     { name: "Ngoc", age: 27 },
//     {name: "Tú Anh", age: 22},
// ]

// arr.forEach(function (i) {
//     console.log(i.name + ": " + i.age);
// })

// arr.filter(function (i) {
//     if (i.age > 25) {
//         return true;
//     } else {
//         return false;
//     }
// })

// let newArray = [];
// for (let i of arr) {
//     newArray.push(i.age*10);
// }

// arr.map(function (i) {
//     return i.age * 10;
// })

// let sum = 0;
// for (let i of arr) {
//     sum += i.age;
// }

// arr.reduce(function (sum, i,) {
//     sum += i.age;
//     return sum;
// }, 0);

// 1. Cho một mảng số, viết hàm tính trung bình cộng tất cả phần tử trong mảng
// Ví dụ
// avg([1, 2, 3]); // 2.0

// function avg(input) {
//     output = 0;
//     for (i = 0; i < input.length; i++) {
//         output += Number(input[i]);
//     }
//     return output / input.length;
// }

// 2. Cho một mảng số, viết hàm tìm giá trị lớn nhất trong mảng, kết quả trả về bao gồm giá trị và chỉ mục tương ứng
// Ví dụ
// maxOfArr([1, 2, 3]); // {index: 2, value: 3}

// function maxOfArray(input) {
//     let value = Math.max.apply(Math, input);
//     let index = input.indexOf(value);
//     return "index: " + index + ", " + "value: " + value;
// }

// 3. Cho một mảng số viết hàm tìm số lớn thứ 2 trong mảng
// Ví dụ
// secondValue([1, 3, 2, 4, 0, 4]); // 3

// function secondValue(input) {
//     let sort = input.sort();
//     max = sort[0];
//     for (i = 0; i < sort.length; i++) {
//         if (max > sort[i]) {
//             secondMax = sort[i];
//             break;
//         }
//     }
//     return secondMax;
// }

//  4. Viết hàm chuyển đổi một chuỗi thành dạng capitalize.
// Ví dụ
// cap("hello world"); // "Hello World"

function cap(str) {
  let strArr = str.split(" ");
  for (let i = 0; i < strArr.length; i++) {
    let charArr = strArr[i].split(" ");
    charArr[0] = charArr[0].toUpperCase();
    strArr[i] = charArr.join(" ");
  }
  return strArr.join(" ");
}

// 5. Viết hàm tìm số phần tử xuất hiện nhiều lần nhất trong mảng
// Ví dụ
// most([1, 2, 3]); // 2.0

//  6. Viết hàm cắt chuỗi thành một mảng có độ dài chỉ định.
// Ví dụ
// slide("Hello", 2); // ["He", "ll", "o"]

// 7. Viết hàm tách chuỗi thành một mảng các chuỗi con
// Ví dụ
// breakWord("dog"); // ["d", "do", "dog", "og", "g"]

//  8. Viết hàm loại bỏ các giá trị “false” khỏi mảng.
// Ví dụ
// removeFalsy([null, "", 0, false, 1]); // [1]

//  9. Viết hàm lấy một phần tử ngẫu nhiên trong mảng
// Ví dụ
// removeFalsy([null, "", 0, false, 1]); // [1]

//  10. Viết hàm sắp xếp mảng với vị trí ngẫu nhiên (xáo trộn mảng)
// Ví dụ
// shuffle([1, 2, 3, 4]); // [1, 3, 4, 2]
