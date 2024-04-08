<script setup lang="ts">

</script>

<template>
  <div class="main">
    <div class="bg-top">
      <div class="bg-avator"></div>
      <div class="user-info">
        <div class="user-left">
          <span class="user-name">徐磊</span>
          <span class="user-no">纳税人识别号 1**********8</span>
        </div>
        <div class="user-right">
          <span>个人信息</span>
          <img src="@/assets/arrow-white.png" />
        </div>
      </div>
    </div>
    <div class="bg-bottom">
      <div class="info-group">
        <div class="info-box">
          <img src="@/assets/家庭成员.png">
          <span class="info-name">家庭成员</span>
          <button>添加</button>
        </div>
        <div class="info-box">
          <img src="@/assets/任职受雇.png">
          <span class="info-name">任职受雇</span>
          <button>1家</button>
        </div>
        <div class="info-box">
          <img src="@/assets/家庭成员.png">
          <span class="info-name">家庭成员</span>
          <button>添加</button>
        </div>
      </div>
      <div class="block">
        <div class="row">
          <div class="row-left">
            <img src="@/assets/图层 1.png" />
            <span>切换关爱版</span>
          </div>
          <img src="@/assets/arrow-black.png" />
        </div>
        <div class="row">
          <div class="row-left">
            <img src="@/assets/图层 2.png" />
            <span>我的办税权限</span>
          </div>
          <img src="@/assets/arrow-black.png" />
        </div>
        <div class="row">
          <div class="row-left">
            <img src="@/assets/3.png" />
            <span>安全中心</span>
          </div>
          <img src="@/assets/arrow-black.png" />
        </div>
        <div class="row">
          <div class="row-left">
            <img src="@/assets/4.png" />
            <span>安全中心</span>
          </div>
          <img src="@/assets/arrow-black.png" />
        </div>
        <div class="row">
          <div class="row-left">
            <img src="@/assets/5.png" />
            <span>帮助中心</span>
          </div>
          <img src="@/assets/arrow-black.png" />
        </div>
        <div class="row">
          <div class="row-left">
            <img src="@/assets/6.png" />
            <span>我要咨询</span>
          </div>
          <img src="@/assets/arrow-black.png" />
        </div>
        <div class="row">
          <div class="row-left">
            <img src="@/assets/7.png" />
            <span>关于&更新</span>
          </div>
          <img src="@/assets/arrow-black.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  .bg-top {
    height: 750px;
    width: 1080px;
    background-image: url('@/assets/bg3.png');
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    .bg-avator {
      width: 270px;
      height: 270px;
      margin-top: 150px;
      background-image: url('@/assets/bg2.png');
      background-size: cover;
      background-repeat: no-repeat;
      border: 27.5px solid #a3c2ff;
      border-radius: 50%;
    }
    .user-info {
      width: 960px;
      height: 270px;
      margin-top: 32px;
      background-image: url('@/assets/bg1.png');
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 50px 50px 0 0;
      box-sizing: border-box;
      padding-left: 75px;
      display: flex;
      justify-content: space-between;
      .user-left {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 70px 0 55px 0;
        font-weight: 600;
        .user-name {
          font-size: 35px;
          color: #291820;
        }
        .user-no {
          font-size: 27px;
          color: #b77e53;
        }
      }
      .user-right {
        margin-top: 60px;
        width: 215px;
        height: 60px;
        border-radius: 30px 0 0 30px;
        background-color: #e08d3d;
        color: #FFFFFF;
        font-size: 32px;
        display: flex;
        align-items: center;
        padding: 0 32px 0 22px;
        box-sizing: border-box;
        justify-content: space-between;
        line-height: 60px;
        img {
          height: 32px;
          transform: rotate(180deg);
        }
      }
    }
  }
  .bg-bottom {
    position: relative;
    bottom: 60px;
    border-radius: 260px 260px 0 0;
    padding: 30px 35px 0 35px;
    display: flex;
    flex-direction: column;
    .info-group {
      display: flex;
      justify-content: space-between;
      margin-top: 40px;
      .info-box {
        padding: 45px 0 35px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        width: 315px;
        height: 315px;
        border-radius: 20px;
        background-color: #FFFFFF;
        img {
          height: 90px;
        }
        .info-name {
          font-size: 32px;
          color: #292929;
        }
        button {
          width: 110px;
          height: 50px;
          text-align: center;
          font-size: 27px;
          border: 1px solid #5275b7;
          color: #5275b7;
          border-radius: 25px;
          background-color: #FFFFFF;
        }
      }
      >:nth-child(2) {
        button {
          background-color: #4886e9;
          color: #FFFFFF;
          border: none;
        }
      }
    }
    .block {
      padding: 65px 45px 60px 50px;
      background-color: #FFFFFF;
      border-radius: 20px;
      gap: 65px;
      display: flex;
      flex-direction: column;
      margin-bottom: 240px;
      margin-top: 40px;
      .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 700;
        .row-left {
          font-size: 35px;
          display: flex;
          align-items: center;
          gap: 40px;
          color: #111111;
          img {
            height: 55px;
          }
        }
        img {
          height: 40px;
        }
      }
    }
  }
}
</style>