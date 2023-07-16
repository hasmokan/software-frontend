<template>
  <div class="root">
    <div class="header">
      <img alt="" class="headImg" src="src/assets/img/card1.jpg">
    </div>
    <div class="mainBody" >
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>银行业务</el-breadcrumb-item>
      </el-breadcrumb>
    </div>


  </div>

</template>

<script>

</script>

<style lang="scss" scoped>

.root {
  .header {
    .headImg {
      width: 100%;
      height: auto;
    }
  }
  .mainBody{
    width: 1280px;
    margin: 0 auto;
    .el-breadcrumb{
      margin: 20px;
      margin-left: 100px;
    }
  }


}

</style>