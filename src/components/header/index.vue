<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const dialogVisible = ref(false)
const active = ref(0)
const subActive = ref(0)
const menuClass = ref('')
const toggle = ref(false)
const clickToggle = () => {
  toggle.value = !toggle.value
}
const showSubMenu = ref(false)
const showPopup = ref(false)
watch(
  () => router.currentRoute.value,
  (newValue: any) => {
    // showPopup.value = false
    window.scrollTo(0, 0)
    active.value = +newValue.query.active?.split('-')?.[0]
    subActive.value = +newValue.query.active?.split('-')?.[1]
  },
  { immediate: true }
)
const changeHeader = () => {
  const element = document.getElementById('menu')
}
onMounted(() => {
  document.body.addEventListener('wheel', changeHeader)
})
onBeforeUnmount(() => {
  document.body.removeEventListener('wheel', changeHeader)
})
const language = ref('中文')
const changeLanguage = () => {
  language.value === '中文' ? language.value = '英文' : language.value = '中文'
}
const openSubMenu = () => {
  if (showPopup.value) {
    showSubMenu.value = !showSubMenu.value
    return
  }
  else {
    showSubMenu.value = true;
  }
  document.addEventListener("click", clickOutSide);
};
//判断点击元素外部时关闭弹框
const clickOutSide = (e: any) => {
  let submMnu = document.getElementById("subMenu");
  // 判断鼠标点击到触发按钮和弹出框外的区域
  if (submMnu &&  !submMnu.contains(e.target)) {
    showSubMenu.value = false;
    document.removeEventListener("click", clickOutSide)
  }
}
const changeShowPopup = () => {
  showPopup.value = !showPopup.value
}
</script>
<template>
  <header class="header">
    <article class="container">
      <RouterLink to="/" style="height: 3rem; position: relative;">
        <img @click="showPopup && changeShowPopup" style="height: 5rem; position: absolute; top: -1rem;" src="@/assets/images/green-removebg-preview.png" />
      </RouterLink>
      <nav class="main-navigation">
        <button class="menu-toggle" @click="changeShowPopup">A</button>
        <div class="menu-wrapper" id="menu">
          <ul class="menu" :class="menuClass">
            <li class="menu-item" @mouseenter="openSubMenu">
              <a :class="{
                active: active === 1
              }" href="#">解决⽅案中⼼</a>
              <ul class="sub-menu" v-show="showSubMenu" id="subMenu" @click="showSubMenu = false">
                <li class="menu-item">
                  <RouterLink to="enterpriseEnd?active=1-1"> ESG企业端解决⽅案</RouterLink>
                </li>
                <li class="menu-item">
                  <RouterLink to="investor?active=1-2">ESG投资⼈解决⽅案</RouterLink>
                </li>
                <li class="menu-item">
                  <RouterLink to="comprehensiveRating?active=1-3">评级综合解决⽅案</RouterLink>
                </li>
                <li class="menu-item">
                  <RouterLink to="carbonAndClimate?active=1-4">碳与⽓候解决⽅案</RouterLink>
                </li>
              </ul>
            </li>
            <li class="menu-item">
              <RouterLink to="/stage?active=2" :class="{
                  active: active === 2
                }">
                ESG数智化平台
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/aboutUs?active=3"  :class="{
                  active: active === 3
                }">
                关于我们
              </RouterLink>
            </li>
            <li class="menu-item">
              <a href="#" :title="`切换${language === '中文' ? '英文' : '中文'}`" @click="changeLanguage">
                {{language}}
              </a>
            </li>
            <li class="menu-item">
              <a href="#" @click="dialogVisible = true">⽤⼾登录</a>
            </li>
          </ul>
          <ul class="popup-menu menu" :class="menuClass" v-show="showPopup">
            <li class="menu-item" @mouseenter="openSubMenu">
              <a :class="{
                active: active === 1
              }">解决⽅案中⼼</a>
              <ul class="sub-menu" v-show="showSubMenu" id="subMenu" @click="showSubMenu = false">
                <li class="menu-item">
                  <RouterLink :class="{
                active: subActive === 1
              }" @click="changeShowPopup" to="enterpriseEnd?active=1-1"> ESG企业端解决⽅案</RouterLink>
                </li>
                <li class="menu-item">
                  <RouterLink :class="{
                active: subActive === 2
              }" @click="changeShowPopup" to="investor?active=1-2">ESG投资⼈解决⽅案</RouterLink>
                </li>
                <li class="menu-item">
                  <RouterLink :class="{
                active: subActive === 2
              }" @click="changeShowPopup" to="comprehensiveRating?active=1-3">评级综合解决⽅案</RouterLink>
                </li>
                <li class="menu-item">
                  <RouterLink :class="{
                active: subActive === 4
              }" @click="changeShowPopup" to="carbonAndClimate?active=1-4">碳与⽓候解决⽅案</RouterLink>
                </li>
              </ul>
            </li>
            <li class="menu-item">
              <RouterLink @click="changeShowPopup" to="/stage?active=2" :class="{
                  active: active === 2
                }">
                ESG数智化平台
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink @click="changeShowPopup" to="/aboutUs?active=3" :class="{
                  active: active === 3
                }">
                关于我们
              </RouterLink>
            </li>
            <li class="menu-item">
              <a href="#" :title="`切换${language === '中文' ? '英文' : '中文'}`" @click="changeLanguage">
                {{language}}
              </a>
            </li>
            <li class="menu-item">
              <a href="#" @click="changeShowPopup">⽤⼾登录</a>
            </li>
          </ul>
        </div>
      </nav>
    </article>
  </header>
  <div class="overlay" v-show="showPopup"></div>
