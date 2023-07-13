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
              src="/assets/img/logo.png"
              style="width: 50px; height: 50px; margin-right: 200px"
            />
            <el-menu-item index="1">
              <router-link to="/">首页</router-link>
            </el-menu-item>
            <el-menu-item index="2">
              <router-link to="/esg">ESG报告分析</router-link>
            </el-menu-item>
            <el-menu-item index="3">
              <router-link to="/domestic">ESG国内标准</router-link>
            </el-menu-item>
            <el-menu-item index="4">
              <router-link to="/international">ESG国际标准</router-link>
            </el-menu-item>
            <!-- 下拉 -->
            <div class="flex flex-wrap items-center">
              <el-dropdown>
                <el-button type="primary" color="rgb(255,165,5)">
                  系统登陆<el-icon class="el-icon--right"><arrow-down /></el-icon>
                </el-button>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>企业登陆</el-dropdown-item>
                    <el-dropdown-item>机构登陆</el-dropdown-item>
                    <el-dropdown-item>政府登陆</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
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
              <el-icon :size="30" color="rgb(255, 165, 5)"><LocationFilled /></el-icon>
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
  </div>
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
<style lang="scss"></style>
