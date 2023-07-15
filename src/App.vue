<template>
    <div class="App">
        <div class="common-layout">
            <el-container>
                <el-header>
                    <el-menu
                        :default-active="activeIndex2"
                        class="el-menu-demo"
                        mode="horizontal"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b"
                        @select="handleSelect"
                    >
                        <img
                            src="@/assets/img/logo.png"
                            style="margin-left: 10px; width: 50px; height: 50px"
                        />
                        <div class="text-hasmokan">西北银行</div>
                        <div class="flex-grow" />
                        <el-menu-item index="1">
                            <router-link to="/">首页</router-link>
                        </el-menu-item>

                        <el-sub-menu index="2">
                            <template #title>银行业务</template>
                            <el-menu-item index="2-1"> 银行卡办理 </el-menu-item>
                            <el-menu-item index="2-2"> 资金转账 </el-menu-item>
                            <el-menu-item index="2-3"> 资产查询 </el-menu-item>
                            <el-menu-item index="2-4"> 资产存款 </el-menu-item>
                            <el-menu-item index="2-5"> 资产存款 </el-menu-item>
                        </el-sub-menu>
                        <el-menu-item index="3">
                            <router-link to="/domestic">ESG国内标准</router-link>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <router-link to="/card">银行卡管理</router-link>
                        </el-menu-item>
                        <!-- 下拉 登陆按钮-->
                        <div v-show="!loginState" class="flex flex-wrap items-center">
                            <el-dropdown>
                                <el-button type="primary" color="rgb(255,165,5)">
                                    系统登陆<el-icon class="el-icon--right"><arrow-down /></el-icon>
                                </el-button>
                                <template #dropdown>
                                    <el-dropdown-menu>
                                        <el-dropdown-item @click="PersonalLoginClick"
                                            >个人登陆</el-dropdown-item
                                        >
                                        <el-dropdown-item @click="EnterpriseLoginClick"
                                            >企业登陆</el-dropdown-item
                                        >
                                    </el-dropdown-menu>
                                </template>
                            </el-dropdown>
                        </div>
                        <span
                            v-show="loginState"
                            style="
                                width: 200px;
                                margin-left: 50px;
                                white-space: nowrap;
                                display: flex;
                                font-size: smaller;
                                color: white;
                            "
                        >
                            您好，尊敬的 &ensp;
                            <div style="color: gold">{{ userName }}</div>
                        </span>
                        <!-- 搜索框 -->
                        <div class="search">
                            <el-input placeholder="Please input" class="input-with-select">
                                <template #append>
                                    <el-button :icon="Search" />
                                </template>
                            </el-input>
                        </div>
                    </el-menu>
                </el-header>

                <!--页面主体 -->

                <router-view v-slot="{ Component }">
                    <transition name="fade">
                        <component :is="Component" />
                    </transition>
                </router-view>

                <el-footer height="200px">
                    <div class="left">
                        <div class="left-box">
                            <ul>
                                <li>使用条款</li>
                                <li>法律声明</li>
                                <li>个人信息保护方针</li>
                                <li>举报政策</li>
                            </ul>
                        </div>
                        <div class="left-icon">
                            <el-icon :size="30" color="rgb(255, 165, 5)"><PhoneFilled /></el-icon>
                            <el-icon :size="30" color="rgb(255, 165, 5)"
                                ><LocationFilled
                            /></el-icon>
                            <el-icon :size="30" color="rgb(255, 165, 5)"><ChromeFilled /></el-icon>
                        </div>
                    </div>
                    <div class="right">
                        <div class="imgbox">
                            <div class="code">
                                <img src="/assets/img/code.png" alt="" class="right-code" />
                                <div class="right-text">扫码联系我们</div>
                            </div>
                            <img src="/assets/img/xbdx.png" alt="" class="right-img" />
                        </div>
                    </div>
                </el-footer>
            </el-container>
        </div>
        <el-dialog v-model="centerDialogVisible" width="410px" center>
            <template #header="{ close, titleId, titleClass }">
                <div class="my-header" style="margin-left: 200px">
                    <h4 :id="titleId" :class="titleClass" style="font-size: 14px; color: gray">
                        终于等到你~
                        <img src="@/assets/img/logo.png" alt="" style="width: 40px" />
                    </h4>
                </div>
            </template>
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                <el-tab-pane label="登陆" name="first">
                    <el-input v-model="input" placeholder="账号/用户名" />
                    <el-input v-model="input" type="password" placeholder="密码" show-password />
                    <div class="forget-password">忘记密码</div>
                    <el-button type="primary" @click="handlePersonalLogin"> 登陆 </el-button>
                </el-tab-pane>
                <el-tab-pane label="注册" name="second">
                    <el-input v-model="input" placeholder="账号/用户名" />
                    <el-input v-model="input" type="password" placeholder="密码" show-password />
                    <div class="forget-password">忘记密码</div>
                    <el-button type="primary" @click="handlePersonalRegister"> 注册 </el-button>
                </el-tab-pane>
            </el-tabs>
        </el-dialog>
    </div>
</template>

<script lang="ts" setup>
//设置导航激活
import { ref } from 'vue'
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'
import { ArrowDown } from '@element-plus/icons-vue'
import type { TabsPaneContext } from 'element-plus/es/components/tabs/src/constants'
import { useUserStore } from './stores/userStore'
import { useLoginStore } from './stores/loginState'

