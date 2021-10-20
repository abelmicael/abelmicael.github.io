
const arr = [];

 function addFunc() {
    
    let name1 = document.getElementById('name').value;
    let link1 = document.getElementById('link').value;
    const obj={
        name:name1,
        link:link1
    }

    document.getElementById('name').value = "";
    document.getElementById('link').value = "";

    arr.push(obj);
    localStorage.setItem("project", JSON.stringify(arr));
    let x =localStorage.getItem("project");
    let y= JSON.parse(x);
   
    let td = document.getElementById('tbody');
    document.getElementById('tbody').innerHTML=''
    for(let z of y){
    td.innerHTML+=`<tr>
    <td scope="col">${z.name}</td>
    <td scope="col">${z.link}</td>
    <td scope="col"><input  type="button" value="Delete" onclick="deleteRow(this)"/></td>
    </tr>`
  }

}

function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
    localStorage.setItem("course", JSON.stringify(courses));
  }
