window.dom = {

    /* 增--------------------------------*/
    // 创建一个新的元素
    create(string){
        //template 内部可以容纳其他任意标签，div不行，所以我们使用template帮助创建
        const container = document.createElement("template");
        //去掉传入string前后的空格
        container.innerHTML = string.trim()
        // container.content是一个document-fragment
        return container.content.firstChild;
    },

    // 在某节点之后增加一个“弟弟”节点
    after(newNode, node){
        // JS只提供Node.insertBefore,转换思想，当前节点之后相当于下一个节点之前
        // 若下一节点为null，并不会报错，而是自动加入当前节点之后
        node.parentNode.insertBefore(newNode, node.nextSibling);
    },
    // 在某节点之前增加一个“哥哥”节点
    before(newNode, node){
        node.parentNode.insertBefore(newNode, node);
    },

    // 增加一个子节点
    append(node, parent){
        parent.appendChild(node);
    },

    // 增加一个父节点
    wrap(node, newNode){
        // 把新节点放在当前节点前面，再将其变成父节点
        // 保证原父节点不会被顶替，而是将新节点插入在两层之间
        dom.before(newNode, node);
        dom.append(node, newNode);
    },


    /*删--------------------------------------*/
    // 删除节点
    remove(node){
        node.parentNode.removeChild(node);
        // 返回被删除节点作参考验证
        return node;
    },

    // 删除改节点所有子元素
    empty(node){
        const childNodes = node.childNodes;
        const array = [];
        /* 危险！！代码错误，不可以边read边remove！！
        for(let i=0; i<childNodes.length; i++){
            dom.remove(childNodes[i]);
            array.push(childNodes[i]);
        }*/
        while(node.firstChild){
            array.push(dom.remove(node.firstChild));
        }
        // 返回被删除所有子元素节点作参考验证
        return array;
    },

    /* 改和读-------------------------------- */
    // 读写属性,JS允许函数传参数量小于预设,这叫做“重载” overload
    attr(node, name, value){
        if(arguments.length === 3){
            node.setAttribute(name, value);
        } else if (arguments.length === 2){
            return node.getAttribute(name);
        }
    },

    //读写文本内容
    text(node, string){ //适配
        if(arguments.length === 2){
            if('innerText' in node){
                node.innerText = string; //ie
            } else {
                node.textContent = string;// firefox, chrome
            }
        } else if(arguments.length === 1) {
            if('innerText' in node){
                return node.innerText
            } else {
                return node.textContent;
            }
        }  
    },

    //读写HTML内容
    html(node, string){ 
        if(arguments.length === 2){
            node.innerHTML = string;
        } else if (argument.lenght === 1){
            return node.innerHTML;
        }
    },

    // 修改style
    style(node, name, value){
        if(arguments.length === 3){
            //dom.style(div, 'color', 'red')
            node.style[name] = value;
        } else if (arguments.length === 2){
            if(typeof name === 'string'){
                //dom.style(div, 'color') 获取style的值
                return node.style[name];
            } else if (name instanceof Object) {
                const object = name;
                for(let key in object){
                    //key: border /  color ...
                    //node.style.border =...
                    //dom.style(node, {color:'red'})
                    node.style[key] = object[key];
                }
            }
        }
    },

    // 添加class && 删除class
    class: {
        add(node, className){
            node.classList.add(className);
        },
        remove(node, className){
            node.classList.remove(className);
        },
        has(node, className){
            return node.classList.contains(className);
        }
    },

    // 添加事件监听
    on(node, eventName, fn){
        node.addEventListener(eventName, fn);
    },
    // 删除事件监听
    off(node, eventName, fn){
        node.removeEventListener(eventName, fn);
    },

    /* 查--------------------------- */
    // 查找元素
    find(selector, scope){
        //若有范围，则在范围内寻找选择器
        return (scope || document).querySelectorAll(selector); 
    },

    // 查找父元素
    parent(node){
        return node.parentNode;
    },

    // 查找子元素
    children(node){
        return node.children;
    },

    // 查找兄弟姐妹元素
    siblings(node){
        // node.children得到的是伪数组，需要先用转成数组，再用filter除掉自己
        return Array.from(node.parentNode.children).filter(n => n!== node);
    },

    // 查找下一个同阶元素
    next(node){
        let curNode = node.nextSibling;
        // 存在,略过text文本内容（回车）
        while(curNode && curNode.nodeType === 3){
            curNode = curNode.nextSibling;
        }
        return curNode;
        // return node.nextElementSibling;
    },

    // 查找上一个同阶元素
    previous(node){
        let curNode = node.previousSibling;
        while(curNode && curNode.nodeType === 3){
            curNode = curNode.previousSibling;
        }
        return curNode;
        // return node.previousElementSibling;
    },

    // 遍历一层nodeList，每个node执行函数
    each(nodeList, fn){
        for(let i=0; i<nodeList.length; i++){
            fn.call(null,nodeList[i]);
        }
    },
    
    // 查找当前节点在同阶的位置
    index(node){
        const nodeList = Array.from(dom.children(node.parentNode));
        return nodeList.indexOf(node);
    }
};

