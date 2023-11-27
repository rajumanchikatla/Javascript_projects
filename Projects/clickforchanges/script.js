const colorbtns = document.querySelectorAll('.color-picker .btn');
const fontsize = document.getElementById('font-sizes');
const input = document.getElementById('input-text');
const marginButtons = document.querySelectorAll('.margin-adjust button');
const textContainer = document.getElementById('text-container');


    fontsize.addEventListener('click',function(e){
    if(e.target.classList.contains('dropdown-item')){
        const fontSize = e.target.getAttribute('value');
        document.getElementById('output-text').style.fontSize = fontSize + 'px';
        const selectedfontsize = document.querySelector('.dropdown-toggle')
        selectedfontsize.textContent =`${fontSize}`;
        // console.log(fontSize);
    }
});
    input.addEventListener('input',function(e){
    const text =e.target.value;
    document.getElementById('output-text').innerText = text;
});

Array.from(colorbtns).forEach(btn => {
    btn.addEventListener('click', function(){
        const bgcolor = getComputedStyle(this).getPropertyValue('--color');
        document.getElementById('output-text').style.backgroundColor = bgcolor;
    });
});


