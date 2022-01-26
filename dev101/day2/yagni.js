// KISS
// let a = 1;
// let b = 2;
// let c = a + b;

// console.log(c)

function sum(a, b, c, d) {
    let sum = 0;
    sum = sum + a;
    sum = sum + b;
    //c?
    //d?
    //e?
    return sum;
}

let result = sum(1, 2)
result = sum(result, 3)
result = sum(result, 4)
console.log(result)


// You Ain’t Gonna Need It : Хэрэгцээ гараагүй л бол ирээдүйд зориулж код бичих хэрэггүй
// let result = sum(1, 2)
// result  = sum(result, 3)
