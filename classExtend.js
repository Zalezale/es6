/**
 * super()使用之后才能使用this
 * 子类必须调用一次super(),super中this指向子类
 * super作为函数只能用于子类构造函数中，为对象在普通方法中调用父类方法指向父类原型（this指向子类实例），在静态方法中调用父类方法指向父类（this指向子类）
 * Object.getPrototypeOf 获取父类
 * 子类的_proto_指向父类 子类的prototype中的_proto_指向父类的prototype
 * 支持原生继承
 * 如果Object()不是通过new调用，那么忽略传入参数
 */
class Student {
    constructor(content){
           this.content = 'Student'
        }
       static study(){
            console.log('Student'+this.content);
        }
        study(){
            console.log('prototype'+this.content);
        }
}
class St1 extends Student {
    constructor(){
        super()
        this.content='kate'
    }
    static show(){
        super.study()
    }
    show() {
        super.study()
    }
}
let st1 = new St1()
St1.content = 'St1'
st1.show()
St1.show()
console.log(Object.getPrototypeOf(St1)===Student)
console.log(St1.__proto__===Student)
console.log(St1.prototype.__proto__===Student.prototype)

class MyArray extends Array{
    constructor(...args){
        super(...args)
        this.full = this.full.bind(this);
    }
    full(){
       if(this.length>3){
           console.log('full')
           return
       }
       console.log('unfull')
    }
}

let array = new MyArray(1,2)
array.push(3)
array.full();
array.push(4)
array.full();