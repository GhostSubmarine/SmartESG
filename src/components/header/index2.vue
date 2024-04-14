<template>
  <header id="masthead" class="site-header">
    <div class="sticky-element-placeholder" style="width: 0px; height: 0px; margin: 0px; padding: 0px;"></div>
    <section id="site-navigation-wrapper" class="sticky-element-original sticky-element-active element-is-not-sticky"
      style="">
      <article class="container">
        <div class="brand-logo">
          <a href="https://corp.roblox.com/">
            <span>ROBLOX</span>
          </a>
        </div>

        <nav id="site-navigation" class="main-navigation">
          <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
            <span>A</span>
          </button>
          <div class="menu-main-menu-container">
            <ul id="primary-menu" class="menu nav-menu">
              <li id="menu-item-17732" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-17732">
                <a href="https://corp.roblox.com/people/"><span>People</span></a></li>
              <li id="menu-item-17735" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-17735">
                <a href="https://corp.roblox.com/news/"><span>News</span></a></li>
              <li id="menu-item-17734" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-17734">
                <a href="https://corp.roblox.com/tech-talks/"><span>Tech Talks</span></a></li>
              <li id="menu-item-20180" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-20180">
                <a target="_blank" rel="noopener" href="https://brands.roblox.com"><span>Brands</span></a></li>
              <li id="menu-item-17731" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-17731">
                <a href="https://corp.roblox.com/safety-civility-resources/"><span>Safety + Civility</span></a></li>
              <li id="menu-item-17733" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-17733">
                <a href="https://corp.roblox.com/research/"><span>Research</span></a></li>
              <li id="menu-item-18230" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-18230">
                <a target="_blank" rel="noopener" href="https://education.roblox.com"><span>Education</span></a></li>
              <li id="menu-item-17736" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-17736">
                <a target="_blank" rel="noopener" href="https://careers.roblox.com"><span>Careers</span></a></li>
              <li
                class="language-switcher menu-item menu-item-type-wpml_ls_menu_item menu-item-object-wpml_ls_menu_item menu-item-has-children">
                <a title="Language Switcher" href="#" class="language-switcher-link has-submenu"><span></span></a>
                <ul class="sub-menu elementor-nav-menu--dropdown sm-nowrap">
                  <li class="menu-item wpml-ls-item wpml-ls-menu-item"><a href="https://corp.roblox.com/zh-hans/"> <span
                        class="wpml-ls-native" lang="zh-hans"> 简体中文</span></a></li>
                  <li class="menu-item wpml-ls-item wpml-ls-menu-item"><a href="https://corp.roblox.com/zh-hant/"> <span
                        class="wpml-ls-native" lang="zh-hant"> 繁體中文</span></a></li>
                  <li class="menu-item wpml-ls-item wpml-ls-menu-item"><a href="https://corp.roblox.com"> <span
                        class="wpml-ls-native" lang="en"> English</span></a></li>
                  <li class="menu-item wpml-ls-item wpml-ls-menu-item"><a href="https://corp.roblox.com/fr/"> <span
                        class="wpml-ls-native" lang="fr"> Français</span></a></li>
                  <li class="menu-item wpml-ls-item wpml-ls-menu-item"><a href="https://corp.roblox.com/de/"> <span
                        class="wpml-ls-native" lang="de"> Deutsch</span></a></li>
                  <li class="menu-item wpml-ls-item wpml-ls-menu-item"><a href="https://corp.roblox.com/it/"> <span
                        class="wpml-ls-native" lang="it"> Italiano</span></a></li>
                  <li class="menu-item wpml-ls-item wpml-ls-menu-item"><a href="https://corp.roblox.com/ja/"> <span
                        class="wpml-ls-native" lang="ja"> 日本語</span></a></li>
                  <li class="menu-item wpml-ls-item wpml-ls-menu-item"><a href="https://corp.roblox.com/ko/"> <span
                        class="wpml-ls-native" lang="ko"> 한국어</span></a></li>
                  <li class="menu-item wpml-ls-item wpml-ls-menu-item"><a href="https://corp.roblox.com/pt-br/"> <span
                        class="wpml-ls-native" lang="pt-br"> Português</span></a></li>
                  <li class="menu-item wpml-ls-item wpml-ls-menu-item"><a href="https://corp.roblox.com/es/"> <span
                        class="wpml-ls-native" lang="es"> Español</span></a></li>
                  <li class="menu-item wpml-ls-item wpml-ls-menu-item"><a href="https://corp.roblox.com/id/"> <span
                        class="wpml-ls-native" lang="id"> Indonesia</span></a></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </article>
    </section>
  </header>
</template>
<style lang="scss" scoped>
.site-header {
  &> * {
    width: 100% !important;
  }
}
#site-navigation-wrapper {
  margin-top: 1rem;
  z-index: 100;
  position: relative;
}
@media screen and (min-width: 600px) {
  #site-navigation-wrapper:not(.element-is-sticky) {
    margin-top: 2rem;
  }
}
@media screen and (min-width: 960px) {
  #site-navigation-wrapper:not(.element-is-sticky) {
    margin-top: 3rem;
  }
}
@media screen and (min-width: 1280px) {
  #site-navigation-wrapper:not(.element-is-sticky) {
    margin-top: 4rem;
  }
}

.container {
  width: calc(100% - 3rem);
  margin-left: auto;
  margin-right: auto;
  max-width: calc(1280px - 12rem);
}
#site-navigation-wrapper > article {
  position: relative;
  border-radius: 8px;
  background: #000;
  height: 80px;
  .brand-logo {
    position: relative;
    left: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
  }
  .main-navigation {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .menu-main-menu-container {
      opacity: 0;
      transition: all 500ms;
    }
    .menu-toggle {
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
  }
}
@media screen and (min-width: 960px) {
  #site-navigation-wrapper > article {
    display: flex;
    align-items: center;
    padding-left: 1.5rem;
    height: unset;
    .brand-logo {
      left: unset;
      top: unset;
      transform: unset;
    }
    .main-navigation {
      position: unset;
      top: unset;
      left: unset;
      right: unset;
      .menu-main-menu-container {
        opacity: 1;
        margin-top: unset !important;
      }
    }
  }
}
#site-navigation-wrapper > article.container {
  max-width: calc(1280px - 12rem);
}
body:not(.blurred) #site-navigation-wrapper > article {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(1rem);
  -webkit-backdrop-filter: blur(1rem);
}
.brand-logo {
  display: inline-block;
  z-index: 5;
}
.main-navigation {
  display: block;
  width: 100%;
}
.menu-toggle, .main-navigation.toggled ul {
  display: block;
}

@media screen and (min-width: 960px) {
  .menu-toggle {
    display: none;
  }
}




</style>