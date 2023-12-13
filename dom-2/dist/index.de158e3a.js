// // window.jQuery是一个全局函数
// const api = jQuery('.test'); //不返回元素们，返回api对象
// // 链式操作，由于addClass返回的是api本身，我们可以继续addClass
// // this就是api
// api.addClass('red').addClass('blue');//遍历所有刚才获取的元素，添加red
// const x1 = jQuery('.test').find('.child').addClass('red');
// const api1 = jQuery('.test');
// api1.addClass('blue');
// const api2 = api1.find('child').addClass('red');
// api1.addClass('green');
// 测试back函数，我们需要返回上级到test并添加yellow到className
// jQuery('.test')
//     .find('.child')
//     .addClass('red')
//     .addClass('blue')
//     .back()
//     .addClass('yellow')
// 测试each函数
// const x = jQuery('.test').find('.child');
// x.each((n)=>console.log(n))
// 测试parent函数
// const x = jQuery('.test').parent().print();
// 测试children函数
// const x = jQuery('.test').children().print()
//测试previous和next
// console.log('测试');
// const x = jQuery('.test').next().print();
// const y = jQuery('.test').prev().print();
// const z = jQuery('.next').next().print();
// 测试index
const x = jQuery(".current").index();
console.log(x);

//# sourceMappingURL=index.de158e3a.js.map
