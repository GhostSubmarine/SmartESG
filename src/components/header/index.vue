<script setup lang="ts">
import 'element-plus/es/components/dropdown/style/css'
import 'element-plus/es/components/dropdown-item/style/css'
import 'element-plus/es/components/dropdown-menu/style/css'
import { ElDropdownMenu, ElDropdown, ElDropdownItem } from 'element-plus';

</script>
<template>
  <header class="header">
    <article class="container">
      <!-- <div>SmartESG | 司⻢致信息科技</div> -->
      <img style="height: 5rem;" src="@/assets/images/green-removebg-preview.png" />
      <nav class="main-navigation">
        <button class="menu-toggle">A</button>
        <div class="menu-wrapper">
          <ul class="menu">
            <li class="menu-item">
              <el-dropdown>
                <a href="#">解决⽅案中⼼</a>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>ESG企业端解决⽅案</el-dropdown-item>
                    <el-dropdown-item>ESG投资⼈解决⽅案</el-dropdown-item>
                    <el-dropdown-item>评级综合解决⽅案</el-dropdown-item>
                    <el-dropdown-item>碳与⽓候解决⽅案</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </li>
            <li class="menu-item">
              <a href="#">ESG数智化平台</a>
            </li>
            <li class="menu-item">
              <a href="#">关于我们</a>
            </li>
            <li class="menu-item">
              <a href="#">中⽂/英⽂转换</a>
            </li>
            <li class="menu-item">
              <a href="#">⽤⼾登录</a>
            </li>
          </ul>
        </div>
      </nav>
    </article>
  </header>
  
</template>

<style lang="scss" scoped>
.header {
  z-index: 100;
  position: sticky;
  top: 0;
  color: #000000;
  .container {
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(1rem);
    -webkit-backdrop-filter: blur(1rem);
    max-width: calc(1280px - 12rem);
    display: flex;
    align-items: center;
    padding-left: 1.5rem;
    height: unset;
    border-radius: 8px;
    position: relative;
    width: calc(100% - 3rem);
    margin-left: auto;
    margin-right: auto;
    color: #f2f4f3;
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
        opacity: 0;
        .menu {
          text-align: center;
          // background: #121110;
          border-radius: 8px;
          display: flex;
          justify-content: space-evenly;
          margin-block: 0;
          .menu-item {
            display: flex;
            align-items: center;
            text-transform: uppercase;
            position: unset;
            flex-direction: column;
            -webkit-user-select: none;
            user-select: none;
            a {
              padding: 2rem 0.75rem;
              width: 100%;
              // height: 100%;
              outline: none !important;
              color: #f2f4f3;
              font-size: 12px;
              font-weight: 500;
              letter-spacing: 0.08em;
              transition: 500ms padding cubic-bezier(0.075, 0.82, 0.165, 1);
              position: relative;
              display: flex;
              justify-content: center;
              flex-direction: column;
              text-decoration: none;
              &:focus::after {
                width: 100%;
                opacity: .5;
              }
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
          }
        }
      }
      @media screen and (min-width: 960px) {
        .menu-wrapper {
          opacity: 1;
        }
      }
    }
  }
}
</style>