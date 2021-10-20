

let x = localStorage.getItem("project");
let y = JSON.parse(x);

let div = document.getElementById('miki');
let div2 = document.getElementById('na');

if(y!==null){
for(let z of y){
    div.innerHTML+=`
    <div class="slide">
            <img src=${z.link}>
            <div class="info">
                <h2>${z.name}</h2>
            </div>
        </div>
    `
 
    div2.innerHTML+=`
    <div class="btn"></div>
    `
}
}


var slides = document.querySelectorAll('.slide');
var btns= document.querySelectorAll('.btn');
let currentSlide = 1;

var manualNav = function(manual){
    slides.forEach((slide)=>{
        slide.classList.remove('active');

        btns.forEach((btn)=>{
            btn.classList.remove('active');
        });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn, i)=>{
    btn.addEventListener("click" ,() =>{
        manualNav(i);
        currentSlide = i;
    });
    
});


document.getElementById('set').addEventListener('click',function(){
    
    let timer = document.getElementById('text').value
   console.log(timer)
    let counter = 0;
    let i = setInterval(function(){
        // do your thing
        slides.forEach((slide)=>{
            slide.classList.remove('active');
    
            btns.forEach((btn)=>{
                btn.classList.remove('active');
            });
        });
        slides[counter].classList.add('active');
        btns[counter].classList.add('active');
        
        counter++;

        if(counter === slides.length-1) {
            counter=0;
         }
    }, timer*1000);
  

})

