
/*console.log("hello");
const username = document.getElementById('username');
const clicks = document.getElementById('userclicks');
const priority = document.getElementById('userpriority');
const impression = document.getElementById('userimpression');
const userbutton = document.getElementById('userbutton');
let map=new Map();
userbutton.onclick = () => {
  const one = username.value;
  const two = clicks.value;
  const three=priority.value;
  const four=impression.value;
  //alert(one);
  //alert(two);
  //alert(three);
  //alert(four);
  map.set({'name':one},{'clicks':two},{'priority':three},{'impression':four})
  console.log("data is fetching");
  console.log(map);
  saveinfo(map);
};

function saveinfo(map)
{
let str=JSON.stringify(map);
console.log(str);
localStorage.setItem('user',str);

}

function displayinfo()
{

}

function deleteinfo()
{

}
console.log("hello");
const username = document.getElementById('username');
const clicks = document.getElementById('userclicks');
const priority = document.getElementById('userpriority');
const impression = document.getElementById('userimpression');
const userbutton = document.getElementById('userbutton');
let map = new Map();
let objstr= localStorage.getItem('user');
map=JSON.parse(objstr);
console.log(map);
userbutton.onclick = () => {
  const one = username.value;
  const two = clicks.value;
  const three = priority.value;
  const four = impression.value;

  // Use a single object to store multiple properties in the Map
  map.set('name', one);
  map.set('clicks', two);
  map.set('priority', three);
  map.set('impression', four);

  console.log("data is fetching");
  console.log(map);
  saveinfo(map);
};

function saveinfo(map) {
  // Convert the Map to a plain object
  const obj = {};
  map.forEach((value, key) => {
    obj[key] = value;
  });

  // Stringify the object
  const str = JSON.stringify(obj);

  console.log(str);
  localStorage.setItem('user', str);
}

function displayinfo() {
  // Implement this function based on your requirements
}

function deleteinfo() {
  // Implement this function based on your requirements
}

console.log("hello");
const username = document.getElementById('username');
const clicks = document.getElementById('userclicks');
const priority = document.getElementById('userpriority');
const impression = document.getElementById('userimpression');
const userbutton = document.getElementById('userbutton');
const recorddisplay=document.getElementById('records');

// Retrieve the existing data from localStorage

let map = new Map();
let objstr = localStorage.getItem('user');
const obj2=JSON.parse(objstr);
// Check if data exists in localStorage
if (objstr) {
  // Parse the JSON string and add it to the existing map
  const obj1 = {};
  map.forEach((value, key) => {
    obj1[key] = value;
  });
  console.log(map);
}
displayinfo();
userbutton.onclick = () => {
  const one = username.value;
  const two = clicks.value;
  const three = priority.value;
  const four = impression.value;

  // Add new data to the existing map
  map.set('name', one);
  map.set('clicks', two);
  map.set('priority', three);
  map.set('impression', four);

  console.log("data is fetching");
  console.log(map);
  saveinfo(map);
};

function saveinfo(map) {
  // Convert the Map to a plain object
  const obj = {};
  map.forEach((value, key) => {
    obj[key] = value;
  });

  // Stringify the object
  const str = JSON.stringify(obj);

  console.log(str);
  localStorage.setItem('user', str);
}

function displayinfo()
 {
 let statement='';
 map.forEach(user =>
    {
      statement +=` <tr>
      <th scope="row"><input type="text" placeholder ="Enter text......" id="username"></th>
      <td ><input type="text" placeholder="clicks" id="userclicks" ></td>
      <td><input type="text" placeholder="priority" id="userpriority"></td>
      <td><input type="text" placeholder="Impression" id="userimpression"></td>
      <td><button type="button" class="search-icon" id="userbutton"><i class="fa-sharp fa-solid fa-plus"></i></button></td>
    </tr>`
    });
    recorddisplay.innerHTML=statement;
}

function deleteinfo() {
  // Implement this function based on your requirements
}
/*
console.log("hello");
const username = document.getElementById('username');
const clicks = document.getElementById('userclicks');
const priority = document.getElementById('userpriority');
const impression = document.getElementById('userimpression');
const userbutton = document.getElementById('userbutton');
const recorddisplay = document.getElementById('records');

// Retrieve the existing data from localStorage
let objstr = localStorage.getItem('user');
let map = new Map();


// Check if data exists in localStorage
if (objstr) {
  // Parse the JSON string and add it to the existing map
  map = new Map(Object.entries(JSON.parse(objstr)));
  console.log(map);
}
displayinfo();
userbutton.onclick = () => {
  const one = username.value;
  const two = clicks.value;
  const three = priority.value;
  const four = impression.value;

  // Add new data to the existing map
 // map.set({'name': one},{'clicks':two},{'priority':three},{'impression':four});
       map.set('name', one)
       .set('clicks', two)
       .set('priority', three)
       .set('impression', four);
   //map.set('name',one);
  //map.set('clicks', two);
  //map.set('priority', three);
  //map.set('impression', four);

  console.log("data is fetching");
  console.log(map);
  saveinfo(map);
  displayinfo(); // Update the displayed records
};

function saveinfo(map) {
  // Convert the Map to a plain object
  const obj = {};
  map.forEach((value, key) => {
    obj[key] = value;
  });
   console.log(obj);
  // Stringify the object
  const str = JSON.stringify(obj);

  console.log(str);
  localStorage.setItem('user', str);
}

function displayinfo() {
  let statement = '';

  map.forEach((users) => {
    statement += `<tr>
    <th scope="row">${users}</th>
    <td>${users}</td>
    <td>${users}</td>
    <td>${users}</td>
    <td><i class="btn text-white fa fa-trash-o btn-info mx-3"></i></td>
    </tr>`;
  });
  recorddisplay.innerHTML = statement;
}

function deleteinfo() {
  // Implement this function based on your requirements
}
console.log("hello");
const username = document.getElementById('username');
const clicks = document.getElementById('userclicks');
const priority = document.getElementById('userpriority');
const impression = document.getElementById('userimpression');
const userbutton = document.getElementById('userbutton');
const recorddisplay = document.getElementById('records');

// Retrieve the existing data from localStorage
let objstr = localStorage.getItem('user');
let map = new Map();

// Check if data exists in localStorage
if (objstr) {
  // Parse the JSON string and add it to the existing map
  map = new Map(Object.entries(JSON.parse(objstr)));
  console.log(map);
}
displayinfo();

userbutton.onclick = () => {
  const one = username.value;
  const two = clicks.value;
  const three = priority.value;
  const four = impression.value;

  // Add new data to the existing map
  map.set(one, {
    'clicks': two,
    'priority': three,
    'impression': four
  });

  console.log("data is fetching");
  console.log(map);
  saveinfo(map);
  displayinfo(); // Update the displayed records
};

function saveinfo(map) {
  // Convert the Map to a plain object
  const obj = {};
  map.forEach((value, key) => {
    obj[key] = value;
  });
  // Stringify the object
  const str = JSON.stringify(obj);
  console.log(obj);
  console.log(str);
  localStorage.setItem('user', str);
}

function displayinfo() {
  let statement = '';

  map.forEach((value, key) => {
    statement += `<tr>
      <th scope="row">${key}</th>
      <td>${value.clicks}</td>
      <td>${value.priority}</td>
      <td>${value.impression}</td>
      <td><i class="btn text-white fa fa-trash-o btn-info mx-3"></i></td>
    </tr>`;
  });

  recorddisplay.innerHTML = statement;
}

function deleteinfo() {
  // Implement this function based on your requirements
}

console.log("hello");
const username = document.getElementById('username');
const clicks = document.getElementById('userclicks');
const priority = document.getElementById('userpriority');
const impression = document.getElementById('userimpression');
const userbutton = document.getElementById('userbutton');
const recorddisplay = document.getElementById('records');

// Retrieve the existing data from localStorage
let objstr = localStorage.getItem('user');
let map = new Map();

// Check if data exists in localStorage
if (objstr) {
  // Parse the JSON string and add it to the existing map
  map = new Map(Object.entries(JSON.parse(objstr)));
  console.log(map);
}
displayinfo();

userbutton.onclick = () => {
  const one = username.value;
  const two = clicks.value;
  const three = priority.value;
  const four = impression.value;

  // Check if the key (username) already exists in the map
  if (map.has(one)) {
    // If the key exists, merge the existing data with the new data
    const existingData = map.get(one);
    map.set(one, {
      'clicks': two || existingData.clicks, // Use the new value if available, otherwise use the existing one
      'priority': three || existingData.priority,
      'impression': four || existingData.impression
    });
  } else {
    // If the key doesn't exist, add a new entry to the map
    map.set(one, {
      'clicks': two,
      'priority': three,
      'impression': four
    });
  }

  console.log("data is fetching");
  console.log(map);
  saveinfo(map);
  displayinfo(); // Update the displayed records
};

function saveinfo(map) {
  // Retrieve existing data from localStorage
  let existingData = localStorage.getItem('user');

  // Parse existing data if it exists, or initialize an empty object
  existingData = existingData ? JSON.parse(existingData) : {};

  // Iterate through the map and update existing data or add new entries
  map.forEach((value, key) => {
    existingData[key] = {
      'clicks': value.clicks,
      'priority': value.priority,
      'impression': value.impression
    };
  });

  // Stringify the updated object
  const str = JSON.stringify(existingData);

  console.log(existingData);
  console.log(str);

  // Save the updated data back to localStorage
  localStorage.setItem('user', str);
}

function displayinfo() {
  let statement = '';

  map.forEach((value, key) => {
    statement += `<tr>
      <th scope="row">${key}</th>
      <td>${value.clicks}</td>
      <td>${value.priority}</td>
      <td>${value.impression}</td>
        <td><i class="btn text-white fa fa-trash-o btn-info mx-3" onclick='deleteinfo("${key}")'></i></td>

    </tr>`;
  });

  recorddisplay.innerHTML = statement;
}

function deleteinfo(id) {
  // Implement this function based on your requirements
  //alert(id);
  map.delete(id);
  saveinfo(map);
  displayinfo();
}

/*
console.log("hello");
const username = document.getElementById('username');
const clicks = document.getElementById('userclicks');
const priority = document.getElementById('userpriority');
const impression = document.getElementById('userimpression');
const userbutton = document.getElementById('userbutton');
const recorddisplay = document.getElementById('records');

// Retrieve the existing data from localStorage
let objstr = localStorage.getItem('user');
let map = new Map();

// Check if data exists in localStorage
if (objstr) {
    // Parse the JSON string and add it to the existing map
    map = new Map(Object.entries(JSON.parse(objstr)));
    console.log(map);
}
displayinfo();

userbutton.onclick = () => {
    const one = username.value;
    const two = clicks.value;
    const three = priority.value;
    const four = impression.value;

    // Check if the key (username) already exists in the map
    if (map.has(one)) {
        // If the key exists, merge the existing data with the new data
        const existingData = map.get(one);
        map.set(one, {
            'clicks': two || existingData.clicks, // Use the new value if available, otherwise use the existing one
            'priority': three || existingData.priority,
            'impression': four || existingData.impression
        });
    } else {
        // If the key doesn't exist, add a new entry to the map
        map.set(one, {
            'clicks': two,
            'priority': three,
            'impression': four
        });
    }

    console.log("data is fetching");
    console.log(map);
    saveinfo(map);
    displayinfo(); // Update the displayed records
};

function saveinfo(map) {
    // Stringify the Map and save it to localStorage
    const str = JSON.stringify(Array.from(map.entries()));
    console.log(str);
    localStorage.setItem('user', str);
}

function displayinfo() {
    let statement = '';

    map.forEach((value, key) => {
        statement += `<tr>
            <th scope="row">${key}</th>
            <td>${value.clicks}</td>
            <td>${value.priority}</td>
            <td>${value.impression}</td>
            <td><i class="btn text-white fa fa-trash-o btn-info mx-3" onclick='deleteinfo("${key}")'></i></td>
        </tr>`;
    });

    recorddisplay.innerHTML = statement;
}

function deleteinfo(id) {
    // Implement this function based on your requirements
    map.delete(id);
    saveinfo(map);
    displayinfo();
}
*/
console.log("hello");
const username = document.getElementById('username');
const clicks = document.getElementById('userclicks');
const priority = document.getElementById('userpriority');
const impression = document.getElementById('userimpression');
const userbutton = document.getElementById('userbutton');
const recorddisplay = document.getElementById('records');

