/**
 * set and map data construct
 */
//1、set   成员唯一   参数为数组||类数组||不传
console.log(new Set([1,2,3,NaN,NaN]))
let s = new Set()
s.add({})
s.add({})
s.add(1)
//操作方法
s.add(1)
console.log([...new Set([1,1,1,1])])
console.log(s.size)
console.log(s.delete(1))
console.log(s.delete({}))
console.log(s.has(1))
console.log(s.clear()||s)
//遍历方法   1、便利顺序就是插入顺序2、键值等于间键名 
s.add({})   
s.add({})
s.add(1)
console.log(s.keys() instanceof Object)
console.log(s.values())
console.log(s.entries())
// forEach 扩展运算符同数组（for of），
//2、weakSet  （1）、只能是对象（2）、成员对象都是弱引用  适用于存储dom结构
//3、Map结构    值对应值   
let m = new Map()
let o = {p:'zale'}
m.set(o,'content')
console.log(m.get(o))
console.log(m.has(o))
m.delete(o)
console.log(new Map([['name','zale']]).get('name'))
//遍历方法和操作方法同set一致
//4、weakMap (1)、只接受对象作为键名（2）、键名所指的对象不计入垃圾回收机制，键值计入垃圾回收机制    适用于以dom为键名
