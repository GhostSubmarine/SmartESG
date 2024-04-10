<script setup lang="ts">

</script>

<template>
  <main class="main">
    <section class="headline">
      <article class="container">
        <div class="content">
          <h2>科技融⼊梦想<br/>绿⾊赋能发展</h2>
        </div>
      </article>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.main {
  flex-grow: 1;
  overflow: hidden;
  display: block;
  .headline {
    @media screen and (min-width: 1280px) {
      .container {
        width: 100%;
      }
    }
    .content {
      margin-left: auto;
      margin-right: auto;
      max-width: calc(1280px - 12rem);
      text-align: center;
    }
  }
  @media screen and (min-width: 600px) {
    .headline {
      padding-top: 4rem;
      padding-bottom: 4rem;
      h2 {
        font-size: 3.25rem;
		    line-height: 1.1719;
      }
    }
  }
  @media screen and (min-width: 768px) {
    .headline {
      h2 {
        font-size: 3.5rem;
      }
    }
  }
  @media screen and (min-width: 800px) {
    .headline {
      padding-top: 5rem;
      padding-bottom: 5rem;
    }
  }
  @media screen and (min-width: 960px) {
    .headline {
      padding-top: 5.5rem;
      padding-bottom: 5.5rem;
      h2 {
        font-size: 4rem;
      }
    }
  }
}
</style>
