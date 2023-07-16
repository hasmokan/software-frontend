<template xmlns="http://www.w3.org/1999/html">
  <div class="mySelection">
    <div>
      <el-radio-group v-model="size" label="size control">
        <el-radio-button label="balance">卡余额查询</el-radio-button>
        <el-radio-button label="transaction">卡流水查询</el-radio-button>
      </el-radio-group>
    </div>
    <br/>
    <el-form
        ref="form"
        :label-position="labelPosition"
        :model="sizeForm"
        :size="size"
        label-width="auto"
    >

      <div v-if="size === 'balance'">
        <el-form-item label="Card number">
          <el-input
              v-model="sizeForm.number"
              class="myInput" maxlength="30"
              size="large"
              type="text"
          />
          <el-button type="primary" @click="handleSearch">余额查询</el-button>
          <!--      el-input不支持隐藏控制器,请加上输入验证-->
        </el-form-item>

      </div>
      <div v-else-if="size === 'transaction'">
        <el-form-item label="Card number">
          <el-input
              v-model="sizeForm.number"
              class="myInput" maxlength="30"
              size="large"
              type="text"
          />
          <el-button type="primary" @click="handleSearch">流水查询</el-button>
          <!--      el-input不支持隐藏控制器,请加上输入验证-->
        </el-form-item>
      </div>

    </el-form>
  </div>
</template>

<script lang="ts" setup>
import {reactive, ref} from "vue";

const size = ref('balance')
const labelPosition = ref('top')

const sizeForm = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delvery: false,
  type: [],
  resource: '',
  desc: '',
  number: ''
})

function onSubmit() {
  console.log("submit!")
}
</script>

<style scoped>
.mySelection{
  height: 1000px;
}
.el-radio-group {
  margin-right: 12px;
}

.myInput {
  width: 300px;
}
</style>