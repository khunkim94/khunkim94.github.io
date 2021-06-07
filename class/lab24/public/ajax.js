export default function (method, uri,, body, onerror, onsuccess) {
    const xhr = new XMLHttpRequest();

    xhr.responseType = "json";

    xhr.open(methos, uri);

    xhr.onerror = onerror ? onerror : () => console.log("Cannot send request");

    xhr.onload = () => {
        let header = xhr.getAllResponseHeaders();
        let data = xhr.response;

        onsuccess(data);
    };

    xhr.send(body);
}