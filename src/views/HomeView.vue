<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()
const goDetail = () => {
  router.push({
    path: '/detail'
  })
}
</script>
<template>
  <div class="main">
    <div class="input-row">
      <div class="input-block">
        <input class="input" placeholder="请输入想搜索的功能/服务" />
        <img class="search-img" src="@/assets/搜索.png" />
      </div>
      <img class="zoom-img" src="@/assets/扩大.png" />
    </div>
    <div class="alarm-row">
      <img src="@/assets/警报.png"/>
      <div class="scroll-row">
        <div>2023年度个人所得税综合所得汇算清缴事项的公告</div>
      </div>
    </div>
    <div class="block1">
      <div class="navigate">
        <span>进入专题页</span>
        <img src="@/assets/arrow-white.png" />
      </div>
      <h6 class="block1-title">2023综合所得年度汇算</h6>
      <span class="block1-info">已于3月1日开始，您尚未申报</span>
      <button class="btn">开始申报</button>
    </div>
    <h6 class="title">重点服务推荐</h6>
    <div class="block2">
      <div class="navigate">
        <span>相关政策</span>
        <img src="@/assets/arrow-white.png" />
      </div>
      <div class="block2-title">
        <span>专项附加扣除</span>
      </div>
      <span class="block-info">若符合条件，您可点击下方填报</span>
      <button class="btn">
        <div>
          <span>超1亿人参与</span>
        </div>
        <span>我要参与</span>
      </button>
    </div>
    <div class="tab">
      <div class="tab-item active">
        警示案例
      </div>
      <div class="tab-item">
        热点问题
      </div>
      <div class="tab-item">
        通知公告
      </div>
      <div class="tab-item">
        政策解读
      </div>
    </div>
    <div class="list-group">
      <div class="list-item bg1">
      </div>
      <div class="list-item bg2">
      </div>
      <div class="list-item bg3">
      </div>
      <div class="list-item bg1">
      </div>
    </div>
    <img class="active-img" src="@/assets/3岁以下儿童.png" />
    <div class="detail-list">
      <div class="list-item bg1">

      </div>
      <div class="list-item bg2">

      </div>
      <div class="list-item bg3">

      </div>
      <div class="list-item bg4">

      </div>
    </div>
    <div class="more" @click="goDetail">
      <span>查看更多</span>
      <img src="@/assets/arrow-grey.png" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  overflow: auto;
  flex-direction: column;
  padding-bottom: 190px;
  background-image: linear-gradient(to bottom, #91BFFD, #F6F7FB 35%);
  .tab {
    width: 1043px;
    min-height: 120px;
    display: flex;
    align-items: center;
    gap: 32px;
    margin-left: 37px;
    .tab-item {
      color: #565b61;
      font-size: 46px;
      &.active {
        color: #0e7bfe;
      }
    }
  }
  .input-row {
    margin: 14px 40px 0 34px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .input-block {
      position: relative;
      width: 920px;
      min-height: 90px;
      .input {
        outline: none;
        border: none;
        width: 920px;
        height: 90px;
        border-radius: 30px;
        background-color: #9CBAF6;
        position: absolute;
        padding-left: 80px;
        color: #FFFFFF;
      }
      .search-img {
        height: 40px;
        position: absolute;
        left: 32px;
        top: 30px;
      }
    }
    .zoom-img {
      width: 60px;
    }
  }
  .alarm-row {
    background-color: #FAF2E5;
    border-radius: 30px;
    width: 1006px;
    min-height: 120px;
    display: flex;
    align-items: center;
    padding-left: 32px;
    margin: 60px auto 0 auto;
    font-size: 36px;
    gap: 32px;
    color: #9C7F3D;
    img {
      height: 52px;
    }
    .scroll-row {
      overflow: hidden;
      flex: 1;
      >div {
        width: 100%;
        white-space: nowrap;
        animation: scroll 5s linear infinite;
      }
      @keyframes scroll {
        0% {
          transform: translateX(100%);
        }
        100% {
          transform: translateX(-100%);
        }
      }
    }
  }
  .block1 {
    border-radius: 30px;
    width: 1006px;
    min-height: 560px;
    background-color: #F4F9FF;
    margin: 30px auto 0 auto;
    padding: 120px 0 120px 40px;
    position: relative;
    border-bottom: 1px solid #F3FAFF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 1px 1px 0 0  #f3faff;
    .navigate {
      position: absolute;
      top: -1px;
      right: 0;
      font-size: 32px;
      width: 300px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      background-color: #9AC1FC;
      border-radius: 0 0 0 30px;
      img {
        height: 32px;
        transform: rotate(180deg);
      }
    }
    .block1-title {
      color: #16161E;
      font-size: 38px;
    }
    .block1-info {
      font-size: 30px;
      color: #2D2E32;
    }
    .btn {
      width: 430px;
      height: 126px;
      border-radius: 63px;
      background-color: #418FFB;
      border: none;
      line-height: 126px;
      text-align: center;
      color: #FFFFFF;
    }
  }
  .title {
    margin-top: 110px;
    font-size: 40px;
    margin-left: 34px;
    color: #212322;
  }
  .block2 {
    border-radius: 30px;
    width: 1006px;
    min-height: 450px;
    color: #F9F8FD;
    display: flex;
    flex-direction: column;
    margin-left: 34px;
    margin-top: 40px;
    position: relative;
    background-image: linear-gradient(to right, #60B2FE, #4091FC);
    .navigate {
      position: absolute;
      top: -1px;
      right: 0;
      font-size: 32px;
      width: 300px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      background-color: #0386FA;
      border-radius: 0 0 0 30px;
      img {
        height: 32px;
        transform: rotate(180deg);
      }
    }
    .block2-title {
      margin: 22px 0 0 32px;
      display: flex;
      align-items: center;
      font-size: 40px;
      gap: 40p;
      img {
        height: 46px;
      }
    }
    .block-info {
      margin: 90px auto 50px auto;
      font-size: 40px;
    }
    .btn {
      width: 800px;
      height: 140px;
      border-radius: 50px;
      background-color: #F4F7FC;
      border: none;
      padding-left: 60px;
      display: flex;
      align-items: center;
      gap: 130px;
      justify-content: center;
      margin: 0 auto;
      >div {
        font-size: 32px;
        color: #111419;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      >span {
        font-size: 34px;
        color: #292C35;
      }
    }
  }
  .active-img {
    margin-top: 72px;
    width: 1006px;
    margin-left: 37px;
  }
  .more {
    display: flex;
    align-items: center;
    margin: 40px auto 190px auto;
    gap: 16px;
    font-size: 36px;
    color: #98999D;
    img {
      height: 26px;
    }
  }
  .list-group {
    display: flex;
    overflow: auto;
    margin-left: 37px;
    width: 1043px;
    gap: 25px;
    min-height: 350px;
    .list-item {
      min-width: 280px;
      min-height: 350px;
      background-size: cover;
      background-repeat: no-repeat;
      &.bg1 {
        background-image: url('@/assets/list1.png');
      }
      &.bg2 {
        background-image: url('@/assets/list2.png');
      }
      &.bg3 {
        background-image: url('@/assets/list3.png');
      }
    }
  }
  .detail-list {
    display: flex;
    flex-direction: column;
    gap: 36px;
    .list-item {
      min-height: 310px;
      width: 1006px;
      margin-left: 37px;
      background-size: cover;
      background-repeat: no-repeat;
      &.bg1 {
        background-image: url('@/assets/detail1.png');
      }
      &.bg2 {
        background-image: url('@/assets/detail2.png');
      }
      &.bg3 {
        background-image: url('@/assets/detail3.png');
      }
      &.bg4 {
        background-image: url('@/assets/detail4.png');
      }
    }
  }
}
</style>
