/*变量的解构赋值*/

//1、数组结构赋值
let test = (name) => {
  console.log(name)
  return name
}
let [a, b = 2, c, d = test('zale'), e] = [1, undefined, null, 2]
console.log(a), console.log(b), console.log(c), console.log(d);
//完全解构赋值，不完全结构赋值，默认值，默认值生效条件严格等于undefind，解构赋值中默认值为表达式时为惰性赋值
//2、对象的解构赋值
let { bar, foo: fo, kkk } = { foo: "aaa", bar: "bbb" };
console.log(bar), console.log(fo), console.log(kkk)
//模式的使用，别名，解构失败
//3、字符串解构赋值（转变为数组）
const [a1, b1, c1, d1, e1] = 'hello';
console.log(a1)
//4、数值和布尔值的解构赋值（转变为对象）
let {toString: s1} = 123;
console.log(s1 === Number.prototype.toString)
let {toString: s2} = true;
console.log(s2 === Boolean.prototype.toString)
//5、null与undefind（undefined和null无法转为对象，所以对它们进行解构赋值，都会报错）
// let { prop: x } = undefined; // TypeError
// let { prop: y } = null; // TypeError
//6、函数参数解构
function move1({x, y} = { x: 0, y: 0 }) {
  console.log(x+''+y)
  return [x, y];
}
function move2({x=0,y=0}={}){
  console.log(x+''+y)
  return [x,y];
}
move1({}),move2({});
//move1为函数参数赋默认值，move2为x,y赋默认值
//7、圆括号的使用
//尽量避免，遇到在看
//8、用途（重要的地方）
//（1）交换变量的值（2）从函数返回多个值（3）函数参数的定义（4）提取 JSON 数据（5）函数参数的默认值（6）遍历 Map 结构（7）输入模块的指定方法
