//1、统一访问接口2、制定排序规则3、for of有效
let People = { walk: true, eat: true ,data:['mon','tue','web']}
let zale = Object.create({
    [Symbol.iterator](){
        const self = this 
        let index = 0
        return{
            next(){
                return {
                    value:self.data[index++],
                    done:index>=4?true:false
                }
            }
        }
    }
}, {
    name: {
        enumerable: true,
        writable: true,
        configurable: true,
        value: "zale"
    }
}) //创建以{}为原型的对象
Object.assign(zale, People)//向目标对象添加属性
for(let pro of zale){
    return;
    if(pro==='tue'){
        continue;
    }
    if(pro==='web'){
        break
    }
    console.log('手动部署Symbol.interator------'+pro)
}

let set = new Set().add('a').add('b').add('c')
let [a,...c] = set
console.log('解构赋值与扩展运算符------'+a+c)