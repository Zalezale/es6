/**
 * 对象的扩展
 */
//1、属性的简洁表示法
//const o = {method(){return 'hello'}}  等于const o = {method：function(){return 'hello'}} 
//2、属性名表达式  不能与简洁表示法同时使用，表达式内为对象自动转变为字符串
//3、方法的name属性   区别get set
//4、Object.is() 只要两个值相等，那么他们就应该相等  验证+0不等于-0  NaN等于NaN
console.log(Object.is(0,0))
//Object.assign() 将原对象所有的可枚举属性浅复制到目标对象
let o1 = {people:{name:'zale'}}
let target1 = {}
Object.assign(target1,o1)
console.log(target1.people===o1.people)
//取值函数的处理
const source = {
  get foo() { return 1 }
};
const target = {};
Object.assign(target, source)
console.log(target)
//用途（1）添加属性（2）添加方法（3）克隆对象（4）合并多个对象（5）为属性指定默认值
//5、可枚举型 忽略enumerable为false的属性（1）for...in 返回继承的方法(2)Objext.keys()(3)JSON.stringfy()(4)Object.assign
//6、Reflect.ownKeys(obj) 返回所有属性，symbol 枚举 不可枚举
//7、Object.getOwnPropertyDescriptors() 返回所有自身属性的描述
//8、Object.setPrototypeOf() 设置对象的prototype对象
//9、Object.getPrototypeOf() 读取一个对象的原型对象
//10、super关键字 指向当前对象的原型对象等同于Object.getPrototypeOf(this).[属性名]
//11、Object.values(obj) 返回所有属性对应的值
//12、Object.entries(obj) 返回数组，元素为数组装载属性名与值
//13、解构赋值
let {x,y,...z} = {x:1,y:2,z:3,m:3}//...z这种形式只能放置最后且数量只能为1，表示对象，对应的匹配项都为其属性
console.log(z)//浅拷贝，不复制继承自原型的对象属性
function baseFunction({a,b}){
    return a+b
}
function wrap({x,y,...other}){
    return baseFunction(other)
}
console.log(wrap({x:1,y:2,a:1,b:4}))//传入的属性要一致，否则无法匹配
//14、扩展运算符 可以理解为就是将对象的属性放入到另一个对象中
let a = {m:1,x:'123'}
let aWithOverrides = { ...a, x: 1, y: 2 };
console.log(aWithOverrides)
//扩展运算符中如果有get函数，那么该函数会被执行
let runtimeError = {
    ...a,
    ...{
      get x() {
        console.log('执行')
      }
    }
  };