</template>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  z-index: 1;
}
.header {
  z-index: 100;
  position: sticky;
  top: 0;
  .container {
    background: #A1C3C5;
    backdrop-filter: blur(1rem);
    -webkit-backdrop-filter: blur(1rem);
    max-width: calc(1380px - 12rem);
    display: flex;
    align-items: center;
    padding-left: 1.5rem;
    height: unset;
    border-radius: 8px;
    position: relative;
    width: calc(100% - 3rem);
    margin-left: auto;
    margin-right: auto;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.08em;
    white-space: nowrap;
    .main-navigation {
      width: 100%;
      .menu-toggle {
        display: none;
        position: absolute;
        top: 50%;
        right: 1.5rem;
        transform: translateY(-50%);
        font-size: 2rem;
        font-family: "Anicons Regular", sans-serif;
        font-variation-settings: "TIME" 1;
        transition: font-variation-settings 0.4s ease;
        cursor: pointer;
        border: none;
        border-radius: 0;
        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgNDYgNTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogIDxwYXRoIGQ9Ik00Mi4yODQ1IDExLjk3OTNMMjUuNDk5OSAyLjI4ODY4QzIzLjk1MjkgMS4zOTU1MSAyMi4wNDY5IDEuMzk1NTEgMjAuNDk5OSAyLjI4ODY3TDMuNzE1MzMgMTEuOTc5M0MyLjE2ODMzIDEyLjg3MjQgMS4yMTUzMyAxNC41MjMxIDEuMjE1MzMgMTYuMzA5NFYzNS42OTA2QzEuMjE1MzMgMzcuNDc2OSAyLjE2ODMzIDM5LjEyNzYgMy43MTUzMyA0MC4wMjA3TDIwLjQ5OTkgNDkuNzExM0MyMi4wNDY5IDUwLjYwNDUgMjMuOTUyOSA1MC42MDQ1IDI1LjQ5OTkgNDkuNzExM0w0Mi4yODQ1IDQwLjAyMDdDNDMuODMxNiAzOS4xMjc2IDQ0Ljc4NDUgMzcuNDc2OSA0NC43ODQ1IDM1LjY5MDZWMTYuMzA5NEM0NC43ODQ1IDE0LjUyMzEgNDMuODMxNiAxMi44NzI0IDQyLjI4NDUgMTEuOTc5M1oiIGZpbGw9IiMxMjExMTAiIHN0cm9rZT0iIzYzNDdGRiIgc3Ryb2tlLXdpZHRoPSIyIi8+DQo8L3N2Zz4=);
        background-position: center;
        background-color: transparent;
        background-repeat: no-repeat;
        color: #f2f4f3;
        line-height: unset;
        padding: 0;
        height: 4rem;
        width: 4rem;
      }
      @media screen and (max-width: 960px) {
        .menu-toggle{
          display: block;
        }
      }
      .menu-wrapper {
        transition: all 500ms;
        .menu {
          text-align: center;
          // background: #121110;
          border-radius: 8px;
          display: flex;
          justify-content: space-evenly;
          margin-block: 0;
          visibility: hidden;
          &.popup-menu {
            position: absolute;
            flex-direction: column;
            width: 88%;
            visibility: visible;
            background: #A1C3C5;
            top: 6rem;
            .menu-item {
              .sub-menu {
                position: inherit;
                top: 0;
              }
            }
          }
          &.sticky .menu-item {
            a {
              padding: 1rem 0.75rem;
            }
          }
          .menu-item {
            display: flex;
            align-items: center;
            text-transform: uppercase;
            position: relative;
            flex-direction: column;
            -webkit-user-select: none;
            user-select: none;
            a {
              padding: 1.5rem 0.75rem;
              width: 100%;
              // height: 100%;
              outline: none !important;
              color: #f2f4f3;
              font-size: 1.2rem;
              font-weight: 500;
              letter-spacing: 0.08em;
              transition: 500ms padding cubic-bezier(0.075, 0.82, 0.165, 1);
              position: relative;
              display: flex;
              justify-content: center;
              flex-direction: column;
              text-decoration: none;
              // &:focus::after {
              //   width: 100%;
              //   opacity: .5;
              // }
              // &:hover+.sub-menu {
              //   display: flex;
              // }
              &:hover::after {
                width: 100%;
                opacity: 1;
              }
              &.active::after {
                width: 100%;
                opacity: 1;
              }
              &::after {
                content: "";
                position: absolute;
                left: 50%;
                bottom: 0;
                transform: translateX(-50%);
                background: linear-gradient(90deg, rgba(99, 71, 255, 0) 0%, #6347ff 52.99%, rgba(99, 71, 255, 0) 100%);
                height: 4px;
                width: 0;
                opacity: 0;
                transition: 250ms all ease-out;
              }
            }
            .sub-menu {
              position: absolute;
              top: 5.5rem;
              border-radius: 8px;
              display: flex;
              // width: 712px;
              // max-width: 712px;
              left: 0;
              padding: 0;
              margin: 0;
              background: #A1C3C5;
              flex-direction: column;
              .menu-item {
                a {
                  width: 100%;
                  // height: 100%;
                  outline: none !important;
                  color: #f2f4f3;
                  font-size: 1.2rem;
                  font-weight: 500;
                  letter-spacing: 0.08em;
                  transition: 500ms padding cubic-bezier(0.075, 0.82, 0.165, 1);
                  position: relative;
                  display: flex;
                  justify-content: center;
                  flex-direction: column;
                  text-decoration: none;
                  padding: 1rem 0.75rem;
                  // &:focus::after {
                  //   width: 100%;
                  //   opacity: .5;
                  // }
                  &:hover::after {
                    width: 100%;
                    opacity: .5;
                  }
                  &.active::after {
                    width: 100%;
                    opacity: 1;
                  }
                  &::after {
                    content: "";
                    position: absolute;
                    left: 50%;
                    bottom: 0;
                    transform: translateX(-50%);
                    background: linear-gradient(90deg, rgba(99, 71, 255, 0) 0%, #6347ff 52.99%, rgba(99, 71, 255, 0) 100%);
                    height: 4px;
                    width: 0;
                    opacity: 0;
                    transition: 250ms all ease-out;
                  }
                }
              }
            }
          }
        }
      }
      @media screen and (min-width: 960px) {
        .menu-wrapper {
          .menu {
            visibility: visible;
          }
        }
      }
    }
  }
}
</style>