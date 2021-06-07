import ajax from "./ajax.js";

const STUDENT_PER_PAGE = 5;
const xhr = new XMLHttpRequest();

xhr.responseType = "json";

let method = "GET";
let uri = '/students?_page=1&_limit=${STUDENT_PER_PAGE}';

ajax(method, uri, null, (header, data) => {
    let html = data.map((s) => {
        return `<tr>
                <th scope="row">${s.id}</th>
                <td>${s.first_name}</td>
                <td>${s.last_name}</td>
                <td>${s.email}</td>
                <td>${s.phone}</td>
                <td>
                  <a href="students.html?student_id=1"
                    ><i class="bi bi-info-square"></i
                  ></a>
                </td>
              </tr>`
    })
        .join("");
}

// xhr.send(null);