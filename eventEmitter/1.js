//@ts-check
// 事件队列：监听事件，触发事件，移除事件，这就是发布订阅模式
class EventEmitter{
    constructor(){
        this.queue = {};
    }
    //name: 事件名称, fn: 事件函数
    addEventListener(name, fn){
        //初始化事件队列
        this.queue[name] = this.queue[name] || [];
        this.queue[name].push(fn);
    }
    removeEventListener(name, fn){
        if(!this.queue[name]) return; // 不存在event

        const index = this.queue[name].indexOf(fn);
        if(index < 0) return; // 不存在event
        this.queue[name].splice(index,1);
    }
    dispatchEvent(name, ...args){
        // 依次执行事件函数
        // 可选链语法：可选链语法是 JavaScript 中一种用于简化访问嵌套对象属性或方法的语法，
        // 以防止在链中的任何点上出现空或未定义的值时引发错误。它使 用问号 ? 来判断在链中的某个点是否存在，
        // 如果存在就继续访问，否则返回 undefined。
       
        this.queue[name]?.forEach(fn => fn(...args));
    }

}

const obj = new EventEmitter();
const fn = (...reasons) => console.log(...reasons); 
obj.addEventListener('死亡', fn);
setTimeout(() => {
    obj.dispatchEvent('死亡', '渴死了', '饿死了');
},3000);