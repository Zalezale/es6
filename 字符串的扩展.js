/*字符串的扩张*/
//1、字符unicode表示法
//码点在\u0000~\uFFFF之间的字符(16位)。超出这个范围的字符，必须用两个双字节的形式表示，es6提供了一种写法{}，可以识别单字节且范围超出的字符
console.log("\u{20BB7}")
//2、codePointAt()返回（超出16位）正确的码点，想要获取正确的长度用for  of（其识别大于16位的码点）
let a = '𠮷'
console.log(a.codePointAt(0))
//3、String.fromCodePoint()返回（超出16位）正确字符
console.log(String.fromCodePoint('0x'+'20BB7'))
//4、at()提案
//5、normalize（）解决合成字符javascript不识别的问题
console.log('\u004F\u030C'.normalize())
console.log('\u01D1'.normalize())
//7、includes(),startWith(),endsWith()
//8、repeat()
//9、模板字符串
//(1)内部换行空白会保留，使用trim()不会去除(2)可以嵌套(2)${数字|字符串|方法调用|变量|对象.toString()}
console.log(`
<ul>
<li>first</li>
<li>second</li>
</ul>`.trim())
console.log(`${[1,2,3].map((value,index)=>`${value+2}`)}`)
console.log(`${1}${'哈哈'}${{name:'zale'}}`)
//10、标签模板(以变量所在位置分割为若干实参，变量外组成数组（含有一个raw属性（1位数组），保存的是转义之后的原始字符串）作为第一个参数，其余变量依次占位)
let a1 = 10
function test(){
    console.log(arguments[0])
    console.log(arguments[1])
    console.log(arguments[2])
    console.log(arguments[3])
}
test`${++a1}好${--a1}`
//用途一过滤html字符串窜用途二国际化