// button的登陆状态
const loginState = ref(useLoginStore().getLoginState)
//用户名称
const userName = ref(useUserStore().userId)
//导航栏
const activeIndex2 = ref('1')

//登录注册对话框
const centerDialogVisible = ref(false)
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

const input = ref('')
//登陆事件
const PersonalLoginClick = () => {
    centerDialogVisible.value = true
}

const handlePersonalLogin = () => {
    centerDialogVisible.value = false
    loginState.value = true
}

const handlePersonalRegister = () => {}
const EnterpriseLoginClick = () => {}

//标签页
const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}
</script>
<style lang="scss" scoped>
@font-face {
    font-family: AlimamaFangYuanTiVF-Thin;
    src: url(https://puhuiti.oss-cn-hangzhou.aliyuncs.com/AlimamaFangYuanTiVF/AlimamaFangYuanTiVF-Thin/AlimamaFangYuanTiVF-Thin.eot)
            format('embedded-opentype'),
        url(https://puhuiti.oss-cn-hangzhou.aliyuncs.com/AlimamaFangYuanTiVF/AlimamaFangYuanTiVF-Thin/AlimamaFangYuanTiVF-Thin.otf)
            format('opentype'),
        url(https://puhuiti.oss-cn-hangzhou.aliyuncs.com/AlimamaFangYuanTiVF/AlimamaFangYuanTiVF-Thin/AlimamaFangYuanTiVF-Thin.ttf)
            format('TrueType'),
        url(https://puhuiti.oss-cn-hangzhou.aliyuncs.com/AlimamaFangYuanTiVF/AlimamaFangYuanTiVF-Thin/AlimamaFangYuanTiVF-Thin.woff)
            format('woff'),
        url(https://puhuiti.oss-cn-hangzhou.aliyuncs.com/AlimamaFangYuanTiVF/AlimamaFangYuanTiVF-Thin/AlimamaFangYuanTiVF-Thin.woff2)
            format('woff2');
}
@font-face {
    font-family: DingTalkJinBuTi-Regular;
    src: url(https://puhuiti.oss-cn-hangzhou.aliyuncs.com/DingTalkJinBuTi/DingTalkJinBuTi-Regular/DingTalkJinBuTi-Regular.eot)
            format('embedded-opentype'),
        url(https://puhuiti.oss-cn-hangzhou.aliyuncs.com/DingTalkJinBuTi/DingTalkJinBuTi-Regular/DingTalkJinBuTi-Regular.otf)
            format('opentype'),
        url(https://puhuiti.oss-cn-hangzhou.aliyuncs.com/DingTalkJinBuTi/DingTalkJinBuTi-Regular/DingTalkJinBuTi-Regular.ttf)
            format('TrueType'),
        url(https://puhuiti.oss-cn-hangzhou.aliyuncs.com/DingTalkJinBuTi/DingTalkJinBuTi-Regular/DingTalkJinBuTi-Regular.woff)
            format('woff'),
        url(https://puhuiti.oss-cn-hangzhou.aliyuncs.com/DingTalkJinBuTi/DingTalkJinBuTi-Regular/DingTalkJinBuTi-Regular.woff2)
            format('woff2');
}

@font-face {
    font-family: AlimamaShuHeiTi-Bold;
    src: url(https://puhuiti.oss-cn-hangzhou.aliyuncs.com/AlimamaShuHeiTi/AlimamaShuHeiTi-Bold/AlimamaShuHeiTi-Bold.eot)
            format('embedded-opentype'),
        url(https://puhuiti.oss-cn-hangzhou.aliyuncs.com/AlimamaShuHeiTi/AlimamaShuHeiTi-Bold/AlimamaShuHeiTi-Bold.otf)
            format('opentype'),
        url(https://puhuiti.oss-cn-hangzhou.aliyuncs.com/AlimamaShuHeiTi/AlimamaShuHeiTi-Bold/AlimamaShuHeiTi-Bold.ttf)
            format('TrueType'),
        url(https://puhuiti.oss-cn-hangzhou.aliyuncs.com/AlimamaShuHeiTi/AlimamaShuHeiTi-Bold/AlimamaShuHeiTi-Bold.woff)
            format('woff'),
        url(https://puhuiti.oss-cn-hangzhou.aliyuncs.com/AlimamaShuHeiTi/AlimamaShuHeiTi-Bold/AlimamaShuHeiTi-Bold.woff2)
            format('woff2');
}

.el-menu {
    font-family: AlimamaFangYuanTiVF-Thin;
    /*-------text -----*/
    .text-hasmokan {
        font-family: AlimamaShuHeiTi-Bold;
        font-size: 30px;
        background-image: linear-gradient(15deg, darkgoldenrod, white, gold);
        background-size: 500%;
        margin-left: 10px;
        display: initial;
        -webkit-background-clip: text;
        white-space: nowrap;
        color: transparent;
        animation: bgAnimation 10s linear infinite;
    }
    @keyframes bgAnimation {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
}

.el-dialog {
    :deep(.my-header) {
        width: 100%;
        background-color: rgb(248, 248, 248);
    }
    .el-input {
        margin-bottom: 20px;
        :deep(.el-input__wrapper) {
            background-color: rgb(245, 246, 247);
        }
    }
    .el-button {
        margin-top: 30px;
        width: 100%;
        border-radius: 300px;
    }
    .forget-password {
        margin-left: 300px;
    }
    .el-tabs__content {
        padding: 32px;
        color: #6b778c;
        font-size: 32px;
        font-weight: 600;
    }
}
</style>
