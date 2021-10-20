let form=[];

window.onload= function(){
    document.getElementById('btn').addEventListener('click',function(){
        let fname = document.getElementById('fname').value;
        let lname = document.getElementById('lname').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value;
        let comment = document.getElementById('comment').value;
        const obj={
            firstname:fname,
            lastname:lname,
            email:email,
            phonenumber:phone,
            comment:comment
        }
        form.push(obj);
        localStorage.setItem("data", JSON.stringify(form));
        document.getElementById('fname').value=''
        document.getElementById('lname').value=''
        document.getElementById('email').value=''
        document.getElementById('phone').value=''
        document.getElementById('comment').value=''
       
    })
   
}

       