const memegenerator = document.querySelector('.meme-generator .meme-btn');
const memeimg = document.querySelector('.meme-generator img');
const title = document.querySelector('.meme-generator .meme-title');
// const author = document.querySelector('.meme-generator .meme-author');
// https://meme.api.herokuapp.com/gimme/wholesomememes;

const updatedetails =(url, name, captions) =>{
    memeimg.setAttribute("src", url);
    title.innerHTML = name;
    // author.innerHTML = captions;
}
const genratedmeme = async () =>{
   try{
        const response  = await fetch("https://api.imgflip.com/get_memes")
        const data = await response.json()
        const memes = data?.data?.memes;
        if(memes && memes.length > 0){
            const randomindex = Math.floor(Math.random()*memes.length);
            const randomMeme = memes[randomindex];
            updatedetails(randomMeme.url,randomMeme.name,randomMeme.captions);
        }else{
            console.error("no memes found...")
        }
    }finally{
        //do finally 
    }
};


memegenerator.addEventListener("click",genratedmeme)