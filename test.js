const a=["abel keme","senau","emo","al"]
function scramble(arr) {
    const titles = arr;
    const titleWord = titles.toString().split(" ");
    console.log(titleWord);
    const sortedTitle = titleWord.sort((bbb, aaa) => bbb.length - aaa.length);
    console.log(sortedTitle)
    let i=1;
    while(i<sortedTitle.length){
        if(sortedTitle[i].length>sortedTitle[i+1].length){
            const titleString = sortedTitle.join("\n");
        }
        i++;
    }
    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;
}
console.log(scramble(a))