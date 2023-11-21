const switches = document.querySelectorAll('.switch');
const switchcontent = document.querySelectorAll('.switch-content');

switches.forEach(element => {
    element.addEventListener("click",function(){
        const switchnumber = element.getAttribute("data-switch");
        switchcontent.forEach((content) =>{
            const contentswitch = content.getAttribute("data-switch");
            if(contentswitch === switchnumber){
                content.style.display = "none";
            }else{
                content.style.display = "block";
            }
   });

  });
});

const clickbtn = document.querySelectorAll('.clickhere');

function getRandomcolor(){
    const letters = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color+=letters[Math.floor(Math.random()*16)];
    }
    return color;
}
clickbtn.forEach((button)=>{
    button.addEventListener("click",function(){
        const randomcolor = getRandomcolor();
        document.body.style.backgroundColor = randomcolor;
    });
});