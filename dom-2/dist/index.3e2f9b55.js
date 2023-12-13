window.$ = window.jQuery = function(selectorOrArray) {
    let elements;
    // 重载
    if (typeof selectorOrArray === "string") elements = document.querySelectorAll(selectorOrArray);
    else if (selectorOrArray instanceof Array) elements = selectorOrArray;
    // jquery精髓：利用闭包，用函数维持elements
    // 核心操作：1.闭包 2.链式操作
    // return可以操作elements的对象
    return {
        // 需要把find中之前的array上的oldApi复制到api对象上
        oldApi: selectorOrArray.oldApi,
        // 闭包，addClass访问外部变量elements
        addClass (className) {
            // 给elements中的所有class添加名字
            for(let i = 0; i < elements.length; i++)elements[i].classList.add(className);
            // 链式技巧
            return this;
        },
        find (selector) {
            let array = [];
            for(let i = 0; i < elements.length; i++){
                const elements2 = Array.from(elements[i].querySelectorAll(selector));
                array = array.concat(elements2);
            // array = array.concat(Array.from(elements[i].querySelectorAll(selector)));
            }
            // JS中数组是对象，对象可以添加属性，这样我们在oldApi记住了parent，方便back函数溯回
            array.oldApi = this;
            // 此接口为了链式新的对象，防止操作的是共用element
            return jQuery(array);
        },
        back () {
            return this.oldApi;
        },
        each (fn) {
            for(let i = 0; i < elements.length; i++)fn.call(null, elements[i], i);
            return this;
        },
        // 返回当前
        parent () {
            const array = [];
            this.each((node)=>{
                // 注意不能用in，JS的in只查询key，不查询value，一维数组的key是隐藏的
                if (array.indexOf(node.parentNode) === -1) array.push(node.parentNode);
            });
            return jQuery(array);
        },
        children () {
            const array = [];
            this.each((node)=>{
                // ...是展开操作符，把数组里的内容平铺，防止里面是HTMLCollection
                array.push(...node.children);
            });
            return jQuery(array);
        },
        print () {
            console.log(elements);
        },
        next () {
            const array = [];
            this.each((node)=>{
                array.push(node.nextElementSibling);
            });
            return jQuery(array);
        },
        prev () {
            const array = [];
            this.each((node)=>{
                array.push(node.previousElementSibling);
            });
            return jQuery(array);
        },
        index () {
            const arrayIndex = [];
            this.each((node)=>{
                const nodeList = Array.from(node.parentNode.children);
                arrayIndex.push(nodeList.indexOf(node));
            });
            return arrayIndex;
        }
    };
};

//# sourceMappingURL=index.3e2f9b55.js.map
