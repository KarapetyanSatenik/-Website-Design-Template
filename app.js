// grel function vorn kveradarcni massiv vortex chkan nuyn valuenerov objectner

const array = [
        { x: 5, y: 10 }, //
        { x: 1, y: 10 }, //
        { x: 1, y: 5 }, //
        { x: 1, y: 10 },
        { x: 5, y: 10 },
    ]
    // [ { x: 5, y: 10 }, { x: 1, y: 10 }, { x: 1, y: 5 } ]
function filterArr(arr) {
    let newArr = [];
    let set = new Set();
    arr.forEach(el => {
        set.add(JSON.stringify(el))
    });
    for (const i of set) {
        newArr.push(JSON.parse(i))
    }
    return newArr

};
console.log(filterArr(array));




// const array = [
//         { x: 5, y: 10 }, //
//         { x: 1, y: 10 }, //
//         { x: 1, y: 5 }, //
//         { x: 1, y: 10 },
//         { x: 5, y: 10 },
//     ]

// function filterArr(arr) {
//     let newArr = [];
//     let obj = {};
//     arr.forEach(el => {
//         for (const key in el) {
//             if (el[key] in obj) {
//             } else {
//                 obj[el[key]] = el;
//                 newArr.push(el)
//             }
//         }
//     });

//     return newArr
// };
// console.log(filterArr(array));
// [{ x: 5, y: 10 }, { x: 1, y: 10 }, { x: 1, y: 5 }]