/**
 * Symbol  第七种类型，表示独一无二的值(防止属性值被改写,定义不可见属性)
 */
let a1 = Symbol('test')
console.log('Symbol类型------'+a1);
//传参相同值不同，可以转换为字符串可以转换为布尔值
//1、作为属性名的Symbol
// let mySymbol = Symbol();
// let mySymbol1 = Symbol();
// let a = {age:12};
// a[mySymbol] = 'Hello!';
// a[mySymbol1] = 'Hello!';
// console.log(a[mySymbol])
//谷歌浏览器运行没问题，node环境中运行存在问题，可以用来定义常量
//2、消除魔术字符串（设置成变量）
//3、属性名的遍历
// console.log(Object.getOwnPropertySymbols(a))
// console.log(Reflect.ownKeys(a));
//Symbol.for(String) 重写描述为String的Symbol
let s3 = Symbol.for('foo');
let s4 = Symbol.for('foo');
console.log(s3===s4)
console.log(Symbol.keyFor(s3))
//4、Singleton(1、被重写（非Symbol）2、重新执行(Symbol))