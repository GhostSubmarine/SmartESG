<script setup lang="ts">
import { ElDropdownMenu, ElDropdown } from 'element-plus';

</script>

<template>
  <header class="header">
    <article class="container">
      <div>SmartESG | 司⻢致信息科技</div>
      <nav class="main-navigation">
        <button class="menu-toggle">A</button>
        <div class="menu-wrapper">
          <ul class="menu">
            <li class="menu-item">
              <el-dropdown>
                <span class="el-dropdown-link">
                  <a href="#">解决⽅案中⼼</a>
                </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>Action 1</el-dropdown-item>
                    <el-dropdown-item>Action 2</el-dropdown-item>
                    <el-dropdown-item>Action 3</el-dropdown-item>
                    <el-dropdown-item>Action 4</el-dropdown-item>
                    <el-dropdown-item>Action 5</el-dropdown-item>
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
  <RouterView />
  <footer class="footer">
    <article class="continer">
      <div class="footer-menu">
        <nav>
          <h4>联系方式</h4>
          <ul class="menu-list">
            <li>微信公众号：ghostsubmarine</li>
            <li>业务联系邮箱：842533106@qq.com</li>
            <li>业务联系电话：011-7224456</li>
          </ul>
        </nav>
      </div>
    </article>
  </footer>
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
              outline: none;
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
    }
  }
}
.footer {
	padding-top: 4rem;
  .continer {
    max-width: calc(1280px - 12rem);
    width: calc(100% - 3rem);
    margin-left: auto;
    margin-right: auto;
    .footer-menu {
      display: flex;
      justify-content: space-between;
      padding: 3rem 0 0;
      position: relative;
      @media screen and (min-width: 640px) {
        &::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: 8rem;
          background: linear-gradient(90deg, rgba(99, 71, 255, 0) 0%, #6347ff 52.99%, rgba(99, 71, 255, 0) 100%);
          height: 1px;
        }
      }
      nav {
        padding-bottom: calc(1rem + 1px);
        margin-bottom: 1rem;
        position: relative;
        h4 {
          padding-bottom: 0.5rem;
		      font-size: 1.25rem;
          &::after {
            content: unset;
          }
        }
        .menu-list {
          list-style: none;
          margin: 0;
          padding-left: 0;
          opacity: 1;
          max-height: unset;
          overflow: unset;
          transition: all 250ms;
          display: flex;
          @media screen and (min-width: 768px) {
            li {
              &:not(:last-child) {
                padding-right: 2.25rem;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (min-width: 640px) {

	.footer {
		padding-top: 6rem;
		padding-bottom: 6rem;
	}
}

@media screen and (min-width: 960px) {

	.footer {
		padding-top: 7rem;
		padding-bottom: 7rem;
	}
}

@media screen and (min-width: 1280px) {

	.footer {
		padding-top: 8rem;
		padding-bottom: 8rem;
	}
}
</style>
