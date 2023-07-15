<template>
    <span
        v-show="loginState"
        style="
            width: 200px;
            margin-left: 50px;
            white-space: nowrap;
            display: flex;
            font-size: smaller;
            color: white;
            cursor: pointer;
            position: relative;
        "
    >
        <div style="color: gold; position: relative" @mouseover="handleOver">
            <div style="display: flex">
                <div style="color: white">您好，尊敬的</div>
                &ensp;{{ userName }}
            </div>
            <el-icon style="font-size: larger; position: absolute; right: 50%"><ArrowUp /></el-icon>
        </div>

        <div class="personCard" v-show="openCard">
            <div class="card">
                <div class="imgBx">
                    <img src="@/assets/img/logo.png" />
                </div>
                <div class="content">
                    <div class="details">
                        <h2>{{ userName }}<br /><span>尊贵的五星vip客户您好</span></h2>
                        <div class="data">
                            <h3>100h<br /><span>使用时长</span></h3>
                            <h3>{{ cardNumber }}<br /><span>银行卡数量</span></h3>
                            <h3>285<br /><span>Following</span></h3>
                        </div>
                        <div class="actionBtn">
                            <button>注销</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </span>
</template>

<script setup lang="ts">
import { ref } from 'vue'
defineProps({
    userName: String,
    loginState: Number,
    cardNumber: Number
})
const openCard = ref(false)

const handleOver = () => {
    openCard.value = true
}

const handleLeft = () => {
    openCard.value = false
}
</script>

<style lang="scss" scoped>
@import './utilCss/personCard.scss';
</style>
