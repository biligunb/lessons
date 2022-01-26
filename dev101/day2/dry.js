// KISS
// let a = 1;
// let b = 2;
// let c = a + b;

// console.log(c)

function sum(a, b) {
    console.log(a+b)
    return a+b;
}

const result = sum(1, 2)
const result2 = sum(100, 3)

// Don’t Repeat Yourself : Нэг зорилготой функц нь эх код дотор зөвхөн нэг л газар байх хэрэгтэй
// function sum(a, b) {
//     console.log(a+b)
// }
// sum(1, 2)