// let a=[["a","dushyanth"],["b","banana"],["c","catch"]]
// let r=Object.fromEntries(a)
// console.log(r);



let obj={
    a:"dushyanth",
    b:"banana",
    m:"monkey"
}
let obj2={
    c:"gagan",
    a:"cow",
    b:"horse"
}



let obj1=Object.assign({},obj)
let obj3=Object.assign(obj2,obj)
console.log(obj1);
console.log(obj3);