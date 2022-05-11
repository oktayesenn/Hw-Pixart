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