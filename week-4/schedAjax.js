// Assignment 1

function delayedResult(n1, n2, delayTime, callback) {
    // your code here
    let result = `${n1 + n2} (${n1}+${n2})`;
    window.setTimeout(() => callback(result), delayTime);
  }
  
  delayedResult(4, 5, 3000, function(result) {
    console.log(result);
  }); // 9 (4+5) will be shown in the console after 3 seconds
  
  delayedResult(-5, 10, 2000, function(result) {
    window.alert(result);
  }); // 5 (-5+10) will be shown in an alert dialog after 2 seconds
  
  // Assignment 2
  
  function ajax(src, callback) {
    // your code here
    fetch(src)
      .then(res => {
        return res.json();
      })
      .then(data => {
        callback(data);
      })
      .catch(err => {
        console.log(err);
      });
  }
  function render(data) {
    // your code here.
    // document.createElement() and appendChild() methods are preferred.
    let prop = ["name", "price", "description"];
    let table = document.getElementById("list");
    let fragment = document.createDocumentFragment();
    for (let r = 0; r < data.length; r++) {
      let row = document.createElement("tr");
      for (c = 0; c < 3; c++) {
        let cell = document.createElement("td");
        let text = document.createTextNode(data[r][prop[c]]);
        cell.appendChild(text);
        row.appendChild(cell);
      }
      fragment.appendChild(row);
    }
    table.appendChild(fragment);
  }
  ajax(
    "https://cwpeng.github.io/live-records-samples/data/products.json",
    function(response) {
      render(response);
    }
  ); // you should get product information in JSON format and render data in the page