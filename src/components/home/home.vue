<template>
  <el-main>
    <img class="headimg" src="/assets/img/building-headimg.jpg" alt="" />
    <!-- 中间对齐的页面 -->
    <div class="centerbody">
      <div class="warpper">
        <div class="header">
          <!-- 上面的黄色条纹 -->
          <div class="titleBox">
            <div class="header-line"></div>
            <div class="titleTextBox">ESG智能分析</div>
          </div>
          <span>
            ESG包含环境(ENVIRONMENTAL)、社会责任(SOCIAL)与公司治理(GOVERNANCE)三个维度。
          </span>
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
                <li>温室气体排放</li>
                <li>员工环保意识</li>
                <li>绿色采购政策</li>
                <li>.....</li>
              </ul>
            </div>
            <div class="box2">
              <ul>
                <li>精准扶贫</li>
                <li>产业扶贫</li>
                <li>乡村振兴</li>
                <li>公益慈善</li>
                <li>社区沟通</li>
                <li>员工福利与健康</li>
                <li>.....</li>
              </ul>
            </div>
            <div class="box3">
              <ul>
                <li>股权结构</li>
                <li>会计政策</li>
                <li>薪酬体系</li>
                <li>风险管理</li>
                <li>信息披露</li>
                <li>反不公平竞争</li>
                <li>.....</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="succ">
      <div class="succ-header">
        <div class="succ-header-line"></div>
        <div class="succ-header-text">成功案例</div>
        <div class="succ-header-caselist">
          <!-- <img src="src/assets/img/xiaomi.png" alt="" />
          <img src="src/assets/img/xiaomi.png" alt="" />
          <img src="src/assets/img/xiaomi.png" alt="" /> -->
        </div>
      </div>
      <div class="succ-case">
        <img src="/assets/img/successimg.jpg" alt="" />
        <div class="succ-case-text">
          <div class="succ-case-text-line"></div>
          <div class="succ-case-text-header">成功案例1</div>
        </div>
      </div>
      <div class="succ-case">
        <div class="succ-case-text">
          <div class="succ-case-text-line"></div>
          <div class="succ-case-text-header">成功案例2</div>
        </div>
        <img src="/assets/img/successimg.jpg" alt="" />
      </div>
      <div class="succ-case">
        <img src="/assets/img/successimg.jpg" alt="" />
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
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.headimg {
  width: 100%;
  height: auto;
}
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
        font-family: 'SimHei';
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
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
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
    // background-image: url("src/assets/img/greybackground.jpg");
    &::after {
      content: '';
      // background-image: url('../../public/assets/img/greybackground.jpg'); // 背景图片的路径
      opacity: 0.1;
      display: inline-block;
      width: 100%;
      height: 300px;
      position: relative;
      top: -80%;
      left: 0;
      bottom: 0;
      right: 0;
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
  width: 100%;
  display: flex;
  img {
    object-fit: cover;
    width: 50%;
    opacity: 0.8;
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
