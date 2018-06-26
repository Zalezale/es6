/*正则的扩展*/
//1、完善RegExp
let regex = new RegExp(/xyz/ig,'i')
console.log(regex.flags)
//2、u修饰符 正确处理utf-16编码
console.log(/^\uD83D/u.test('\uD83D\uDC2A'))//识别utf-16
console.log(/^.$/u.test('𠮷'))//点正确代表utf-16的一个字符
console.log(/\u{20BB7}/u.test('𠮷'))//unicode表示法
console.log(/𠮷{2}/u.test('𠮷𠮷'))//正确根据量词匹配utf-16字符
console.log(/^\S$/u.test('𠮷'))//正确解析预定义模式（和点一致）
console.log(/[a-z]/iu.test('\u212A'))//正确解析编码不同但字型相似
//3、RegExp.prototype.unicode||sticky||flags||dotAll
console.log(/hello/u.unicode)
console.log(/hello\d/y.sticky)
//4、y修饰符 检验上次匹配位置后第一个位置是否匹配(提取词元)
//g修饰符会忽略非法字符，而y修饰符不会，这样就很容易发现错误
console.log('a1a2a3'.match(/a\d/y))
console.log('a1a2a3'.match(/a\d/gy))
//5、s修饰符   使点可以匹配行终止符  s在chrom中可以被识别在vscode中没办法识别
//console.log(/foo.bar/s.test('foo\nbar'))
//6、后行断言、属性类、具名组匹配、解构赋值和替换、引用、  es2018产品，等稳定了再看吧
//7、String.prototype.matchAll  提案