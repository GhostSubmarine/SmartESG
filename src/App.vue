<template>
  <div class="header">
    <div class="head">
      <div class="logo">
        <a href="/"><img src="@/assets/images/green-removebg-preview.jpg"></a>
      </div>
      <div class="nav">
        <div class="nav-itm">
          <a href="/">主页</a>
        </div>
        <div class="nav-itm">
          <h2><a href="#">解决方案中心</a></h2>
          <ul>
            <li>
              <a href="/enterpriseEnd">ESG企业端解决⽅案</a>
            </li>
            <li>
              <a href="/investor">ESG投资⼈解决⽅案</a>
            </li>
            <li>
              <a href="/comprehensiveRating">评级综合解决⽅案</a>
            </li>
            <li>
              <a href="/carbonAndClimate">碳与⽓候解决⽅案</a>
            </li>
          </ul>
        </div>
        <div class="nav-itm">
          <h2><a href="/aboutUs">关于我们</a></h2>
        </div>
        <div class="nav-itm">
          <a href="#">用户登录</a>
        </div>
      </div>
    </div>
    <div class="top-m-menu-btn" id="js_top_m_btn">
      <em></em>
    </div>
  </div>
  <RouterView />
  <div class="footer">
    <div class="container foot">
      <div class="foot-logo">
      </div>
      <div class="foot-nav">
        <div class="foot-nav-itm">
          <a href="/aboutUs">关于我们</a>
        </div>
        <div class="foot-nav-itm">
          <a>加入我们</a>
        </div>
        <div class="foot-nav-itm">
          <a>ghostsubmarine.com</a>
        </div>
      </div>
      <div class="foot-copy">© Copyright 2024</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  width: 100%;
  height: 10rem;
  background: rgba(255, 255, 255, .95);
  box-shadow: 0 .2rem .5rem rgb(0 0 0 / 15%);

  .head {
    position: relative;
    padding-left: 45rem;
    height: 10rem;

    .logo {
      left: 5rem;

      img {
        left: 0;
        margin-top: -8rem;
        height: 16rem;
      }
    }

    .logo,
    .top-search {
      position: absolute;
      top: 0;
      height: 100%;

      img {
        position: absolute;
        top: 50%;
      }
    }

    .nav {
      display: flex;
      height: 100%;
    }

    .nav-itm {
      position: relative;
      display: inline-block;
      padding: 0 7rem;
      // flex: 1;
    }
  }
}

.footer {
  background-image: url(./assets/images/20240411141725.jpg);
}
</style>
