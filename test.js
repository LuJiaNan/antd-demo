const fun = new Function(console.log('test'))

// fun();
// console.log(fun.__proto__ === Function.prototype)


const a  = new Object();
console.log(a.constructor === Object)
console.log(fun.constructor === Function)