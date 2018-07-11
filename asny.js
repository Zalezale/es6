function timeout(ms){
    return new Promise((resolve)=>{
        setTimeout(resolve, ms);
    })
}

async function asyncPrint(value,ms){
    await timeout(ms).then(function(){
        console.log('promise回掉完成')
    })
    console.log(value)
}
asyncPrint('前一个promise完成',5000).then(function(){
    console.log('整个asny完成')
})

async function fn1(){
    return 'return的内容可以作为then中的传参'
}
fn1().then((v)=>console.log(v))


