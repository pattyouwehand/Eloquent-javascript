function range(start, end){
    let numbers =[]
    for(let num= start; num<= end; num++){
        numbers.push(num)
    }
    return numbers
}

console.log(range(1,10));

function sum(range){
    let total = 0;
    for(let value of range){
        total = total + value
    }
    return total;
}
console.log(sum(range(1, 10)))
