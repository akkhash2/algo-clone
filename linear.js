//manual animation
//custom animation
//toggle
//video animation
//manual operation continuation

let speed = 2000; // Default speed
const speedInput = document.getElementById("speed");
speedInput.addEventListener("input", function() {
    if(speedInput.value == 0) {
        speed = 2000;
    } else if(speedInput.value == 1) {
        speed = 1900;
    } else if(speedInput.value == 2) {
        speed = 1800;
    } else if(speedInput.value == 3) {
        speed = 1500;
    }
    console.log(speed);
});
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

/* custom animation */
let array1 = [];
let searchValue1 = 0;
let currentIndex1 = 0;
let keyPosition1 = 0; 

function initializeSearch1() {
    const arrayValuesInput = document.querySelector('.array-item').value;
    
    array1 = arrayValuesInput.split(',').map(value => parseInt(value.trim(), 10));
    searchValue1 = parseInt(document.querySelector('.key-item').value.trim(), 10);
    const item=document.querySelector('.key');
    item.innerHTML=searchValue1;
    currentIndex1 = 0;
    keyPosition1 = 0;

    const container1 = document.getElementById('container');
    container1.innerHTML = ''; 

    array1.forEach((value, index) => {
        const element = document.createElement('div');
        element.textContent = value;
        element.classList.add('element');

        const indexSpan = document.createElement('span');
        indexSpan.textContent = index;
        element.appendChild(indexSpan);

        container1.appendChild(element);
    });

    const key1 = document.querySelector('.key');
    key1.style.left = `${keyPosition1}px`;
    key1.innerHTML = searchValue1;
    linearSearch1();
}

function linearSearch1() {
    const elements = document.querySelectorAll('.element');
    const key1 = document.querySelector('.key');
    const e2=document.querySelector('.code .e2');
    const e3=document.querySelector('.code .e3');
    const e4=document.querySelector('.code .e4');
    const e5=document.querySelector('.code .e5');
    const data=document.querySelector('.menu-2 .e1');
    e2.classList.remove('show');
    e3.classList.remove('show');
    e4.classList.remove('show');
    e5.classList.remove('show');
    if (currentIndex1 > 0) {
        elements[currentIndex1 - 1].classList.remove('found');
    }
    e2.classList.toggle('show');
    e3.classList.toggle('show');
    if (currentIndex1 < array1.length) {
        keyPosition1 = elements[currentIndex1].offsetLeft + elements[currentIndex1].offsetWidth / 2 - key1.offsetWidth / 2;
        key1.style.left = `${keyPosition1}px`;

        data.innerHTML="key element "+searchValue1+" is compared to the element "+array1[currentIndex1];
        if (array1[currentIndex1] === searchValue1) {
            e2.classList.remove('show');
            e3.classList.toggle('show');
            e4.classList.toggle('show');
            elements[currentIndex1].classList.add('found');
            data.innerHTML="key element is "+searchValue1+" found at the index of "+ currentIndex1;
            key1.style.left = `${keyPosition1 + 2}px`;
            return;
        } else {
            elements[currentIndex1].classList.add('not-found');
        }
    } else {
        e3.classList.remove('show');
        e5.classList.toggle('show');
        data.innerHTML="key element "+searchValue1+" is not found in given list ";
        return;
    }

    setTimeout(() => {
        currentIndex1++;
        linearSearch1();
        speed = getSpeedFromInput(); 
        console.log("Current Speed: " + speed);
    }, speed); 
}



/* manual animation */

const array = [7, 3, 9, 2, 5, 1, 6, 4, 8];
const searchValue = 18; 
let currentIndex = 0;
let keyPosition = 0; 

function initializeSearch() {
    currentIndex = 0;
    keyPosition = 0; 

    const elements = document.querySelectorAll('.element');
    elements.forEach(element => element.classList.remove('found', 'not-found'));

    const key = document.querySelector('.key');
    key.style.left = `${keyPosition}px`;
    key.innerHTML = searchValue;

    linearSearch(); 
}


/* manual operation continuation */
function linearSearch() {
    const elements = document.querySelectorAll('.element');
    const key = document.querySelector('.key');
    const e2=document.querySelector('.code .e2');
    const e3=document.querySelector('.code .e3');
    const e4=document.querySelector('.code .e4');
    const e5=document.querySelector('.code .e5');
    const data=document.querySelector('.menu-2 .e1');
   
    e2.classList.remove('show');
    e3.classList.remove('show');
    e4.classList.remove('show');
    e5.classList.remove('show');
    if (currentIndex > 0) {
        elements[currentIndex - 1].classList.remove('found');
    }
    e2.classList.toggle('show');
    
    if (currentIndex < array.length) {
        keyPosition = elements[currentIndex].offsetLeft + elements[currentIndex].offsetWidth / 2 - key.offsetWidth / 2;
        key.style.left = `${keyPosition}px`;
        e3.classList.toggle('show');
        data.innerHTML="key element "+searchValue+" is compared to the element "+array[currentIndex];
        if (array[currentIndex] === searchValue) {
            e2.classList.remove('show');
            e3.classList.toggle('show');
            e4.classList.toggle('show');
            data.innerHTML="key element is "+searchValue+" found at the index of "+ currentIndex;
            elements[currentIndex].classList.add('found');
            key.style.left = `${keyPosition + 2}px`;
            return;
        } else {
            elements[currentIndex].classList.add('not-found');
            
        }
    } else {
        
        e5.classList.toggle('show');
        data.innerHTML="key element "+searchValue+" is not found in given list ";
        return;
    }

    setTimeout(() => {
        currentIndex++;
        speed = getSpeedFromInput(); 
        console.log("Current Speed: " + speed);
        linearSearch();
    }, speed); 
}
function getSpeedFromInput() {
    
    if(speedInput.value == 0) {
        return 2000;
    } else if(speedInput.value == 1) {
        return 1500;
    } else if(speedInput.value == 2) {
        return 1000;
    } else if(speedInput.value == 3) {
        return 700;
    }
}
// Initial setup
array.forEach((value, index) => {
    const element = document.createElement('div');
    element.textContent = value;
    element.classList.add('element');

    const indexSpan = document.createElement('span');
    indexSpan.textContent = index;
    element.appendChild(indexSpan);

    document.getElementById('container').appendChild(element);
});

const key = document.querySelector('.key');
key.style.left = `${keyPosition}px`;
key.innerHTML = searchValue;