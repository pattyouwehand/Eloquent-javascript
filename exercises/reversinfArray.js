function reverseArray(array) {
    let array2 = []
    for(let i= array.length; i>0; i--){
        array2.push(i)
    }
    return array2

}
console.log(reverseArray(['1','2','3']))


