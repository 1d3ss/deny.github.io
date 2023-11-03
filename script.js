const backgroundSwitch = document.getElementById('backgroundSwitch');
const out = document.getElementById('out');
const check = prompt("Тобі Денис важливий?");

backgroundSwitch.addEventListener('change', () => {
    if (backgroundSwitch.checked) {
        document.body.style.background = '#3498db';
    } else {
        document.body.style.background = '#fff';
    }
});

if(check == 'Так' | check == 'так'){
    document.body.style.background = '#3498db';
}
else {
    document.body.style.background = '#000';
    out.innerHTML = 'ERROR 404'
}

