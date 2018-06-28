/**
 * 函数的扩展
 */
//1、函数参数默认值
let a1=99
function fn1(x=a1+1,y){
    console.log(x)
}
fn1()
a1=100
fn1()
//函数参数默认值是惰性的
//2、与解构赋值默认值使用
function fn2({x=1,y}={}){console.log(x),console.log(y)} 
fn2()//函数参数默认值
function fn3({x,y}={x:11,y:12}){
    console.log(y),console.log(x)
}
fn3({})//对象解构赋值
//非尾部的默认值参数不可省略，除非显示使用undefind
//3、length 返回没有默认值参数的个数
console.log((function (a, b = 1, c) {}).length )//最右侧带有默认值参数的前面不带默认值参数的个数
//4、作用域   暂时性死区：在const与let实例化之前访问会报错
var x = 1;
//function foo(x,y = function() { x = 2; }) {
function foo(y = function() { x = 2; }) {
  x = 3;
  y();
  console.log(x);
}
foo()
console.log(x)
//函数内部变量会访问默认值参数形成的作用域接着访问外部作用域
//5、应用
function throwIfMissing() {
    throw new Error('Missing parameter');
  }
  
  function foo1(mustBeProvided = throwIfMissing()) {
    return mustBeProvided;
  }
  //console.log(foo1())
  console.log(foo1(1))
  //利用参数默认值，可以指定某一个参数不得省略，如果省略就抛出一个错误。
  //6、rest 参数
  function foo2(a,...b){

  }
  //...b为rest参数，只能置于尾部
//7、严格模式
//规定只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错   内部定义严格模式适用于参数作用域与函数作用域，解析顺序是先解析参数，再解析函数内部 ，也就是只有解析到函数内部才知晓是否使用严格模式
//但是应该是先解析参数再解析函数
// function doSomething(value = 070) {
//     'use strict';
//     return value;
//   }
//8、name 用于得到函数名称
//9、箭头函数
let fn4 =()=>1  //单条语句
let fn5 =()=>{{a:1}}//返回对象
let fn6 = (a,b)=>{let c = a+b;return c;}//多条语句
// （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
// （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
// （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
// （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
function Timer() {
    this.s1 = 0;
    this.s2 = 0;
    // 箭头函数
    setTimeout(() => {
       this.s1++ 
    },1000)
    // 普通函数
    setTimeout(function test(){
        this.s1++ 
     },1000)
  }
  var timer = new Timer();
  setTimeout(() => console.log('s1: ', timer.s1), 3100);
  setTimeout(() => console.log('s2: ', timer.s2), 3100);
  //除了this,arguments、super、new.target在函数中不存在同时由于箭头函数没有自己的this，所以bind，call这种也无效
  let fn7 = (value)=>(a = value+1)=>(b=a+2)=>b;
  console.log("嵌套箭头函数"+fn7(3)()())
  //双冒号运算符  提案
  //尾调用优化（只在严格模式有用）  某个函数最后一步调用另一个函数，这个时候只保留另一个函数的调用帧，节省内存
  //尾递归
  function Fibonacci (n) {
    if ( n <= 1 ) {return 1};
  
    return Fibonacci(n - 1) + Fibonacci(n - 2);
  }
  
  //Fibonacci(10) // 89
  //Fibonacci(100) // 堆栈溢出
  //Fibonacci(500) // 堆栈溢出
  function Fibonacci2 (n , ac1 = 1 , ac2 = 1) {
    if( n <= 1 ) {return ac2};
  
    return Fibonacci2 (n - 1, ac2, ac1 + ac2);
  }
  
  //Fibonacci2(100) // 573147844013817200000
  //Fibonacci2(1000) // 7.0330367711422765e+208
 // Fibonacci2(10000) // Infinity
 //尾递归的实现，往往需要改写递归函数，确保最后一步只调用自身。
 //做到这一点的方法，就是把所有用到的内部变量改写成函数的参数。
 //ecs5尾递归优化
 function tco(f){
     var value;
     var active;
     var accumulated = [];
     //调用依次sum等同于调用依次accumulator
     return function accumulator(){
         accumulated.push(arguments);
         if(!active){
             active = true
             while(accumulated.length){
                 value = f.apply(this,accumulated.shift())//清空数组 =》 调用sum方法 =》调用accumulator方法 =》返回1 =》填充数组 =》进行循环
                 console.log(value)
             }
             //循环结束 返回value值
             active = false;
             return value
         }
         return 1
     }
 }
 var sum = tco(function(x,y){
     if(y>0){
         return sum(x+1,y-1)
     }else{
         return x
     }
 })
sum(1,2)
//10、尾逗号