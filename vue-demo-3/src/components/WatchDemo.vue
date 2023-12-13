<template>
    <div>
        {{ n }}
        <a-divider></a-divider>

        <a-button type="primary" style="margin-right: 10px;" @click="minus">-1</a-button>
        <a-button type="primary" @click="add">+1</a-button>
        <a-button tyoe="danger" @click="undo">撤销</a-button>
        <div>
            {{ history }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'WatchDemo',
    data() {
        return {
            n: 0,
            history: [],
            inUndoMode: false
        }
    },
    methods: {
        add() {
            this.n += 1
        },
        minus() {
            this.n -= 1 
        },
        undo() {
            const last = this.history.pop()
            this.inUndoMode = true
            this.n = last.from
            // watch是异步的，它会执行完方法才调用watch，这里$nextTick是为了让watch先执行
            this.$nextTick(() => {
                this.inUndoMode = false
            })
        }
    },
    watch: {
        n(newVal, oldVal) {
            if(!this.inUndoMode){
                this.history.push({ from: oldVal, to: newVal })
            }
        }
    }
}
</script>