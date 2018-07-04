//1、Proxy   目标对象的代理
let proxy1 = new Proxy({},{
    get(target, property) {
        if(property === 'today'){
            return target[property]
        }
        return 35;
      }
})
console.log('不拦截today属性------：'+proxy1.today)
console.log('拦截today1属性------：'+proxy1.today1)
//2、拦截器的实例方法
//（1）get（set）如果目标对象的属性为不可配置不可写，则拦截器不能修改该属性;可以防止用户读写私有属性
let proxy2 = new Proxy({},{
    set(target,property,value,proxy){
        target[property]='123'
    }
})
proxy2.name='zale'
console.log('set------：'+proxy2.name)
let target = function () { return 'I am the target'; };
handler = {
  apply: function () {
    return 'I am the proxy';
  }
};
//(2)apply  拦截器变为函数执行的过程，等于target.propertype.apply(targetContext,args)
var proxy3 = new Proxy(function(a){return 'target fn'+a}, {
    apply(target,context,arg){
        return 'proxy'+arg[0]
    }
});
console.log('apply------:'+proxy3([1]))
//（3）has 拦截hasProperty 对in有效 对for in无效   若某个属性不可扩展或不可配置，那么has不可拦截
let proxy4 = new Proxy({name:'zale',age:18},{
    has(target,pro){
      if(pro==='name'){
          return false;
      }
      return true
    }
})
console.log('has------+'+('kkk' in proxy4))
//4、construct(target, args)拦截new  返回的必须是对象
//5、deleteProperty(target, key)  抛出错误或返回false 属性不能被删除   属性为不可配置那么不能被拦截器删除否则报错
//6、getOwnPropertyDescriptor(target,key)  返回描述对象或者undefind
//7、getPrototypeOf(target) 拦截获取对象原型  返回对象或者null
//8、ownKeys(target) 拦截对象自身属性的读写操作
//9、setPrototypeOf(target,pro) 拦截原型的设立 返回布尔值
//10、Proxy.revocable()  目标对象不允许直接访问，必须通过代理访问，一旦访问结束，就收回代理权，不允许再次访问
let target1 = {}
let handle = {}
let {proxy,revoke} = Proxy.revocable(target1,handle)
proxy.foo =1
console.log(proxy.foo)
revoke();
//console.log(proxy.foo) 禁止访问
//this 指向的是proxy
