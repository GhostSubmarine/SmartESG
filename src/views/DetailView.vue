<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const infoData = ref(new Array(13).fill(0))
const router = useRouter()
const goBack = () => {
  router.go(-1)
}
</script>

<template>
  <div class="main">
    <img class="arrow-img" src="@/assets/arrow-white.png" @click="goBack" />
    <img class="top-img" src="@/assets/详情背景.png" />
    <div class="info-block">
      <div class="block-title">
        <span class="title-left">
          虚假申报案例
        </span>
        <span class="title-right">
          风险提示案例
        </span>
      </div>
      <div class="info-item" v-for="(item, index) in infoData" :key="`${index}`">
        <div class="index-block">案例{{ ('' + (index + 1)).padStart(2, '0') }}</div>
        <h6 class="item-title">
          陌生链接莫点击 信息被骗悔莫及
        </h6>
        <div class="text-area">
          ① -webkit-line-clamp用来限制在一个块元素显示的文本的行数。为了实现该效果，它需要组合其他的WebKit属性。常见结合属性：
          ② display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。
          ③ -webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式
        </div>
        <div class="open">全文</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main {
  height: 100vh;
  width: 1080px;
  overflow: auto;
  background-color: #639EFA;
  position: relative;
  .top-img {
    width: 1080px;
  }
  .arrow-img {
    height: 48px;
    position: absolute;
    left: 54px;
    top: 40px;
  }
  .info-block {
    width: 1010px;
    margin: 0 35px 100px 35px;
    background-color: #8EC5FE;
    padding: 100px 22px 70px 22px;
    position: relative;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    .block-title {
      position: absolute;
      height: 94px;
      width: 980px;
      background-color: #438BFA;
      border: 15px solid #80BCFB;
      top: -40px;
      border-radius: 47px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 70px;
      .title-left {
        font-size: 38px;
        font-weight: 900;
        color: #FFFFFF;
      }
      .title-right {
        font-size: 44px;
        font-weight: 900;
        color: #E1C890;
      }
    }
    .info-item {
      background-color: #EEF7FE;
      border-radius: 40px;
      padding: 28px 36px 60px 32px;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      gap: 36px;
      position: relative;
      .index-block {
        position: absolute;
        left: -50px;
        height: 60px;
        width: 140px;
        top: 32px;
        border-radius: 10px;
        background-color: #2496F6;
        color: #F1F6FC;
        line-height: 60px;
        text-align: center;
        font-size: 32px;
      }
      .item-title {
        margin-left: 68px;
        font-size: 42px;
        color: #343537;
        font-weight: 800;
      }
      .text-area {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        font-size: 40px;
        color: #626A6D;
      }
      .open {
        font-size: 40px;
        position: absolute;
        right: 36px;
        bottom: 60px;
        color: #3480B4;
      }
    }
  }
}
</style>
