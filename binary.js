/* toggle */
function toggleMenu() {
  var menu = document.querySelector('.menu-1');
  var arrow=document.querySelector('#leftarrow');
  var menu2 = document.querySelector('.prompt');
  var menu3=document.querySelector('.menu-2');
  var menu_3=document.querySelector('.menu-3');
  menu.classList.toggle('show');
  menu3.classList.remove('going');
  menu2.classList.remove('show1');
  menu_3.classList.remove('going');
  arrow.classList.toggle('rotate');
  
}
function toggle()
{
  var menu = document.querySelector('.prompt');
  var menu_2=document.querySelector('.menu-2');
  var menu_3=document.querySelector('.menu-3');
  menu.classList.toggle('show1');
  menu_2.classList.toggle('going');
  menu_3.classList.toggle('going');
}
function toggleMenu2()
{
  var menu=document.querySelector('.menu-2');
  var extramenu=document.querySelector('.menu-2 .e1');
  var arrow=document.querySelector('#rightarrow1');
  menu.classList.toggle('show');
  extramenu.classList.toggle('flow');
  arrow.classList.toggle('rotate');
}
function toggleMenu3()
{
  var menu=document.querySelector('.menu-3');
  var extramenu=document.querySelector('.code');
  var arrow=document.querySelector('#rightarrow2');
  menu.classList.toggle('show');
  extramenu.classList.toggle('flow');
  arrow.classList.toggle('rotate');
}



/* play back speed */
let speed = 2000; // Default speed
const speedInput = document.getElementById("speed");
speedInput.addEventListener("input", function() {
    if(speedInput.value == 0) {
        speed = 1500;
    } else if(speedInput.value == 1) {
        speed = 1000;
    } else if(speedInput.value == 2) {
        speed = 800;
    } else if(speedInput.value == 3) {
        speed = 500;
    }
    console.log(speed);
});


/* binary.js */
let key=document.querySelector(".input-key").value;
let e1=document.querySelector('.e1');
let e2=document.querySelector('.e2');
let e3=document.querySelector('.e3');
let e4=document.querySelector('.e4');
let e5=document.querySelector('.e5');
let e6=document.querySelector('.e6');
let e7=document.querySelector('.e7');
let e8=document.querySelector('.e8');
let data=document.querySelector('.menu-2 .e1');
let searchbtn=document.querySelector('.menu-1 .menu1-ul .search');
let restartbtn=document.querySelector('.menu-1 .menu1-ul .restart');

//update the input
function updateValue(value) {
  let inputValue = document.querySelector('.input-key').value;
  let defaultValue = document.querySelector('.input-key').getAttribute('value');
  let finalValue = inputValue ? inputValue : defaultValue;
  console.log(finalValue);
  key=finalValue;
}
//update custom key
function update(value)
{
  key=value;
}

// opeartion is performed when the page is reloaded

document.addEventListener('DOMContentLoaded', function() {
  let predefinedArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  let array = [];
  

  let arrayContainer = document.getElementById('array');
  predefinedArray.forEach((item,index) => {
    array.push(item);
    let div = document.createElement('div');
    div.textContent = item;
    div.className = 'array-item';
    let indexSpan = document.createElement('span');
    indexSpan.textContent = index;
    div.appendChild(indexSpan);
    arrayContainer.appendChild(div);
    
  });
  });

//sleep
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

// initialize
  async function startBinarySearch() {
    let array = document.querySelectorAll('.array-item');
    
    console.log(array);
    
    let left = 0;
    let right = array.length - 1;
    
    await binarySearch(array, key, left, right);
  }

