// let myComputer = {
//     type: "laptop",
//     brand: "HP",
//     cpu: "Intel i7 7th gen",
//     card: "NVIDIA Geforce GTX",
//     start: function () {
//         console.log("Startup");
//     }
// }

// myComputer.ram = "16GB";
// myComputer.brand = "HP Pavillion";
// delete myComputer.card;

// console.log(myComputer.brand);
// console.log(myComputer["cpu"]);

// myComputer["start"]();
// myComputer.start();

// myComputer.mouse = {
//     brand: "Logitech",
//     model: "230",
//     price: 100000,
// }

// console.log(myComputer);

// for (let k in myComputer) {
//     console.log(k);

// }

// let salaries = {
//   anna: 1000,
//   john: 1200,
//   phoebe: 2000,
//   brian: 1500,
//   dianna: 1100,
//   min: function () {
//     console.log(this.anna);
//   },
// }

// function remove(obj, key) {
//   let copy = Object.assign({}, obj);
//   delete copy[key];
//   return copy;
// }

// console.log(remove(salaries, "anna"));
// console.log(salaries);

// let a = { x: 1, y: 2 };
// let b = { x: 1, y: 2 };
// function isEqual(obj1, obj2) {
//   for (let k in obj1) {
//     if (!(k in obj2) || obj1[k] != obj2[k]) {
//       return false;
//     }
//   }

//   for (let k in obj2) {
//     if (!(k in obj1) || obj1[k] != obj2[k]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isEqual(a, b));

let a = { x: 1, y: 2 };
let b = { x: 1, z: 2 };

function intersection(obj1, obj2) {
  let objReturn = {};
  for (let k in obj1) {
    if ((k in obj2 && obj1[k] = obj2[k])) {
      objReturn[k] = obj1[k];
    }
  }
  return objReturn;
}

console.log(intersection(a, b));

// function input(obj) {
//     for (; ;) {
//         let name = prompt("Nhập tên nhân viên:");
//         let salary = prompt("Lương của " + name);

//         if (name == null || salary == null || name == "" || salary == "") {
//             break;
//         } else {
//             obj[name] = Number(salary);
//         }
//     }

// }
// input(salaries);

// function edit(obj) {
//   for (;;) {
//     let name = prompt("Tên nhân viên:");
//     let salary = prompt("Lương của " + name);

//     if (name == null || salary == null || name == "" || salary == "") {
//       break;
//     } else if (name in obj) {
//       obj[name] = Number(salary);
//     } else {
//         alert("không có nhân viên " + name);
//     }
//   }
// }

// edit(salaries);

// function total(obj) {
//     let sum = 0;
//     for (let k in obj) {
//         sum += obj[k];
//     }
//     return sum;
// }

// console.log(total(salaries));

// function minmax(obj) {
//     let min = Infinity;
//     let max = 0;
//     let maxName, minName;
//     let result = {};
//     for (let k in obj) {
//         if (obj[k] > max) {
//             max = obj[k];
//             maxName = k;
//         }

//         if (obj[k] < min) {
//             min = obj[k];
//             minName = k;
//         }
//     }
//     result[maxName] = max;
//     result[minName] = min;
//     return result;
// }

// minmax(salaries);

// function avg(obj) {
//   let sum = 0;
//   let count = 0;
//   for (let k in obj) {
//     sum += obj[k];
//     count++;
//   }
//   return sum / count;
// }

// console.log(avg(salaries));
