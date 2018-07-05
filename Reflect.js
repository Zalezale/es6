//1、用于存储属于Object内部的方法
//2、修改某些Object方法的返回结构，使其合理
let obj1 ={}
Object.defineProperty(obj1,'name',{
    value:'zale',
    writable:true,
    enumerable:true,
    configurable:false
})
// console.log(Object.defineProperty(obj1,'name',{
//     value:'zale',
//     writable:true,
//     enumerable:true,
//     configurable:true
// }))
console.log('无法定义对象属性的时候存在返回值-------'+Reflect.defineProperty(obj1,'name',{
    value:'zale',
    writable:true,
    enumerable:true,
    configurable:true
}))
//3、让Object操作变成函数行为
let obj2 = {name:'zale'}
console.log('命令式------'+'name' in obj2)
console.log('函数式------'+Reflect.has(obj2,'name'))
//4、Reflect对象的静态方法与Proxy的静态方法一致