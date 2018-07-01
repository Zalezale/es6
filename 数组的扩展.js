/**
 * 数组的扩展
 */
//1、扩展运算符   （主要用于函数调用，将一个数组转为逗号分割的参数序列）
console.log(...['扩展运算符------',2,3])
//2、替代函数apply
function fn1(a,b,c){
    console.log('替代函数apply------'+(a+b+c))
}
fn1(...[1,2,3])
//3、扩展运算符的应用
//（1）复制数组
const a1 = [1,2]
const [...a2] = a1
console.log('克隆数组------'+a2)
//(2)合并数组
const a3 = [...a1,...a2]
console.log('合并数组------'+a3)
//(3)用于解构赋值
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log('解构赋值------'+first)
//(4)字符串(能正确识别4个字节的unicode字符)
console.log('字符串------'+[...'\uD83D\uDE80y'].length)
console.log('字符串------'+'🚀'.length)
console.log('字符串------'+'\uD83D\uDE80y'.length)
//(5)实现了iterator对象可以通过扩展运算符转换为数组 
//(6)map set结构，generator函数
//(7)Array.from()（将类数组对象与可遍历对象转换为数组，正确识别字符串长度）
//(8)Array.of() (弥补构造函数Array因传入参数个数不同导致的返回差异)
console.log('Array.of------'+Array.of(1,2,3))
//(9)copyWithin() 
console.log('copyWithin------'+[1,2,3].copyWithin(0,2))