//main search 
  async function binarySearch(array, key, left, right) {

    while (left <= right) {
    
      e3.classList.toggle('show');
      e4.classList.toggle('show');
      data.innerHTML="while("+left+"<="+right+") condition is satisfied";
      let mid = Math.floor((left + right) / 2);
      array[mid].style.backgroundColor="yellow";
      array[left].style.backgroundColor="blue";
      array[right].style.backgroundColor="red";
      
      console.log(mid);
      let midValue = parseInt(array[mid].innerText);
      
      let midElement = array[mid];
  // Extracting the animation style from the style attribute
  let animationStyle = midElement.style.animation;
  let startIndex = animationStyle.indexOf('running') + 8; // index of 'running' + length of 'running'
  let endIndex = animationStyle.lastIndexOf(';'); // index of last semicolon in the style attribute
  
  
      console.log(midValue); // This will log the number inside the div
      data.innerHTML="Mid value is: "+midValue;
      console.log(array[mid])
      array[mid].style.animation = 'highlight 1s forwards'; // Highlight mid element
      let v;
      
      await sleep(speed); // Wait for animation
      console.log("arrived");
      console.log(midValue+" "+key); 
      data.innerHTML="if "+midValue+" == "+key+" equals it goes to the condition it returns the index of the key element"
      await sleep(speed); 
      if (midValue == key) {
        console.log(document.querySelector('.array-item span').innerText);
        /*restartbtn.classList.toggle('appear');
        searchbtn.classList.toggle('disappear');*/
        array[mid].style.animation='highlights 1s forwards';
        e5.classList.toggle('show');
        e3.classList.remove('show');
        e4.classList.remove('show');
        e6.classList.remove('show');
        e7.classList.remove('show');
        console.log("found");
        data.innerHTML="key element is found at the index of: "+mid;
        return;
      } 
      else if (midValue < key) {
      
      e5.classList.remove('show');
      e3.classList.remove('show');
      e4.classList.remove('show');
      e6.classList.toggle('show');
        for (let i = left; i <= mid; i++) {
          await sleep(speed);
          array[i].style.animation = 'fadeOut 1s forwards'; // Remove left half elements
          v=parseInt(array[i].innerText);
          data.innerHTML="mid value "+midValue+" is less than key value "+key+" so we remove left half element "+v;
          await sleep(speed);
        }
        left = mid + 1; // Search in the right half
      } else {
        e3.classList.remove('show');
        e4.classList.remove('show');
        e6.classList.remove('show');
        e7.classList.toggle('show');
        
        for (let i = right; i >= mid; i--) {
          await sleep(speed);
          array[i].style.animation = 'fadeOut 1s forwards'; // Remove right half elements
          v=parseInt(array[i].innerText);
          data.innerHTML="mid value "+midValue+" is less than key value "+key+" so we remove right half element "+v;
          await sleep(speed);
        }
        right = mid - 1; // Search in the left half
      }
      
      await sleep(speed); // Delay for visualization
  
      // Reset other elements
      for (let i = 0; i < array.length; i++) {
        if (i !== mid && (i < left || i > right)) {
          array[i].style.backgroundColor = 'lightblue';
        }
      }
  
      await sleep(speed); // Delay for visualization
  
      // Reset animation and remove unnecessary elements for the next iteration
      for (let i = 0; i < array.length; i++) {
        if (i !== mid && (i < left || i > right)) {
          array[i].style.animation = '';
          array[i].remove();
        }
      }
    }

   
    e4.classList.remove('show');
    e6.classList.remove('show');
    e7.classList.remove('show');
    e8.classList.toggle('show');
    data.innerHTML="key not found in the given array of elements";
  }
  
  let array1 = [];
  
  let searchValue1 = 0;
  let currentIndex1 = 0;
  let keyPosition1 = 0; 
  function sortAsc(arr) {
    
    return arr.slice().sort((a, b) => a - b);
}

//custom search
  function initializeSearch1() {
      const arrayValuesInput = document.querySelector('.array-items').value;
      
      array1 = arrayValuesInput.split(',').map(value => parseInt(value.trim(), 10));
      let array2 = sortAsc(array1);
      searchValue1 = parseInt(document.querySelector('.key-item').value.trim(), 10);
      const item=document.querySelector('.key');
      item.innerHTML=searchValue1;
      currentIndex1 = 0;
      keyPosition1 = 0;
      console.log(array2);
      const container1 = document.getElementById('array');
      container1.innerHTML = ''; 
  
      array2.forEach((item,index) => {
        array2.push(item);
        let div = document.createElement('div');
        div.textContent = item;
        div.className = 'array-item';
        let indexSpan = document.createElement('span');
        indexSpan.textContent = index;
        div.appendChild(indexSpan);
        container1.appendChild(div);
        
      });
      const key1 = document.querySelector('.key');
      update(searchValue1);
  }
/*  restartbtn.addEventListener('click', function() {
    // Reset array elements to initial state
    array.forEach(element => {
        element.style.backgroundColor = 'lightblue';
        element.style.animation = '';
    });

    // Restart the binary search
    initializeSearch1();
});*/