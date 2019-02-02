// Assignment 3

document.getElementById('button').addEventListener('click', function (e) {
 
    let params = new URLSearchParams();
    params.set('number', document.getElementById('iptNum').value);

    fetch('/getData?' + params.toString())
        .then(function (response) {
            return response.text();
        })
        .then(function (html) {
            let parser = new DOMParser();
            let data = parser.parseFromString(html, 'text/html');
            let result = document.getElementById('result');
            result.innerHTML = data.getElementById('content').innerHTML;
        }).catch(function(err) {  
            result.innerHTML = '<p>Fetch failed</p>';
            console.log(err);
        })
}, false)
