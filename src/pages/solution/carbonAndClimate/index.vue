<script setup>
import { ref } from 'vue'
import image1 from '../../../assets/images/carbonAndClimate/微信图片_20240414140939.png'
import image2 from '../../../assets/images/carbonAndClimate/微信图片_20240414140949.png'
import image3 from '../../../assets/images/carbonAndClimate/微信图片_20240414140952.png'
import image4 from '../../../assets/images/carbonAndClimate/微信图片_20240414140955.png'
const imageData = ref([
  {id: '1', title: '物理⻛险与转型⻛险识别服务', content: `MSCI ESG预评级旨在帮助⾮上市公司和⾮评级发⾏⼈了解其在MSCI ESG研究标准覆盖范围内的地位，以及他们将如何被评估并被分配MSCI ESG评级。`, src: image1},
  {id: '2', title: '⽓候友好项⽬平台', content: `Smartesg提供全⾯的产品碳⾜迹追踪服务，涵盖产品⽣命周期的各个环节，包括原材料采购、⽣产制造、运输物流、使⽤阶段以及废弃处理等。通过综合追踪和分析，客⼾可以全⾯了解其产品的碳排放情况。`, src: image2},
  {id: '3', title: '供应链管理', content: `可根据Ecovadis等供应链评估标准，协助进⾏供应链可持续性评估，帮助客⼾全⾯了解其供应链的环境、社会和治理（ESG）⻛险和机遇。通过评估供应链中的各个环节，客⼾可以识别潜在的可持续发展⻛险，并制定相应的管理和改进措施。`, src: image3},
{id: '4', title: '碳中和路线图/SBTi', content: `协助客⼾评估其碳排放情况，并帮助他们制定符合科学基准的减排⽬标，以满⾜科学基准倡议（Science Based Targets initiative，SBTi）的要求。通过科学基准的设定，贵司可以在减排路径上确保与全球⽓候⽬标的⼀致性。`, src: image4}
])
</script>

<template>
  <main class="main">
    <section>
      <article>
        <div class="content">
          <h2>Smart ESG与MSCI&标普全球等知名机构合作，量化⽓候⻛险，为客⼾提供实操性的解决⽅案，包括但不限于供物理⻛险与转型⻛险识别服务、产品碳⾜迹追踪、供应链管理以及碳中和路线图/SBTi服务，协助客⼾更加全⾯地了解和管理其⾯临的各种⻛险，积极应对⽓候变化，促进低碳转型。</h2>
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