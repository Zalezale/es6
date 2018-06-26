/**
 * 数值的扩展
 */
//1、二进制和八进制的表示
console.log(0b111110111 === 503)
console.log(0o767 === 503)
console.log(Number('0b111110111'))
//2、Number.isFinite(),Number.isNan()与定义在全局的不同之处在于后者先调用Number进行转化然后判断，前者直接判断
//3、Number.parseInt(),Number.parseFloat() 将原来的全局方法迁移到Number上，减少全局变量，使语言逐步模块化
//4、Number.isInteger()  超出精度会丢弃 
console.log(Number.isInteger(25)===Number.isInteger(25.00))
//Number.EPSILON  javascript表示的最小精度(用于设置可接受的误差范围)
console.log(Number.EPSILON)
//Number.isSafeInteger  判断数值是否越界
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)