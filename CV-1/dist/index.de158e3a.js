//通过css选择器找到这个元素
let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `
/*
你好，
接下来我将演示一下我的前端功底
首先准备一个div
*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}

/*
接下来我把div变成一个八卦图
首先，把div变成一个圆
*/

#div1{
    border-radius:50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
}

/*
八卦是阴阳形成的，一黑一白
*/
#div1{
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

/*变成两个阴阳鱼*/
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background:#000;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background:#fff;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}




`;
// 使用正则表达式将所有回车变成html编译的空行
// string = string.replace(/\n/g,"<br>");
// setTimeout(()=>{
//     html.innerHTML = 2;
// }, 1000);
// let n = 1;
// setInterval(()=>{
//     n = n+1;
//     html.innerHTML = n;
// }, 1000);
let string2 = "";
let n = 0;
let step = ()=>{
    setTimeout(()=>{
        if (n < string.length) {
            if (string[n] === "\n") //如果是回车，就不照搬
            string2 += "<br>";
            else if (string[n] === " ") string2 += "&nbsp";
            else string2 += string[n];
            html.innerHTML = string2;
            style.innerHTML = string.substring(0, n);
            // 每次写完滚动到最底部
            window.scrollTo(0, 9999);
            html.scrollTo(0, 9999);
            n = n + 1;
            step();
        }
    }, 0);
};
step();

//# sourceMappingURL=index.de158e3a.js.map
