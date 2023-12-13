let myData = {n:0}
let data3 = proxy({data: myData})

// 代理函数
function proxy(options){
    const {data} = options
    //监听逻辑
    let value = data.n
    Object.defineProperty(data, 'n', {
        get(){
            return value
        },
        set(newValue){
            if(newValue < value) return
            value = newValue
        }
    })

    //代理逻辑
    const obj = {}
    Object.defineProperty(obj, 'n', {
        get(){
            return data.n
        },
        set(value){
            if(value<0) return
            data.n = value
        }
    })
    return obj //obj是对{n:0}的代理
}

//data3就是obj，通过代理，我们修改data3的属性，data3就会对其代理的对象进行修改
//且我们不能直接通过访问data.n去修改内容
console.log(`${data3.n}`)
myData.n = -1
console.log(`data3.n = ${data3.n}`)


