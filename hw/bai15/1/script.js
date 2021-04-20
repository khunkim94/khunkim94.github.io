// 1. Thay đổi title trang thành Họ tên
document.title = "Ngoc Le"

// 2. Tách đoạn văn bản cho sẵn thành 2 (cắt chỗ từ 'nemo?'), đặt vào trong thẻ p
let text = document.body.firstChild.textContent;
let seperator = text.textContent.indexOf("?") + 1;
let p1 = "<p>" + text.textContent.slice(0, seperator) + "</p>";
let p2 = "<p>" + text.textContent.slice(seperator + 1) + "</p>";

text.remove();

document.body.innerHTML = p1 + p2 + document.body.innerHTML;
// 3. Đếm xem có bao nhiêu từ có độ dài lớn hơn 8 ký tự, thêm mã HTML vào trang
// <p>Số từ có độ dài lớn hơn 8: ...</p>
// bên dưới 2 đoạn văn bản bên trên
p1 = document.body.firstElementChild;
p2 = p1.nextElementSibling;

p1Text = p1.textContent.trim();
p2Text = p2.textContent.trim();

p1Text = p1Text.replaceAll(",", "");
p1Text = p1Text.replaceAll(".", "");
p1Text = p1Text.replaceAll("?", "");
p1Text = p1Text.replaceAll("\n", "");

let str = p1Text.split(" ").filter(function (word) {
    return word.length > 8;
})

p2Text = p2Text.replaceAll(",", "");
p2Text = p2Text.replaceAll(".", "");
p2Text = p2Text.replaceAll("?", "");
p2Text = p2Text.replaceAll("\n", "");

str = str.concat(p2Text.split(" ").filter(function (word) {
    return word.length > 8;
})
);

let result = "<p> Số từ có độ dài lớn hơn 8: " + str.length + "</p>"
p1.remove();
p2.remove();

document.body.innerHTML = p1 + p2 + result + document.body.innerHTML;

// 4. Highlight các từ đó, sử dụng thẻ <mark> hoặc thẻ <span class...>

p1 = document.body.firstElementChild;
p2 = p1.nextElementSibling;

str.forEach(function (word) {
    p1.innerHTML = p1.innerHTML.replaceAll(word, "<mark>" + word + "</mark>");
    p2.innerHTML = p2.innerHTML.replaceAll(word, "<mark>" + word + "</mark>")
});

// 5. Thay thế nội dung các từ đó thành 'Thầy Ba đẹp trai 🧡'
Array.from(p1.children).forEach(function (el) {
    el.textContent = "Ngoc Le"
})

Array.from(p2.children).forEach(function (el) {
  el.textContent = "Ngoc Le";
});
// 6. Thêm src và alt cho thẻ img, sử dụng link ảnh bất kỳ
let img = document.getElementsByTagName('img')[0];

img.src = "https://zshop.vn/images/link/63/1045.jpg?t=1474958283";
img.alt = "Blue Sky";
img.title = "Sky";