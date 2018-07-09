function timeout(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms,'then(6行)------注册并运行由pending变为resolved状态时的函数('+ms+")")
    })
}

function catchP1(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject('catch(value)(18行)------注册并运行由pending变为reject时的的函数')
        }, 0);
    })
}
function catchP2(){
    return new Promise((resolve,reject)=>{
        throw new Error('catch(error)------注册并运行由pending变为reject时的的函数')
    })
}
catchP1().catch((value)=>console.log(value))
catchP2().catch((value)=>console.log('catch(error)(22行)------运行过程中抛出异常'))

  Promise.all([timeout(100).then((value)=>console.log(value)),timeout(200).then((value)=>console.log(value))]).then(()=>
    console.log('all(44行)------'+'resolved')
  ).catch(()=>console.log('finally(44行)------'+'reject'))
  Promise.race([timeout(100).then((value)=>value),timeout(200).then((value)=>console.log(value))]).then((value)=>
    console.log('race------'+value)
  ).catch(()=>console.log('finally(44行)------'+'reject'))
  //finally 2018的产物 catch返回的为promise对象  