let setColor = document.getElementById('set-color');

setColor.addEventListener('click', function(event){
    event.preventDefault();
    let inputColor = document.getElementById('color-field').value;
    document.querySelector('.brush').style.background = inputColor;
})
