<template>
    <div id="components-button-demo-button-group">
        <h4>Basic</h4>
        <a-button-group>
            <a-button>Cancel</a-button>
            <a-button type="primary">
                OK
            </a-button>
        </a-button-group>
        <a-button-group>
            <a-button disabled>
                L
            </a-button>
            <a-button disabled>
                M
            </a-button>
            <a-button disabled>
                R
            </a-button>
        </a-button-group>
        <a-button-group>
            <a-button type="primary">
                L
            </a-button>
            <a-button>M</a-button>
            <a-button>M</a-button>
            <a-button type="dashed">
                R
            </a-button>
        </a-button-group>

        <h4>With Icon</h4>
        <a-button-group>
            <a-button type="primary"> <a-icon type="left" />Go back </a-button>
            <a-button type="primary"> Go forward<a-icon type="right" /> </a-button>
        </a-button-group>
        <a-button-group>
            <a-button type="primary" icon="cloud" />
            <a-button type="primary" icon="cloud-download" />
        </a-button-group>
        <a-icon type="left-circle" theme="twoTone" />
        <div class="icons-list">
            <a-icon type="home" />
            <a-icon type="setting" theme="filled" />
            <a-icon type="smile" theme="outlined" />
            <a-icon type="sync" spin />
            <a-icon type="smile" :rotate="180" />
            <a-icon type="loading" />
        </div>
        <a-icon type="smile" theme="twoTone" />
        <a-icon type="heart" theme="twoTone" two-tone-color="#eb2f96" />
        <a-icon type="check-circle" theme="twoTone" two-tone-color="#52c41a" />
        <a-row>
            <a-col :span="12">
                col-12
            </a-col>
            <a-col :span="12">
                col-12
            </a-col>
        </a-row>
        <div>
            <p>Align Top</p>
            <a-row type="flex" justify="center" align="top">
                <a-col :span="4">
                    <p class="height-100">
                        col-4
                    </p>
                </a-col>
                <a-col :span="4">
                    <p class="height-50">
                        col-4
                    </p>
                </a-col>
                <a-col :span="4">
                    <p class="height-120">
                        col-4
                    </p>
                </a-col>
                <a-col :span="4">
                    <p class="height-80">
                        col-4
                    </p>
                </a-col>
            </a-row>

            <p>Align Center</p>
            <a-row type="flex" justify="space-around" align="middle">
                <a-col :span="4">
                    <p class="height-100">
                        col-4
                    </p>
                </a-col>
                <a-col :span="4">
                    <p class="height-50">
                        col-4
                    </p>
                </a-col>
                <a-col :span="4">
                    <p class="height-120">
                        col-4
                    </p>
                </a-col>
                <a-col :span="4">
                    <p class="height-80">
                        col-4
                    </p>
                </a-col>
            </a-row>

            <p>Align Bottom</p>
            <a-row type="flex" justify="space-between" align="bottom">
                <a-col :span="4">
                    <p class="height-100">
                        col-4
                    </p>
                </a-col>
                <a-col :span="4">
                    <p class="height-50">
                        col-4
                    </p>
                </a-col>
                <a-col :span="4">
                    <p class="height-120">
                        col-4
                    </p>
                </a-col>
                <a-col :span="4">
                    <p class="height-80">
                        col-4
                    </p>
                </a-col>
            </a-row>
        </div>
        <a-divider orientation="left">
            Fill rests
        </a-divider>
        
    </div>
</template>
<script>
export default {
    name: 'Buttons',
    components: {

    },
    methods: {
        handleMenuClick(e) {
            console.log('click', e);
        }
    }
}
</script>

<style scoped>
#components-button-demo-button-group>h4 {
    margin: 16px 0;
    font-size: 14px;
    line-height: 1;
    font-weight: normal;
}

#components-button-demo-button-group>h4:first-child {
    margin-top: 0;
}

#components-button-demo-button-group .ant-btn-group {
    margin-right: 8px;
}

.icons-list .anticon {
    margin-right: 6px;
    font-size: 50px;

}

.a-col {
    border: 1px solid #d9d9d9;
    background: #fafafa;
    text-align: center;
}
</style>
  