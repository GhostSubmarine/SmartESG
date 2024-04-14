<script setup>
import { ref } from 'vue'
import image1 from '../../../assets/images/comprehensiveRating/微信图片_20240414135957.png'
import image2 from '../../../assets/images/comprehensiveRating/微信图片_20240414140004.png'
import image3 from '../../../assets/images/comprehensiveRating/微信图片_20240414140007.png'
const imageData = ref([
  {id: '1', title: 'MSCI预评级服务', content: `MSCI ESG预评级旨在帮助⾮上市公司和⾮评级发⾏⼈了解其在MSCI ESG研究标
准覆盖范围内的地位，以及他们将如何被评估并被分配MSCI ESG评级。`, src: image1},
  {id: '2', title: '标普企业基准报告服务', content: `企业完成标普企业可持续发展评估（Corporate Sustainability Assessment,
CSA）评估后，可申请CBR报告服务。CBR可为贵公司提供可持续发展绩效的⽐
较性评估，帮助贵公司确定关键竞争优势和有待改进的领域，以及现在和将来会
对贵公司产⽣影响的关键可持续发展挑战和机遇。`, src: image2},
  {id: '3', title: 'CDP预评分', content: `我们的Smartesg顾问团队提供CDP预评分服务，基于CDP⽅法学，搭建预评分⼯
具，对企业回复的CDP问卷进⾏交叉打分，以提前把握本年度得分情况。`, src: image3}
])
</script>

<template>
  <main class="main">
    <section class="grid popout">
      <article class="container">
        <div class="content">
          <h6>Smart ESG与标普全球、MSCI等机构合作，推出了⼀系列评级管理服务，旨
在帮助企业全⾯了解其可持续发展绩效，并在全球市场中展现出竞争优势。具体包括，
MSCI预评级服务， 标普CSA预评级服务以及CDP预评分服务。其中，MSCI及标普预评
级服务可以由MSCI及标普研究员直接开展，辅以问卷填报，披露提升及同⾏差距分析等
服务，为企业ESG绩效整体提升保驾护航。 此外，Smart ESG积极与中证，恒⽣，
FTSE，Sustainlytics，Ecovadise，GRESB，ISS及Glasslewis等国内外主流评级机构保
持沟通，基于客⼾需求，有针对性的开展相关业务。
          </h6>
        </div>
        <div class="media">
          <div class="flex-card" v-for="(item, index) in imageData" :key="item.id">
            <img :src="item.src" />
            <div>
              <b>{{index + 1}}</b>
              <div>
                <h6>{{item.title}}</h6>
                <p>{{item.content}}</p>
              </div>
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
    max-width: 800px;
    margin: 0 auto;
    .container {
      .content {
        max-width: 600px;
        margin: 0 auto;
      }
      .media {
        display: flex;
        // justify-content: space-evenly;
        flex-wrap: wrap;
        @media screen and (max-width: 600px) {
          .flex-card {
            // margin: 0 2rem;
            width: 100%;
            img {
              width: 100%;
            }
          }
        }
        .flex-card {
          width: 400px;
          height: 300px;
          display: flex;
          flex-direction: column;
          // align-items: center;
          gap: 1rem;
          position: relative;
          // margin-bottom: 2rem;
          >div {
            position: absolute;
            bottom: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.6);
            width: 100%;

          }
          img {
            width: 100%;
            height: 100%;
          }
          >div {
            display: flex;
            align-self: baseline;
            gap: 1rem;
            >div {
              display: flex;
              flex-direction: column;
              gap: .5rem;
              p {
                text-indent: .5rem;
              }
            }
          }
          h6 {
            text-align: left;
            // margin-left: 1rem;
            margin-bottom: 0!important;
            font-size: 1.2rem;
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
  @media screen and (max-width: 1200px) {
    section {
      max-width: 800px;
    }
  }
  @media screen and (max-width: 799px) {
    section {
      max-width: 400px;
    }
  }
}
</style>