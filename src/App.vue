<script setup lang="ts">
import { ElDropdownMenu, ElDropdown } from 'element-plus';
import Header from '@/components/header/index.vue'

</script>

<template>
  <Header />
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
