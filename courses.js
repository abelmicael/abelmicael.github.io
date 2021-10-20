

let miki = localStorage.getItem("course");
let abel = JSON.parse(miki);



   let div = document.querySelector('.course')
       
           abel.forEach( (c, index) =>{
            if(index%2===0){
          div.innerHTML +=` <div class="CoursePageInner1">
          <p id="CSheader">${c.title}</p>
         
          <p>${c.descrip} <a href=${c.link} id="coursebtn" style="text-decoration:none;" style="font-size:15px">more
          info...</a> </p>
          
          </div>
          
          `
            }
            else{
                div.innerHTML +=` <div class="CoursePageInner2">
          <p id="CSheader">${c.title}</p>
          
         
          <p>${c.descrip}<a href=${c.link} id="coursebtn" style="text-decoration:none;" style="font-size:15px">more
          info...</a> </p>
          
          </div> 
          `
            }
        })
    function sortAsc(){
        div.innerHTML='';
        let sorted = abel.sort((a,b)=> {
            return new Date(a.date) - new Date(b.date);
           })
           sorted.forEach( (c, index) =>{
            if(index%2===0){
          div.innerHTML +=` <div class="CoursePageInner1">
          <p id="CSheader">${c.title}</p>
          
          <p>${c.descrip}<a href=${c.link} id="coursebtn" style="text-decoration:none;" style="font-size:15px">more
          info...</a> </p>
          
          </div>
          
          `
            }
            else{
                div.innerHTML +=` <div class="CoursePageInner2">
          <p id="CSheader">${c.title}</p>
          
        
          <p>${c.descrip}<a href=${c.link} id="coursebtn" style="text-decoration:none;" style="font-size:15px">more
          info...</a> </p>
          
          </div> 
          `
            }
        })
    }
    function sortDsc(){
        div.innerHTML=''
        let sorted = abel.sort((a,b)=> {
            return new Date(b.date) - new Date(a.date);
           })
           sorted.forEach( (c, index) =>{
            if(index%2===0){
          div.innerHTML +=` <div class="CoursePageInner1">
          <p id="CSheader">${c.title}</p>
        
          <p>${c.descrip}<a href=${c.link} id="coursebtn" style="text-decoration:none;" style="font-size:15px">more
          info...</a> </p>
          
          </div>
          
          `
            }
            else{
                div.innerHTML +=` <div class="CoursePageInner2">
          <p id="CSheader">${c.title}</p>
          
        
          <p>${c.descrip}<a href=${c.link} id="coursebtn" style="text-decoration:none;" style="font-size:15px">more
          info...</a> </p>
          
          </div> 
          `
            }
        })

    }
    //  <h5 style="font-size:15px"> Enrolled date  :${c.date.getMonth()+'/'+c.date.getDate()+ '/'+ c.date.getFullYear()}</h5>
   
    
 

