/**
 * 1、类中的属性不可枚举与es5不同
 * 2、默认为严格模式
 * 3、constructor默认返回this(不显示定义则引擎默认定义)
 * 4、类不存在变量提升
 * 5、get和set来控制属性读写
 * 6、静态方法(实例无法访问、可与属性同名(静态方法优先被访问))
 * 7、静态属性只能写在外部(实例访问不了，子类可以访问)
 * 8、只有静态的属性和方法可以通过点操作符访问
 * 9、new.target（限制类只能继承之后才使用，在函数外部使用会报错）
 */
class App {
    constructor(...args){
      this.args = args
      this.name ='App'
    }
    coding(){

    }
    debug(){

    }
    cangetage(){
        return this.age+'年龄'
    }
    get name(){
        return 'zale'
    }
    set name(name){
    }
    * [Symbol.iterator](){
        for(let arg of this.args){
            yield arg
        }
    }
    static say(){
        return this.name
    }
    say(){
        return '你好'
    }
}
class App1 extends App{
constructor(){
    this.name='App1'
}
}
App.age = 18
let app = new App('app1','app2')
for(let value of app){
    console.log(value)
}
let test = Object.create({},{name:{
    writable:true,
    enumerable:false,
    configurable:true,
    value:'hah'
}})
console.log(test.name+'ddddd')
console.log(App1.name)
console.log(App1.debug)
console.log(app.cangetage())
console.log(App === App.prototype.constructor)


