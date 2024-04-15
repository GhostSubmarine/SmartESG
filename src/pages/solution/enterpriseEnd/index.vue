<script setup>
import { ref } from 'vue'
import image1 from '../../../assets/images/enterpriseEnd/微信图片_20240414132032.jpg'
import image2 from '../../../assets/images/enterpriseEnd/微信图片_20240414132103.png'
import image3 from '../../../assets/images/enterpriseEnd/微信图片_20240414132110.png'
import image4 from '../../../assets/images/enterpriseEnd/微信图片_20240414132113.png'
import image5 from '../../../assets/images/enterpriseEnd/微信图片_20240414132115.png'
import image6 from '../../../assets/images/enterpriseEnd/微信图片_20240414132126.png'
import image7 from '../../../assets/images/enterpriseEnd/微信图片_20240414132128.png'
import image8 from '../../../assets/images/enterpriseEnd/微信图片_20240414132135.png'
import image9 from '../../../assets/images/enterpriseEnd/微信图片_20240414132138.png'
const imageData = ref([
  {id: '1', title: '同⾏最佳实践：ESG指标对标分析服', content: `我们将对您所在⾏业的同⾏业企业进⾏深⼊研究，梳理其ESG指标体系，以帮助您了
解资本市场和主要利益相关⽅的期待。`, src: image1},
  {id: '2', title: 'ESG披露与报告', content: `我们采⽤1+N的模式，为企业提供全⾯的ESG报告服务，以展⽰其关键可持续发展绩
效。我们将围绕披露窗⼝期，从全年⼯作规划的视⻆出发，推进ESG披露的深化。`, src: image2},
  {id: '3', title: 'ESG内部管理体系', content: `我们将梳理ESG领域的合规要求、最佳实践以及评级标准，帮助您了解市场预期，并
建⽴中国特⾊的ESG⾏业管理矩阵，确保管理体系与实际情况相匹配。`, src: image3},
  {id: '4', title: 'ESG投资⼈沟通与互动', content: `根据投资⼈的ESG倾向，及时调整披露重点，确保您的ESG信息与投资者的关注点保
持⼀致，提升沟通效果和投资者满意度。`, src: image4},
  {id: '5', title: 'ESG专题研究服务',content: `我们将根据贵公司的具体情况和需求，提出针对性的专题研究建议。这些专题可能涵
盖⽓候⻛险评估、绿⾊建筑、治理架构等内容。`, src: image5},
  {id: '6', title: '能⼒建设与培训', content: `根据客⼾的需求和现状，提供普适性议题培训和专题培训服务。普适性培训涵盖ESG
基础知识、可持续发展理念和相关法规法规等内容，以帮助员⼯全⾯了解ESG概念和
实践。专题培训则针对具体的ESG议题，如⽓候变化、社会责任、公司治理等，深⼊
探讨，并提供实际操作指导和案例分享，帮助企业更好地应对相关挑战和机遇。`, src: image6},
  {id: '7', title: '数智化产品研发', content: `我们利⽤数智化⼿段，为您开发定制化⼯具，帮助贵司轻松应对不同利益相关⽅的需
求。这些⼯具涵盖政策法规监测、会议活动管理、ESG披露跟踪等多个⽅⾯，让客⼾
能够更⾼效地管理与利益相关⽅的沟通与互动，聚焦于创造附加值更⾼的⼯作。`, src: image7},
  {id: '8', title: 'ESG战略', content: `与客⼾合作，评估其与环境（Environmental）、社会（Social）、公司治理
（Governance）相关的关键议题，并确定对企业⻓期价值和可持续发展最为重要的
⽅⾯，识别与企业业务战略密切相关的ESG⻛险和机遇。`, src: image8},
  {id: '9', title: '实质性议题影响分析', content: `使⽤双重重要性原则，通过深⼊研究和分析，识别与影响重⼤、财务重⼤的实质性议
题，如⽓候变化、⼈权、社会公正、治理结构等。在确定议题时，我们将根据其对企
业战略⽬标和利益相关⽅的影响程度进⾏优先级排定，以便客⼾能够集中精⼒应对最
重要和紧迫的问题。`, src: image9}
])
</script>


<template>
  <main class="main">
    <section class="grid popout">
      <article class="container">
        <div class="content">
          <h6 style="text-indent: 1rem;">SmartESG提供ESG专业全流程服务，从合规报告、认知提升、⽬标设定，内部
管理KPI及外部利益相关⽅沟通策略等⽅⾯，陪伴企业逐步陪伴企业成⻓，迈向可持续领导⼒。
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
@import url(../../../assets/grid.scss);
</style>