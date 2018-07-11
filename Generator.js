function* fn1(){
    console.log('generator------执行了')
    yield 'fn1-1';
    return 'fn1-2'
}
let generator = fn1()
console.log(generator.next())
console.log(generator.next())
//遍历器函数与iterator的关系
let test = {
    [Symbol.iterator] : fn1
}
for(let pro of test){
    console.log(pro)
}

function* fn2(){
   console.log(`${yield}`)
   console.log(yield)
   console.log(yield)
   return 'fn2-finally'
}
//yeild+(内容)是一个默认返回值为undefind的表达式，可以通过next来设置其具体的值
let generator1 = fn2()
generator1.next('fn2-1')//第一个传参是无效的
generator1.next('fn2-2')
generator1.next('fn2-3')
generator1.next('fn2-4')
generator1.next('fn2-5')
console.log(generator1.next())
function* fn3(){
  let a = yield 'd';
  yield a;
}
generator3 = fn3()
console.log(generator3.next())
console.log(generator3.next('fn3-1'))
//for of 省去了调用next

console.log([...fn3()])

function* fn4(){
    yield 1;
    yield* fn5()
    yield 5;
    return 6
}
function* fn5(){
    yield 2;
    yield 3;
    return 4;
}
let generator4 = fn4()
for(let pro of generator4){
    console.log(pro)
}
//总是返回遍历器对象，不能和new一起使用
//遍历器可以作为状态机使用 
//传值调用与传名调用
//trunk：将传入多个参数执行的函数转变为每一次只传入单个参数的若干函数组合
//co模块