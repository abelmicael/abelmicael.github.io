
window.onload = function () {
    let td = document.getElementById('contacts')
    let myData = localStorage.getItem('data');
    let data = JSON.parse(myData)
    console.log(myData.length)
    console.log(data)
   


   for(let i = 0; i < data.length; i++){
     td.innerHTML +=`<tr><td>${data[i].firstname+' '+data[i].lastname}</td>
     <td>${data[i].email}</td>
     <td>${data[i].phonenumber}</td>
     <td>${data[i].comment}</td>
     

     </tr>`
   }
   
  
}