// Retrieve the existing data from localStorage
let objstr = localStorage.getItem('user');
let map = new Map();

// Check if data exists in localStorage
if (objstr) {
  // Parse the JSON string and add it to the existing map
  map = new Map(Object.entries(JSON.parse(objstr)));
  console.log(map);
}
displayinfo();

userbutton.onclick = () => {
  const one = username.value;
  const two = clicks.value;
  const three = priority.value;
  const four = impression.value;

  // Add new data to the existing map
  map.set(one, {
    'clicks': two,
    'priority': three,
    'impression': four
  });

  console.log("data is fetching");
  console.log(map);
  saveinfo(map);
  displayinfo(); // Update the displayed records
};

function saveinfo(map) {
  // Convert the Map to a plain object
  const obj = {};
  map.forEach((value, key) => {
    obj[key] = value;
  });
  // Stringify the object
  const str = JSON.stringify(obj);
  console.log(obj);
  console.log(str);
  localStorage.setItem('user', str);
}

function displayinfo() {
  let statement = '';

  map.forEach((value, key) => {
    statement += `<tr>
      <th scope="row">${key}</th>
      <td>${value.clicks}</td>
      <td>${value.priority}</td>
      <td>${value.impression}</td>
      <td><i class="btn text-white fa fa-trash-o btn-info mx-3" onclick=deleteinfo("${key}")></i></td>
    </tr>`;
  });

  recorddisplay.innerHTML = statement;
}

function deleteinfo(id) {
  map.delete(id);
  saveinfo(map);
  displayinfo();
}

const alltr=document.querySelectorAll("#records tr");
const search=document.querySelector("#search");
//console.log(alltr);
//console.log(search);
search.addEventListener('input',function(e)
{
 const searchstream=e.target.value.toLowerCase(); 
 recorddisplay.innerHTML='';
 alltr.forEach(tr=>
    {
        console.log(tr);
        const inside=tr.querySelectorAll('th');
       // console.log(inside[0].innerText.toLowerCase);
       if(inside[0].innerText.toLowerCase().indexOf(searchstream) > -1)
       {
        recorddisplay.appendChild(tr);
       }
    })
//console.log(e.target.value);
});