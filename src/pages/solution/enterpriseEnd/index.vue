<script setup>
import { ref } from 'vue'
const imageData = ref([
  {id: '1', title: '同⾏最佳实践：ESG指标对标分析服'},
  {id: '2', title: 'ESG披露与报告'},
  {id: '3', title: 'ESG内部管理体系'},
  {id: '4', title: 'ESG投资⼈沟通与互动'},
  {id: '5', title: 'ESG专题研究服务'},
  {id: '6', title: '能⼒建设与培训'},
  {id: '7', title: '数智化产品研发'},
  {id: '8', title: 'ESG战略'},
  {id: '9', title: '实质性议题影响分析'}
])
</script>


<template>
  <main class="main">
    <section class="grid popout">
      <article class="container">
        <!-- <div class="content">
          <h6>SmartESG提供ESG专业全流程服务，从合规报告、认知提升、⽬标设定，内部
管理KPI及外部利益相关⽅沟通策略等⽅⾯，陪伴企业逐步陪伴企业成⻓，迈向可持续领导⼒。
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
    max-width: 1440px;
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