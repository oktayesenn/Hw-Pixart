let setColor = document.getElementById('set-color');
let inputColor = document.getElementById('color-field');

setColor.addEventListener('click', function(event){
    event.preventDefault();
    let inputColor = document.getElementById('color-field').value;
    document.querySelector('.brush').style.background = inputColor;
})


inputColor.addEventListener('keypress', function(event){
    if (event.key === "Enter"){
    document.querySelector('.brush').style.background = inputColor.value;
    event.preventDefault();
    }
})

for(let i = 0; i < 5000; i++) {
    let square = document.createElement('div');
    square.className = "square";
    square.id = i;
    document.body.appendChild(square);

}

let bodySquares = document.getElementsByClassName('square');

for (let i = 0; i < bodySquares.length; i++) {
    bodySquares[i].addEventListener('mouseover', function (){
        document.getElementById(`${i}`).style.background = colorBox.style.background;
    });
}
