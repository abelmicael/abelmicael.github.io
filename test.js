// const a=["abel keme","senau","emo","al"]
// function scramble(arr) {
//     const titles = arr;
//     const titleWord = titles.toString().split(" ");
//     console.log(titleWord);
//     const sortedTitle = titleWord.sort((bbb, aaa) => bbb.length - aaa.length);
//     console.log(sortedTitle)
//     let i=1;
//     while(i<sortedTitle.length){
//         if(sortedTitle[i].length>sortedTitle[i+1].length){
//             const titleString = sortedTitle.join("\n");
//         }
//         i++;
//     }
//     let textArea = document.getElementById("displayArea");
//     textArea.innerHTML = titleString;
// }
// console.log(scramble(a))

// function scramble() {
//     const titles = findTitles();
//     const titleWord = titles.toString().split(" ");
//     console.log(titleWord);
//     const sortedTitle = titleWord.sort((aaa, bbb) => aaa.length - bbb.length);
//     console.log(sortedTitle);
//     const titleString = titles.join("\n");
//     // let textArea = document.getElementById("displayArea");
//     // textArea.innerHTML = titleString;
//  }


let str ="Hi everyone!"
function truncate(str, maxlength) {
    let word="";
    if(str.length>maxlength){
       return str.substring(0,maxlength-1)+"...";
    }
    return str.substring(0,maxlength-1);
  }
  console.log(truncate(str,20))