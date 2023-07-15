<!--
 * @Author: 雄恺 陈 1021056159@qq.com
 * @Date: 2023-07-15 20:26:29
 * @LastEditors: 雄恺 陈 1021056159@qq.com
 * @LastEditTime: 2023-07-15 20:53:01
 * @FilePath: \frontend\src\components\bankingBusiness\bankingBusiness.vue
 * @Description: 银行业务 -->
<template>
    <div class="bankingBusiness">
        <el-tabs v-model="state.activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="转账" name="transaction">
                <el-skeleton />
                <br />
                <el-skeleton style="--el-skeleton-circle-size: 100px">
                    <template #template>
                        <el-skeleton-item variant="circle" />
                    </template>
                </el-skeleton>
            </el-tab-pane>
            <el-tab-pane label="查询" name="select">
                2
                <el-skeleton />
                <br />
                <el-skeleton style="--el-skeleton-circle-size: 100px">
                    <template #template>
                        <el-skeleton-item variant="circle" />
                    </template>
                </el-skeleton>
            </el-tab-pane>
            <el-tab-pane label="存款" name="doposit">
                3
                <el-skeleton />
                <br />
                <el-skeleton style="--el-skeleton-circle-size: 100px">
                    <template #template>
                        <el-skeleton-item variant="circle" />
                    </template>
                </el-skeleton>
            </el-tab-pane>
            <el-tab-pane label="取款" name="withdrawl">
                4
                <el-skeleton />
                <br />
                <el-skeleton style="--el-skeleton-circle-size: 100px">
                    <template #template>
                        <el-skeleton-item variant="circle" />
                    </template>
                </el-skeleton>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import { useRouterStore } from '@/stores/routerState'
const state = reactive({
    activeName: useRouterStore().getPath
})

const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}
</script>

<style lang="scss" scoped>
.bankingBusiness {
    margin: 0 auto;
    width: 80%;
}
</style>
