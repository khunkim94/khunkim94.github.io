let form = document.forms.converter;
let btn = form.elements.btnConvert;
let to = form.elements.to;
let temp = form.elements.temp;
let from = form.elements.from;
let result = form.elements.result;

function toCelcius(from, value) {
  if (from == "kevin") {
    return value - 273.15;
  } else if (from == "farenheit") {
    return (value - 32) / 1.8;
  } else {
    return value;
  }
}

function celciusTo(from, value) {
  if (from == "kevin") {
    return value + 273.15;
  } else if (from == "farenheit") {
    return value * 1.8 + 32;
  } else {
    return value;
  }
}

btn.onclick = function () {
  let c = toCelcius(from.value, Number(temp.value));
  result.value = celciusTo(to.value, c);
};
