function request(){
    document.getElementById('request').addEventListener('click' ,function(){
        
        alert("Thank you for contacting me. Will contact you back shortly.")
        document.getElementsByTagName("textarea").innerHTML.value = "";
        document.getElementById('lastname').innerHTML=null;
        document.getElementById('email').innerHTML=null;
        document.getElementById('number').innerHTML=null;
        document.getElementById('text').innerHTML=null;

       

    })
  }
  window.onload=request;