let courses = [
    {
        title: 'CS 105 - Introduction to Computer Programming ', date: new Date(2021, 1, 2), descrip: `An introduction to the fundamentals of computer programming through media computation. Students will
    learn to write interactive graphical programs. Fundamental language concepts such as variables,
    conditionals, loops, functions, and arrays.`, link: 'http://cs.furman.edu/~chealy/cs105/cs105.pdf'
    },

    {
        title: 'CS 201 - Prsudural Programming ', date: new Date(2021, 2, 3), descrip: `The discipline of computer science including problem solving, algorithm development, structured
    programming, top-down design, good programming style, object-oriented programming and elementary
    data structures.` , link: 'https://deepsource.io/glossary/procedural-programming/#:~:text=Procedural%20programming%20is%20a%20programming,called%20procedures%2C%20analogous%20to%20functions'
    },


    {
        title: 'CS 203 - Java OOP  ', date: new Date(2021, 3, 3), descrip: `OOP concepts in Java are the main ideas behind Java's Object Oriented Programming. They are an
    abstraction, encapsulation, inheritance, and polymorphism. ... Basically, Java OOP concepts let us
    create working methods and variables, then re-use all or part of them without compromising security
`   , link: 'https://www.codecademy.com/learn/java-object-oriented-programming?g_network=g&g_device=c&g_adid=535846715179&g_keyword=&g_acctid=243-039-7011&g_adtype=search&g_adgroupid=124065912846&g_keywordid=dsa-1394035371028&g_campaignid=12144922488&g_campaign=US+DSA+-+Catalog&utm_id=t_dsa-1394035371028:ag_124065912846:cp_12144922488:n_g:d_c&utm_term=&utm_campaign=US%20DSA%3A%20Catalog&utm_source=google&utm_medium=paid-search&utm_content=535846715179&hsa_acc=2430397011&hsa_cam=12144922488&hsa_grp=124065912846&hsa_ad=535846715179&hsa_src=g&hsa_tgt=dsa-1394035371028&hsa_kw=&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjwtfqKBhBoEiwAZuesiAUt_jg24Rl4x1BvtLbp5xJWGDW_OikBy8l8hhF94_vt5Y7ybgNnYBoCVqoQAvD_BwE'
    },

    {
        title: 'CS 205 - Data Structure ', date: new Date(2021, 4, 3), descrip: ` The term data structure refers to a data collection with well-defined operations and behavior or
    properties.A data structure is a unique way of storing or organizing the data in computer memory so that we can useit
    effectively.`, link: 'https://www.geeksforgeeks.org/queue-data-structure'
    },

    {
        title: 'CS 205 - Discrete Math ', date: new Date(2021, 5, 6), descrip: ` Discrete mathematics is the study of mathematical structures that are discrete rather than continuous. In
    contrast to real numbers that vary "smoothly", discrete mathematics studies objects such as integers,
    graphs, and statements in logic. These objects do not vary smoothly, but have distinct, separated values.
    `, link: 'https://mathworld.wolfram.com/DiscreteMathematics.html#:~:text=Discrete%20mathematics%20is%20the%20branch,assume%20only%20distinct%2C%20separated%20values.&text=The%20study%20of%20how%20discrete,outcomes%20is%20known%20as%20combinatorics.'
    },

    {
        title: 'CS 315- Fundumental Programming OOP  ', date: new Date(2021, 9, 8), descrip: ` The emphasis of the course is on the internal representation of the elementary and intermediate data
    structures, their time and space requirements, and their applications. ... A second component of the course
    is the study of more advanced features of object-oriented programming..`, link: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects'
    },

]


localStorage.setItem('course', JSON.stringify(courses));

let td = document.getElementById('tbody')

window.onload = function () {

    let miki = localStorage.getItem("course");
    let courses = JSON.parse(miki)

    let td = document.getElementById('tbody')
    for (let i of courses) {
        td.innerHTML += `<tr>
            <td scope="col">${i.title}</td>
            <td scope="col">${i.date}</td>
            <td scope="col">${i.descrip}</td>
             <td scope="col">${i.link}</td>
            <td scope="col"><input type="button" value="Delete" onclick="deleteRow(this)"/></td>
            </tr>`
        
    }


    localStorage.setItem('course', JSON.stringify(courses));
}



 function addFunc() {
    let ti = document.getElementById('HELLO').value;
    let date = document.getElementById('date').value;
    let des = document.getElementById('description').value;
    let link = document.getElementById('link').value;

    console.log(ti);

    let obj = {
        title: ti,
        date: date,
        descrip: des,
        link: link
    }
    console.log(obj)
    courses.push(obj);
    console.log(courses)
    localStorage.setItem("course", JSON.stringify(courses));

    document.getElementById('tbody').innerHTML = "";
    console.log(courses)
    let td = document.getElementById('tbody')
    for (let i = 0; i < courses.length; i++) {
        td.innerHTML += `<tr>
            <td scope="col">${courses[i].title}</td>
            <td scope="col">${courses[i].date}</td>
            <td scope="col">${courses[i].descrip}</td>
            <td scope="col">${courses[i].link}</td>
            <td scope="col"><input  type="button" value="Delete" onclick="deleteRow(this)"/></td>
            </tr>`
            

    }
    document.getElementById('HELLO').value = "";
    document.getElementById('date').value = "";
    document.getElementById('link').value = "";
    document.getElementById('description').value = "";
    
}


function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    let miki = localStorage.getItem("course");
    let courses = JSON.parse(miki)
    for(let i=0; i<courses.length;i++){
        if(courses[i].title === row.title){
            courses.splice(i,1);
            localStorage.setItem("course", JSON.stringify(courses));
        }
    }

    row.parentNode.removeChild(row);
   
   
  }
