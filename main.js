const option = document.getElementById('option');
const submenu1 = document.getElementById('submenu')


let submenuOn = () => {
        submenu1.style.display = 'block';  
}

let submenuOff = () => {
    submenu1.style.display = 'none';
}

option.addEventListener('mouseover', submenuOn);
option.addEventListener('mouseout', submenuOff);