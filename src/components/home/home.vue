<template>
  <el-carousel height="450px">
    <el-carousel-item>
      <img class="img" style="width: 100%; height: 100%" :src="head1" />
    </el-carousel-item>
    <el-carousel-item>
      <img class="img" style="width: 100%; height: 100%" :src="head2" />
    </el-carousel-item>
  </el-carousel>
  <el-main>
    <!-- 中间对齐的页面 -->
    <div class="centerbody">
      <div class="warpper">
        <div class="header">
          <!-- 上面的黄色条纹 -->
          <div class="titleBox">
            <div class="header-line"></div>
            <div class="titleTextBox">西北银行管理系统</div>
          </div>
        </div>
        <!-- esg报告下面图片后的内容 -->
        <div class="middle">
          <div class="headerimg">
            <img src="/assets/img/ESG-Criterias.png" alt="ESGimg" />
          </div>
          <div class="flexbox">
            <div class="box1">
              <ul>
                <li>环保政策</li>
                <li>绿色技术</li>
                <li>环保投入</li>
                <li>绿色资产</li>
                <li>.....</li>
              </ul>
            </div>
            <div class="box2">
              <ul>
                <li>精准扶贫</li>
                <li>产业扶贫</li>
                <li>乡村振兴</li>
                <li>优质基金</li>
                <li>.....</li>
              </ul>
            </div>
            <div class="box3">
              <ul>
                <li>转账查询</li>
                <li>汇款记录</li>
                <li>账户查询</li>
                <li>风险管理</li>
                <li>.....</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="succ">
      <div class="succ-header">
        <div>
          <div class="succ-header-line"></div>
          <div class="succ-header-text">银行业务</div>

          <!-- <img src="src/assets/img/xiaomi.png" alt="" />
          <img src="src/assets/img/xiaomi.png" alt="" />
          <img src="src/assets/img/xiaomi.png" alt="" /> -->
        </div>
      </div>
      <div class="succ-case">
        <img class="img1" src="public/assets/img/case1.jpg" alt="" />
        <div class="succ-case-text">
          <div class="succ-case-text-line"></div>
          <div class="container">
            <div class="pic">
              <img src="public/assets/img/1.png" />
              <i class="iconfont icon-licai">账户查询</i>
            </div>
            <div class="pic">
              <img src="public/assets/img/2.png" />
              <!-- <div class="title">译</div> -->
            </div>
            <div class="pic">
              <img src="public/assets/img/3.png" />
              <!-- <div class="title">中</div> -->
            </div>
          </div>

          <!-- <i class="iconfont icon-qianbi">资产查询</i>
          <i class="iconfont icon-yinhang"></i> -->
        </div>
      </div>
      <div class="succ-case">
        <div class="succ-case-text">
          <div class="succ-case-text-line"></div>
          <div class="succ-case-text-header">成功案例2</div>
        </div>
        <img class="img2" src="/assets/img/successimg.jpg" alt="" />
      </div>
      <div class="succ-case">
        <img class="img3" src="/assets/img/successimg.jpg" alt="" />
        <div class="succ-case-text">
          <div class="succ-case-text-line"></div>
          <div class="succ-case-text-header">成功案例3</div>
        </div>
      </div>
    </div>
  </el-main>
</template>

<script lang="ts" setup>
//设置导航激活
import { ref } from 'vue'
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'
import { ArrowDown } from '@element-plus/icons-vue'
import head1 from '/assets/img/head1.png'
import head2 from '/assets/img/head2.png'
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.centerbody {
  display: flex;
  width: 100%;
  justify-content: center;
  .warpper {
    margin-top: 30px;
    width: 80%;
    .header {
      margin-bottom: 50px;
      .titleTextBox {
        font-family: AlimamaFangYuanTiVF-Thin;
        font-size: 40px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        margin: 20px 0 20px 0;
      }
      &-line {
        margin: 0 auto;
        width: 100px;
        height: 10px;
        background-color: rgb(255, 165, 5);
      }
      span {
        display: flex;
        justify-content: center;
      }
    }
    .middle {
      width: 100%;
      .headerimg {
        display: flex;
        justify-content: center;
        img {
          width: 80%;
        }
      }
      .flexbox {
        font-family: 'DingTalkJinBuTi-Regular';
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        li {
          font-weight: 900;
          font-family: 'AlimamaFangYuanTiVF-Thin';
        }
      }
    }
  }
}

//ESG的各种属性
.box1,
.box2,
.box3 {
  margin-top: 30px;
  ul {
    font-size: 2empx;
    margin-left: 15%;
    // list-style-type: none;
  }
  li {
    font-weight: lighter; //为啥不起作用
    line-height: 2em;
    font-family: 'SimHei';
    text-align: left;
    // list-style-type: none;
    margin: 0 auto;
    width: 35%;
  }
  width: 100%;
}

.box2,
.box3 {
  border-left: 2px rgb(255, 165, 5) solid;
}

.succ {
  margin-top: 100px;
  &-header {
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &::after {
      content: '';
      background: url('public/assets/img/greybackground.jpg');
      opacity: 0.2;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      z-index: -1;
    }
    &-line {
      position: relative;
      top: 10px;
      margin: 0 auto;
      width: 100px;
      height: 10px;
      background-color: rgb(255, 165, 5);
    }
    &-text {
      font-family: 'SimHei';
      font-size: 40px;
      text-align: center;
      margin-top: 30px;
    }
    &-caselist {
      margin-top: 60px;
      display: flex;
      justify-content: center;
      img {
        border-radius: 50%;
        width: 100px;
        margin-left: 40px;
        margin-right: 40px;
      }
    }
  }
}

.succ-case {
  width: 1280px;
  display: flex;
  margin: auto;
  .img1 {
    opacity: 0.8;
    margin: 0 auto;
  }

  .img2,
  .img3 {
    object-fit: cover;
    width: 50%;
    opacity: 0.8;
  }
  .container {
    width: 920px;
    height: 100%;
    overflow: hidden;
    /* 一定要开启flex布局 */
    display: flex;
    justify-content: center;
    align-items: center;
    /* 缩小0.8，方便演示 */
    /* transform: scale(0.8); */
    .pic {
      position: relative;
      /* flex布局下当前元素自动缩放时占比为1，当前所有的pic元素占比均为一，等于所有元素大小保持一致的缩放 */
      height: 100%;
      flex-shrink: 1;
      flex-grow: 1;
      /* 一定要开启 */
      /* 要不然超出的图片会把pic图层撑开，失去最终效果 */
      overflow: hidden;
      transition: 1s;
    }
  }

  .pic:hover {
    flex-shrink: 0.5;
    flex-grow: 0.5;
  }

  &-text {
    width: 100%;
    display: flex;
    align-items: center;
    &-header {
      border-left: 10px solid rgb(255, 165, 5);
      font-family: 'SimHei';
      font-size: 50px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
