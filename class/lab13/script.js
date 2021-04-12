// let student = {
//     name: "Ba",
//     get age() {
//         return this._age;
//     },
//     set age(value) {
//         if (15 < value && value < 25) {
//             this._age = value;
//         } else {
//             console.log("Tuổi không hợp lệ!");
//         }
//     }
// };

// function Student(name, age, gender, address, phone) {
//     // let obj = {};
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.address = address;
//     this.phone = phone;
//     this.hello = function () {
//         console.log("Hi, I'm " + this.name);
//     };
//     this.toString = function () {
//         return this.name;
//     };
//     this.valueOf = function () {
//         return this.age;
//     }
//     // return obj;
// }

// let Linh = new Student("Linh", 23, male, "123", "456");

// Viết hàm khởi tạo Weapon(name, type, damage) khởi tạo các object weapon
// function Weapon(name, type, damage, speed) {
//     // VD
//     name = Thợ Săn
//     type = Súng
//     damage = 1000
//     speed = 1.5
// }

// 1. Thêm phương thức toString() cho Weapon trả về loại - tên vũ khí. VD: Súng Thợ Săn

// 2. Thêm phương thức valueOf() cho Weapon trả về damage * speed

// Viết hàm khởi tạo Character(name, level, weapon) khởi tạo các object character, weapon là một object được tạo từ Weapon()

// function Character(name, level, weapon) {
// VD
// name = phoebe
// level = 1
// weapon = sungThoSan
// }

// 3. Thêm phương thức attack() cho Character in ra lượng sát thương gây ra tương ứng với weapon damage và speed

// 4. Thêm phương thức changeWeapon(newWeapon) cho Character thay đổi weapon cho character tương ứng với tham số newWeapon

// function Weapon(name, type, damage, speed) {
//   this.name = name;
//   this.type = type;
//   this.damage = damage;
//   this.speed = speed;
//   this.toString = function () {
//     return this.type + " " + this.name;
//   };
//   this.valueOf = function () {
//     return this.damage * this.speed;
//   };
// };

// let sungThoSan = new Weapon("Thợ Săn", "Súng", 1000, 2.0);
// let mocDietThuyQuai = new Weapon("Diệt Thủy Quái", "Móc", 2000, 1.5);

// function Character(name, level, weapon) {
//   this.name = name;
//   this.level = level;
//   this.weapon = weapon;
//   this.attack = function () {
//     console.log("Sát thương gây ra: " + this.weapon.valueOf());
//   };
//   this.changeWeapon = function (newWeapon) {
//     this.weapon = newWeapon;
//   };
// };

// let phoebe = new Character("Phoebe", 1, sungThoSan);

// Viết hàm khởi tạo Calculator(), có các phương thức:
// get(a, b) nhận vào 2 số a, b lưu vào 2 prop a, b tương ứng
// add() trả về tổng a + b
// sub() trả về hiệu a - b
// div(), mul(), rem(), exp(), … trả về kết quả phép tính tương ứng

// Làm thế nào để cho phép gọi hàm theo chuỗi
// VD cal.get(4,5).add(); // 9

// function Calculator() {
//     this.get = function () {
//         this.a = a;
//         this.b = b;
//         return this;
//     };
//     this.add = function () {
//         return this.a + this.b;
//     };
//     this.sub = function () {
//         return this.a - this.b;
//     };
//     this.div = function () {
//         return this.a % this.b;
//     };
//     this.mul = function () {
//         return this.a * this.b;
//     };
//     this.rem = function () {
//         return this.a / this.b;
//     };

// }

// let cal = new Calculator();
// console.log(cal.get(4, 5).add());

// Viết hàm tạo Counter(count), count mặc định = 0, và các phương thức
// up() tăng count lên 1
// down() giảm count 1
// get() in ra count hiện tại

// Làm thế nào để cho phép gọi hàm theo chuỗi VD counter.up().up().get().down().get();

// function Counter(count) {
//   this.count = count || 0;
//   this.up = function () {
//     this.count++;
//     return this;
//   };
//   this.down = function () {
//     this.count--;
//     return this;
//   };
//   this.get = function () {
//     console.log("Current: " + this.count);
//     return this;
//   };
// }

// Viết hàm tạo Rectangle(wide, long, unit) nhận vào 3 tham số tương ứng với chiều rộng / dài / đơn vị (m, km) của hình chữ nhật

// function Rectangle(wide, long, unit) {
//   this.wide = wide;
//   this.long = long;
//   this.unit = unit;
//   this.toString = function () {
//     return (
//       "Hình chữ nhật, " + this.long + this.unit + ", " + this.wide + this.unit
//     );
//   };
//   this.chuVi = function () {
//     return 2 * (this.long + this.wide);
//   };
//   this.dienTich = function () {
//     return this.long * this.wide;
//   };
// };


// Triển khai các phương thức getter setter cho wide/long (phải lớn hơn 0), unit (phải là một trong các đơn vị m, km)

function Rectangle(wide, long, unit) {
  return {
    _wide: wide,
    _long: long,
    _unit: unit,
    get unit() {
      return this._unit;
    },
    set unit(newValue) {
      if ((newValue == "m" || newValue = "km")) {
        this._unit = newValue;
      }
    },
    get wide() {
      return this._wide;
    },
    set wide(newValue) {
      if (newValue > 0) {
        this._wide = newValue;
      }
    },
    get long() {
      return this._long;
    },
    set long(newValue) {
      if (newValue > 0) {
        this._long = newValue;
      }
    },
    toString() {
      return (
        "Hình chữ nhật, " + this.long + this.unit + ", " + this.wide + this.unit
      );
    },
    valueOf() {
      return this.long * this.wide;
    }
  };
}

// Triển khai phương thức phù hợp để in được object ra theo mẫu: String(rect) -> hình chữ nhật, chiều dài x m, rộng y m

// Triển khai phương thức phù hợp để so sánh được 2 object rect1 > rect2 -> true/false

// Triển khai các thức trả về chu vi, diện tích hình chữ nhật
