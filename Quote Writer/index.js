const range  = document.getElementById('opacityRange');
const output = document.getElementById('range');
const input  = document.getElementById('inputtext');
const quoteTextEl = document.getElementById('output-text');
const clrbtn      = document.querySelectorAll('.clrbtn');
const backgroundGradientEl =  document.querySelector('.background-gradient-div');
const gradients     = document.querySelectorAll('.grdbtn');
const backgroundColorBox = document.querySelector('.bgcolor-box');
const gradientBoxEl = document.querySelector('.gradients-box');
const fontsEl       = document.querySelector('.fonts');
const fontWeightEl  = document.querySelector('.font-weight-btn');
const fontSizeEl    = document.querySelector('.font-size-input');
const quoteInputEl  = document.querySelector('.quote-input');
const alignbtnEl    = document.querySelectorAll('.alignbtn');
const textTransformEl = document.querySelectorAll('.transformbtn');
const elementsToRemove = document.querySelectorAll('.colorpick-eyedropper-input-trigger');
const imageQueryEl   = document.querySelector('.img-search-query');
const imagesEl       = document.querySelector('.searched-images');
const backgroundImageDiv = document.querySelector('.background-image-div');
const accessKey      = 'Gupp_MaJnCuOAhgBM5avlgLlchjsQXH4AIyvqJUzuyY';
const draggableSpan = document.getElementById('name-box');
const lineHeightEl = document.getElementById('line-height');

elementsToRemove.forEach(function(element) {
    element.remove();
});

const defaultFontValue = 22;

//colors
const solidColors = ['#FF0000','#364fc7', '#c0eb75',  '#69db7c', '#087f5b', '#38d9a9', '#3bc9db', '#212529', 
                      '#FA8072',  '#3bc9db', '#B22222',  '#9775fa', '#800000',  '#FF8C00', '#862e9c', '#C71585',
                      '#DB7093', '#2b8a3e', '#222'
                    ];

 //gradients
const gradientColors = [
                        'linear-gradient(135deg, #799F0C 10%, #ACBB78 100%)',
                        'linear-gradient(135deg, #a3bded 10%, #6991c7 100%)',
                        'linear-gradient(135deg, #F0FF00 10%, #58CFFB 100%)',
                        'linear-gradient(135deg, #52E5E7 10%, #130CB7 100%)',
                        'linear-gradient(135deg, #0d61ec 10%, #de0f82 100%)',
                        'linear-gradient(135deg, #B91372 10%, #6B0F1A 100%)'
                    ];
//fonts
const fonts = ["rbitron",'Open Sans' , "Poppins",
                "Roboto Condensed",
               "Playfair Display", "Ubuntu"]

window.onload = function(){
    initializeColors();
}

//fontsize
fontSizeEl.addEventListener('change', () =>{
    quoteTextEl.style.fontSize = `${fontSizeEl.value}px`;
    // draggableSpan.style.fontSize = `${fontSizeEl.value}px`;
    resizeTextarea()
})

function resizeTextarea() {
    quoteTextEl.style.height = 'auto'; 
    quoteTextEl.style.height = quoteTextEl.scrollHeight + 'px'; // Set the height to fit the content
}

quoteTextEl.addEventListener('input', resizeTextarea);
quoteTextEl.addEventListener('change', resizeTextarea);
quoteTextEl.addEventListener('focus', resizeTextarea);

function updateColor(value) {
    console.log(quoteTextEl)
    quoteTextEl.style.color = value;
    draggableSpan.style.color = value;
}

function initializeColors(){

    //appending colors
    solidColors.forEach(color => {
        const spanEl = document.createElement('span');
        spanEl.style.backgroundColor = color;
        spanEl.classList.add('clrbtn');
        spanEl.addEventListener('click', () => changeBackgroundColor(color));
        backgroundColorBox.appendChild(spanEl);
    });

    //appending gradients
    gradientColors.forEach(color => {
        const spanEl = document.createElement('span');
        spanEl.style.backgroundImage= color;
        spanEl.classList.add('grdbtn');
        spanEl.addEventListener('click', () => changeBackgroundColor(color, true));
        gradientBoxEl.appendChild(spanEl);
    });

    //appending Fontfamily
    fonts.forEach(font => {
        const optionEl = document.createElement('option');
        optionEl.textContent = font;
        optionEl.value = `'${font}', Sans-serif`;
        fontsEl.appendChild(optionEl);
    })

    //appending fontsize
    quoteTextEl.style.fontSize = `${defaultFontValue}px`;
    fontSizeEl.value = defaultFontValue;
    quoteTextEl.innerText = 'Welcome to Quote Creator';
}

