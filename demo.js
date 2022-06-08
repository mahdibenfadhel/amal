// problem 1
// let tab = [1,55,-2,0,10, 0, 1, 55, 145,null,undefined,105, 70, -33];
//
// let newTab= [];
// let somme = 0
// tab.forEach(e => {
//     if (e && !isNaN(e) && newTab.indexOf(e) === -1) {
//         newTab.push(e)
//         somme += e;
//     }
// })
// console.log(somme / newTab.length)


// problem 2
// let tab = [1, 55, -2, 0, 10, 0, 1, 55, 145, null, undefined, 105, 70, -33];
// const tab2 = Array.from(new Set(tab.filter(Boolean)));
// console.log(tab2.reduce((acc, item) => acc + item, 0) / tab2.length);

// problem 3

// const chaine = "aaz zaa"
// const n = chaine.length
// let result = true
//
//     for (i = 0; i < n; i++){
//         if (chaine[i] !== chaine[n-i -1]){
//             result = false;
//             break
//         }
//     }
// console.log(result)


// let ch = "azza";
// console.log(ch.split("").reverse().join("") === ch);


sum(4)(5)
const sum = (n) => {
    return (m) => {
        return n + m;
    };
};

// problem 4
// // function sum(n){
// //     return n ;
// // }
// console.log(sum(1)(1))


// problem 5
// const object ={
//     a :1,
//     b: { x: 10}
// }
// Object.freeze(object)
// object.b.x =15;
// console.log(object);

// problem 6
const tab = [1,55,-2,0,10, 0, 1, 55, 145,null,undefined,105, 70, -33];
const tab2 = [...tab.filter( e => e % 2 === 0 && (e || (e === 0) )), tab.filter( e => e % 2 !== 0 && (e || (e === 0)) )]
console.log(tab2)

