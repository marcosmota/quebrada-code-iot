function turnOnLight() {
  let ovelay = document.createElement("div");
  ovelay.className = "overlay";
  document.body.appendChild(ovelay);

  let lightElement = document.querySelector(".light");
  if (lightElement) {
    lightElement.remove();
  }

  
}

function turnOffLight() {
  let ovelay = document.querySelector(".overlay");
  if (ovelay) {
    ovelay.remove();
  }

  let light = document.createElement("div");
  let lamp = document.querySelector(".lamp");

  if (lamp) {
    light.className = "light";
    lamp.className = "lamp";
    lamp.after(light);
  }
}



const selectElement = document.querySelector("#switch");

selectElement.addEventListener("change", (event) => {
  if (event.target.checked) {
    turnOffLight();
  } else {
    turnOnLight();
  }
});


// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); 
}

postData('http://127.0.0.1:5000/switch/on')
  .then((data) => {
    console.log(data); 
  });


function switchLamp(status){
  postData('http://127.0.0.1:5000/switch/' + status)
  .then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
}