//changing background color and gradient of output box
function changeBackgroundColor(color, isGradient=false){
    if(isGradient){
        backgroundGradientEl.style.backgroundColor = 'unset';
        backgroundGradientEl.style.backgroundImage = color;
        changeOpacity();
    }else{
        backgroundGradientEl.style.backgroundImage = 'unset';
        backgroundGradientEl.style.backgroundColor = color;
    }
    
}

//changing the fontstyle
function changeBold(){
    fontWeightEl.classList.toggle('font-btn-light')
    if(fontWeightEl.classList.contains('font-btn-light')){
        quoteTextEl.style.fontWeight = 'normal';
    }else{
        quoteTextEl.style.fontWeight = 'bold';
    }
}


//fetching api
async function searchImages(){
    if(imageQueryEl.value == ""){
        alert('Pleasee Enter the Query Text')
        return;
    }
    const query = imageQueryEl.value;
    const apiUrl = `https://api.unsplash.com/search/photos/?query=${query}&client_id=${accessKey}&orientation=landscape&per_page=20&fit=small`;
    const res=  await fetch(apiUrl);
    const data  = await res.json();

    imagesEl.innerHTML = '';
    data.results.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo.urls.full;
        imagesEl.append(img)
        img.onclick = () => changeBackgroundImage(photo.urls.full)
    });
}

//change background image
function changeBackgroundImage(image){
    backgroundImageDiv.style.backgroundImage = `url(${image})`;
}

//changing opacity
function changeOpacity() {
    output.textContent = range.value;
    backgroundGradientEl.style.opacity =  range.value;
}

//changing the fontfamily
fontsEl.addEventListener('change', function(){
    const selectedOption = fontsEl.options[fontsEl.selectedIndex];
    quoteTextEl.style.fontFamily = selectedOption.value;
    draggableSpan.style.fontFamily = selectedOption.value;
});

//lineheight
lineHeightEl.addEventListener('change', () =>{
    quoteTextEl.style.lineHeight = lineHeightEl.value;
});


//changing textalign
alignbtnEl.forEach(button => {
    button.addEventListener('click',function(e){
        // console.log(e.target.classList);
        if(e.target.classList.contains('fa-align-right'))
            quoteTextEl.style.textAlign = 'right';
        else if(e.target.classList.contains('fa-align-left'))
            quoteTextEl.style.textAlign = 'left';
        else if(e.target.classList.contains('fa-align-center'))
            quoteTextEl.style.textAlign = 'center';
        console.log(quoteTextEl.style.textAlign)
    });
});

//texttransform
textTransformEl.forEach(button =>{
    button.addEventListener('click' ,function(e){
        if(e.target.classList.contains('uppercase'))
            quoteTextEl.style.textTransform = 'uppercase';
        else if(e.target.classList.contains('lowercase'))
            quoteTextEl.style.textTransform = 'lowercase';
        else if(e.target.classList.contains('capitalize'))
            quoteTextEl.style.textTransform = 'capitalize';
    });
});

range.addEventListener('change', changeOpacity);


///Draggable


    let offsetX, offsetY;
    let isDragging = false;

    draggableSpan.addEventListener('mousedown', (event) => {
    isDragging = true;
    const boundingRect = draggableSpan.getBoundingClientRect();
    offsetX = event.clientX - boundingRect.left;
    offsetY = event.clientY - boundingRect.top;
    });

    document.addEventListener('mousemove', (event) => {
    if (isDragging) {
        event.preventDefault();
        const x = event.clientX - offsetX;
        const y = event.clientY - offsetY;
        draggableSpan.style.left = x + 'px';
        draggableSpan.style.top = y + 'px';
    }
    });

    document.addEventListener('mouseup', () => {
    isDragging = false;
    });

