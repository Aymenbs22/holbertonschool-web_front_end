function changeMode(size, weight, transform, background, color){
    return function() {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main(){

    var spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    var darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    var screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

var text = document.createElement('p');
text.textContent = 'Welcome Holberton!';
document.body.appendChild(text);

var button = document.createElement('button');
button.textContent = 'Spooky';
button.onclick = spooky;
document.body.appendChild(button);

var dkbutton = document.createElement('button');
dkbutton.textContent = 'Dark mode';
dkbutton.onclick = darkMode;
document.body.appendChild(dkbutton);

var screammode = document.createElement('button');
screammode.textContent = 'Scream mode';
screammode.onclick = screamMode;
document.body.appendChild(screammode);
}

main();