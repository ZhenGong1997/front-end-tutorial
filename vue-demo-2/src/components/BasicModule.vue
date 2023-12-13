<template>
    <button @click="show = !show">show = {{ show }}</button>
    <div class="basic-module" v-if="show">
        <h1>Basic Module</h1>
        <!-- 文本插值 -->
        <p>{{ greetMsg }}</p>
        <!-- 文本插值可放入表达式，函数，三元表达式，不支持语句和条件控制 -->
        <p>{{ greetMsg.split('').reverse().join('') }}</p>
        <!-- v-bind绑定多个属性 -->
        <div v-bind="countAttr">
            <div>counter = {{ count }}</div>
            <!-- :属性=“变量”，简写绑定一个属性 -->
            <button :disabled="isButtonDisabled">被禁用按钮</button>
            <!-- @click:="" ,简写绑定事件（可绑定多个）-->
            <button @click="$event => this.count++">+1</button>
            <button @click="$event => this.count--">-1</button>
        </div>
        <hr>
        <!-- v-if 和 v-show 的区别 -->
        <p v-if="seen">点击toggle信息1</p>
        <p v-show="seen">点击toggle信息2</p>
        <button @click="this.seen = !this.seen">toggle</button>
        <hr>
        <span>
            <input type="text" v-model="bookName">
            <button @click="addBook(bookName)">添加书籍</button>
        </span>
        <!-- v-for循环，一定要注明key -->
        <ul>
            <li v-for="(book, index) in books" :key="index">
                {{ book.name }}
                <button @click="deleteBook(book.name)">X</button>
            </li>
        </ul>
        {{ bookMsg  }}
    </div>
</template>

<script>
export default {
    name: 'BasicModule',
    data() {
        return {
            show: true,
            greetMsg: '你好，我是一个基础模块',
            countAttr: {
                class: 'counter',
                style: {
                    color: 'red',
                    fontSize: '20px'
                }
            },
            count: 0,
            isButtonDisabled: true,
            seen: true,
            books:[
                {id:1,name:'《算法导论》'},
                {id:2,name:'《UNIX编程艺术》'},
                {id:3,name:'《编程珠玑》'},
                {id:4,name:'《代码大全》'},],
            
        }
    },
    methods: {
        addBook(bookName){
            this.books.push({
                id:this.books.length+1,
                name:`《${bookName}》`
            })
            this.bookName = ''
        },
        deleteBook(bookName){
            this.books = this.books.filter(book => book.name !== bookName)
        }
    },
    computed:{
        bookMsg(){
            return  this.books.length !== 0
                    ? `一共有${this.books.length}本书`
                    : '没有书籍'
        }
    },
    watch:{
        'books.length'(newVal, oldVal){
            console.log(newVal, oldVal)
        }
    }
}
</script>

<style>
.basic-module {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

ul{
    list-style-type: none;
    padding: 0;
}
</style>