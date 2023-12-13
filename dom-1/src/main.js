const div = dom.create('<div>newDiv</div>');
dom.after(div, test);

const div2 = dom.create(`<div id="parent"> hello </div>`);
dom.wrap(test,div2);

// 被移除的文本节点是div的回车
const nodes = dom.empty(window.empty);
console.log(nodes);

dom.attr(test, 'title', 'Hi, I am Frank');
const title = dom.attr(test, 'title');
console.log(`title:${title}`);

dom.text(test, '你好，这是新的内容');


dom.style(test,{border:'1px solid red', color:'blue'});
dom.style(test,'font-size','30px');
console.log(dom.style(test, 'font-size'));

dom.class.add(test, 'red');
dom.class.remove(test,'red');
console.log(dom.class.has(test,'red'));

fn = () => {
    console.log('点击了');
}
dom.on(test, 'click', fn);
dom.off(test, 'click', fn);

console.log('测试find函数');
const testDiv = dom.find('#test')[0];
console.log(testDiv);

const testDiv2 = dom.find('#test2')[0];
console.log(dom.find('.red', testDiv2)[0]);

console.log('测试parent函数');
console.log(dom.parent(test));

console.log('测试children函数');
console.log(dom.children(siblings));

console.log('测试sibling函数');
console.log(dom.siblings(dom.find('#s2')[0]));

console.log('测试next函数');
const s2 = dom.find('#s2')[0];
console.log(dom.next(s2));

console.log('测试previous函数');
console.log(dom.previous(s2));

console.log('测试travel函数');
const t = dom.find('#travel')[0];
fn = n => {
    dom.style(n,'color','red');
}

console.log('测试each函数');
dom.each(dom.children(t), fn);

console.log('测试index函数');
const t3 = dom.find('#t3')[0];
console.log(dom.index(t3));