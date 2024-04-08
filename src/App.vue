<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterView, useRouter } from 'vue-router'
const active = ref(4)
const router = useRouter()
const show  = ref(true)
// 监听当前路由
watch(
  () => router.currentRoute.value,
  (newValue: any) => {
    if (newValue.path.includes('home')) {
      active.value = 0
    }
    else {
      active.value = 4
    }
    if (newValue.path.includes('home') || newValue.path.includes('mine')) {
      show.value = true
    }
    else {
      show.value = false
    }
  },
  { immediate: true }
)
</script>

<template>
  <div class="main">
    <RouterView />
    <div class="tabbar-out" v-show="show">
      <div class="tabbar-inner">
        <RouterLink to="home">
          <div class="item">
            <div class="bg" :class="{
              'bg1-select': active === 0,
              'bg1-unselect': active !== 0
            }" />
            <span class="label">首页</span>
          </div>
        </RouterLink>
        <div class="item">
          <div class="bg" :class="{
            'bg2-select': active === 1,
            'bg2-unselect': active !== 1
          }" />
          <span class="label">代办</span>
        </div>
        <div class="item">
          <div class="bg" :class="{
            'bg3-select': active === 2,
            'bg3-unselect': active !== 2
          }" />
          <span class="label">办&查</span>
        </div>
        <div class="item">
          <div class="bg" :class="{
            'bg4-select': active === 3,
            'bg4-unselect': active !== 3
          }" />
          <span class="label">消息</span>
        </div>
        <RouterLink to="mine">
          <div class="item">
            <div class="bg" :class="{
              'bg5-select': active === 4,
              'bg5-unselect': active !== 4
            }" />
            <span class="label">我的</span>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
  &:hover {
    background: none;
  }
}
.main {
  width: 1080px;
  height: 100vh;
  background-color: #f6f7fb;
  overflow: auto;
  .tabbar-out {
    position: fixed;
    bottom: 32px;
    left: 34px;
    width: 1016px;
    height: 140px;
    // background-color: #f6f6f6;
    border-radius: 8px;
    .tabbar-inner {
      box-shadow: 1px 1px 1px 1px #f2f2f2;
      width: 1000px;
      height: 180px;
      margin: 0 8px;
      position: relative;
      bottom: 60px;
      background-color: #FFFFFF;
      border-radius: 90px;
      padding: 0 118px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      .item {
        font-size: 24px;
        color: #3a3b3d;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        .bg {
          height: 57px;
          width: 57px;
          background-size: cover;
          background-repeat: no-repeat;
          transition: all 0.3s;
          &.bg1-select {
            background-image: url('@/assets/tab1选中.png')
          }
          &.bg1-unselect {
            background-image: url('@/assets/tab1未选中.png')
          }
          &.bg2-unselect {
            background-image: url('@/assets/tab2未选中.png')
          }
          &.bg3-unselect {
            background-image: url('@/assets/tab3未选中.png')
          }
          &.bg4-unselect {
            background-image: url('@/assets/tab4未选中.png')
          }
          &.bg5-select {
            background-image: url('@/assets/tab5选中.png')
          }
          &.bg5-unselect {
            background-image: url('@/assets/tab5未选中.png')
          }
        }
      }
    }
  }
}
</style>
