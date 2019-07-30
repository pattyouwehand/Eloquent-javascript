function arrayToList (entry){
    let list = [];
    if(entry === number){
        list.push({value: num, rest: list})
    }
    return list
}
console.log(arrayToList(1, 2, 3))