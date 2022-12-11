function sortByLength(array) {
    //  write code here.
    return array.sort((a, b) => a.length - b.length);
}

const strs = ["abc", "", "aaa", "a", "zz"];

console.log(sortByLength(strs));