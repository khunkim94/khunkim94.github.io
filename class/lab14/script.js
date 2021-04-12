// Hàm random số bất kỳ từ 0 -> n

function rand(n) {
    return Math.floor(Math.random() * n);
}

// Viết hàm chuyển đổi một số từ hệ cơ số này sang hệ cơ số khác.
// // Ví dụ
// // Chuyển giá trị 255 từ cơ số 10 sang 16
// convert(255, 10, 16); // “ff”

function convert(value, from, to) {
    let temp = parseInt(value, from);
    return temp.toString(to);
}

// Viết hàm tạo một số nguyên ngẫu nhiên trong khoảng từ a -> b
// // Ví dụ
// rand(10, 100); // 34

function rand(a, b) {
  return Math.floor(Math.random() * ((b-a) + a));
}

// Viết hàm tạo mã màu HEX ngẫu nhiên
// Ví dụ
// hex(); // “fea34f”

function hex() {
    return Math.floor(Math.random() * 255 * 255 * 255).toString(16);
}

// Viết hàm chuyển đổi một tên thành tên viết tắt.
// Ví dụ
// abbr(“Ba Nguyễn”); // “Ba N.”

function abbr(name) {
    let space = name.indexOf(" ");
    name = name.slice(0, space + 2);
    return name + ".";
}

// Viết hàm ẩn địa chỉ email.
// Ví dụ
// hide(“banguyen@techmaster.vn”); // “ba…@techmaster.vn”

function hide(email) {
    let domain = email.indexOf("@");
    domain = email.slice(domain);
    
    let pre = email.slice(0, 2);

    return pre + "..." + domain;
}

// Viết hàm in ra thứ viết tắt, tương ứng với ngày hiện tại.
// Ví dụ
// dayOfWeek(date); // "T2"

function dayOfWeek(date) {
    let day = date.getDay();
    if (day == 0) {
        return "CN";
    } else if (day == 1) {
        return ("T2");
    }
}

// Viết hàm trả về ngày trước ngày hiện tại n ngày
// Ví dụ
// getDateBefore(date, 4); // "2020-02-10" -> "2020-02-06"

function getDateBefore(date, n) {
    let nowDate = date.getDate();
    return new Date(date.setDate(nowDate - n));
}

a = [1, 2, 5, 3, 6, 8, 11, 12]

a.sort(function (a, b) {
    return a - b;
})

arr = [
    { name: "Ba", age: 29 },
    { name: "Hạnh", age: 30 },
    { name: "Ngoc", age: 27 },
    {name: "Tú Anh", age: 22},
]

arr.forEach(function (i) {
    console.log(i.name + ": " + i.age);
})

arr.filter(function (i) {
    if (i.age > 25) {
        return true;
    } else {
        return false;
    }
})

let newArray = [];
for (let i of arr) {
    newArray.push(i.age*10);
}

arr.map(function (i) {
    return i.age * 10;
})

let sum = 0;
for (let i of arr) {
    sum += i.age;
}

arr.reduce(function (sum, i,) {
    sum += i.age;
    return sum;
}, 0);