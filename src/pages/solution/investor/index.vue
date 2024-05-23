<script setup>
import { ref } from 'vue'
import image1 from '../../../assets/images/investor/微信图片_20240414134148.png'
import image2 from '../../../assets/images/investor/微信图片_20240414134219.png'
import image3 from '../../../assets/images/investor/微信图片_20240414134227.png'
import image4 from '../../../assets/images/investor/微信图片_20240414134230.png'
import image5 from '../../../assets/images/investor/微信图片_20240414135109.png'
const imageData = ref([
  {id: '1', title: 'ESG尽调与市场分析', content: `基于IFC标准，定制ESG尽调⽅案，全⾯扫描⻛险并提供决策⽀持。`, src: image1},
  {id: '2', title: 'ESG投资策略整合', content: `根据需求和偏好，提供ESG投资策略选择、产品搭建和技术研究服务。`, src: image2},
  {id: '3', title: 'ESG投资组合⽓候⻛险管理', content: `利⽤数据库，识别和管理⽓候与治理⻛险，推动投资组合优化。`, src: image3},
  {id: '4', title: '投后管理与尽职调查', content: `提供ESG DNA数据、路演协助、股东投票分析及与ISS和Glass Lewis的沟通服务。`, src: image4},
{id: '5', title: '绿⾊信贷与压⼒测试', content: `选择压⼒测试框架和情景，分析表现，帮助管理绿⾊信贷⻛险。`, src: image5}
])
</script>


<template>
  <main class="main">
    <section>
      <article>
        <div class="content">
          <h2>SmartESG提供ESG投资⼈解决⽅案，助⼒低碳转型。</h2>
        </div>
        <div class="media">
          <div class="grid-wrapper">
            <div class="flex-card  hover has-cta" v-for="item in imageData" :key="item.id + ''">
              <div class="card-content">
                <div class="card-media-wrapper" :data-category="item.title">
                  <div class="card-media" :style="{ backgroundImage: 'url(' + item.src + ')' }" />
                </div>
                <div class="text-section">
                  <h6 class="ellipses-overflow">
                    {{ item.content }}
                  </h6> 
                  <!-- <a class="cta-text"
                    href="#"
                    target="_blank">
                    阅读 更多
                  </a> -->
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