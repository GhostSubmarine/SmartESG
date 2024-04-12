<script setup>
import { ref } from 'vue'
const imageData = ref([
  {id: '1', title: '物理⻛险与转型⻛险识别服务'},
  {id: '2', title: '⽓候友好项⽬平台'},
  {id: '3', title: '供应链管理'},
  {id: '4', title: '碳中和路线图/SBTi'}
])
</script>


<template>
  <main class="main">
    <section class="grid popout">
      <article class="container">
        <!-- <div class="content">
          <h6>Smartesg相信资本向善，积极推动低碳转型与绿⾊⾦融相关服务，提供全⾯的
ESG产业链服务。在投资⼈服务⽅⾯，涵盖ESG尽调与市场分析、ESG投资策略整合、ESG
投资组合⽓候⻛险管理、以及投后管理与被投企业互动等领域。致⼒于实现从“选投管
退”全链条可持续发展，以及其后投融资，绿⾊⾦融以及转型⾦融的专题研究。通过与
MSCI与标普合作，量化⽓候⻛险为投资⼈提供专业定制化的ESG整合解决⽅案与策略，积
极应对⽓候变化，加速低碳转型。
          </h6>
        </div> -->
        <div class="media">
          <div class="flex-card" v-for="(item, index) in imageData" :key="item.id">
            <img src="@/assets/images/微信图片_20240411141725.jpg" />
            <div>
              <b>{{index + 1}}</b>
              <h6>{{item.title}}</h6>
            </div>
          </div>
        </div>
      </article>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.main {
  section {
    position: relative;
    padding-top: 3rem;
    padding-bottom: 3rem;
    max-width: 1040px;
    margin: 0 auto;
    .container {
      .content {
        max-width: 600px;
        margin: 0 auto;
      }
      .media {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        @media screen and (max-width: 600px) {
          .flex-card {
            margin: 0 2rem;
            width: 100%;
            img {
              width: 100%;
            }
          }
        }
        .flex-card {
          width: 400px;
          display: flex;
          flex-direction: column;
          // align-items: center;
          gap: 1rem;
          img {
            width: 100%;
          }
          >div {
            display: flex;
            align-self: baseline;
          }
          h6 {
            text-align: left;
            margin-left: 1rem;
          }
          b {
            font-size: 3rem;
          }
        }
      }
    }
  }

  @media screen and (min-width: 600px) {

    section {
      padding-top: 4rem;
      padding-bottom: 4rem;
    }
  }

  @media screen and (min-width: 800px) {

    section {
      padding-top: 5rem;
      padding-bottom: 5rem;
    }
  }
}
</style>