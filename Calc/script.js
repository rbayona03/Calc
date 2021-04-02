const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalbtn = document.querySelector('.btn-equal');
const clearbtn = document.querySelector('.btn-clear');

for(let i=0;i<btns.length;i++){
    btns[i].addEventListener('click', function(){
        let number = btns[i].getAttribute('data-num');
        screen.value += number
    })
}

equalbtn.addEventListener('click', function(){
    if(screen.value ===''){
        alert('Enter Value')
        }
        else{
    let value = eval(screen.value);
    screen.value = value;
        }
})

clearbtn.addEventListener('click', function(){
    screen.value = '';
})