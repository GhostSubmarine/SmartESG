<script setup>
import { ref } from 'vue'
import image1 from '../../../assets/images/investor/微信图片_20240414134148.png'
import image2 from '../../../assets/images/investor/微信图片_20240414134219.png'
import image3 from '../../../assets/images/investor/微信图片_20240414134227.png'
import image4 from '../../../assets/images/investor/微信图片_20240414134230.png'
import image5 from '../../../assets/images/investor/微信图片_20240414135109.png'
const imageData = ref([
  {id: '1', title: 'ESG尽调与市场分析', content: `Smartesg基于世界银⾏集团国际⾦融公司(IFC)等⼴受认可的ESG尽调标准，结合客⼾现实诉求，形成定制化的尽调⽅案。对劳⼯、⼟著居⺠、社区、⽂化遗产等内容进⾏全⽅位扫描，同时包括争议与合规检查。尽调结束后，出具尽职调查结果意⻅书，帮助客⼾全⾯了解和管理ESG⻛险，为其决策提供有⼒⽀持。`, src: image1},
  {id: '2', title: 'ESG投资策略整合', content: `Smartesg在ESG投资领域拥有丰富经验，能够根据客⼾的需求和偏好，协助完成ESG投资策略选择与产品搭建。亦可以提供技术研究和因⼦研究服务，为ESG相关⾦融产品提供专业的可持续视野。`, src: image2},
  {id: '3', title: 'ESG投资组合⽓候⻛险管理', content: `Smartesg利⽤第三⽅数据库，针对⽓候⻛险（包括实体⻛险与转型⻛险）、治理⻛险等ESG⻛险内容，进⾏分⾏业与分档识别和管理。推动现有投资组合逐步了解其可持续发展状况，实现ESG⻛险管理，释放投资组合优化潜⼒。`, src: image3},
  {id: '4', title: '投后管理与尽职调查', content: `Smartesg提供股东ESG DNA数据、潜在投资⼈定位服务，以及协助准备ESG路演，积极开展对话，帮助投资⼈更好地理解和应对ESG相关挑战和机遇。亦为投资⼈提供股东⼤会议案⻛险分析、股东投票预判分析，与ISS和GlassLewis等机构沟通，协助准备反驳⽂件，并提供互动与总结等服务，以帮助投资⼈做出明智的投票决策。`, src: image4},
{id: '5', title: '绿⾊信贷与压⼒测试', content: `根据客⼾需求选择压⼒测试框架，协助选择压⼒因素与指标，并设计不同情景进⾏测试。通过分析不同承压对象在不同情景下的表现，助您有效管理绿⾊信贷⻛险。`, src: image5}
])
</script>


<template>
  <main class="main">
    <section>
      <article>
        <div class="content">
          <h2>SmartESG致⼒于提供全⽅位的ESG服务，以助⼒企业持续、系统地推进其可持续发展战略。服务覆盖了ESG策略规划、实施⽀持到后期的监测与报告，构建了⼀个结构化的服务体系。</h2>
        </div>
        <div class="media">
          <div class="grid-wrapper">
            <div class="flex-card  hover has-cta" v-for="item in imageData" :key="item.id + ''">
              <div class="card-content">
                <div class="card-media-wrapper" :data-category="item.title">
                  <div class="card-media" :style="{ backgroundImage: 'url(' + item.src + ')' }" />
                </div>
                <div class="text-section">
                  <h3 class="ellipses-overflow">
                    {{ item.content }}
                  </h3> 
                  <a class="cta-text"
                    href="#"
                    target="_blank">
                    阅读 更多
                  </a>
                </div>
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