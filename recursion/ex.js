function countIns(str, let) {

    if (str === "") return 0;

    else {
        if (str.charAt(0) === let) {//str[0]
            return 1 + countIns(str.substring(1), let)
        }
        return countIns(str.substring(1), let)
    }

}
console.log(countIns("abelalala","a"))