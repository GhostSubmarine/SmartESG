<script setup>
import { ref } from 'vue'
import image1 from '../../../assets/images/carbonAndClimate/微信图片_20240414140939.png'
import image2 from '../../../assets/images/carbonAndClimate/微信图片_20240414140949.png'
import image3 from '../../../assets/images/carbonAndClimate/微信图片_20240414140952.png'
import image4 from '../../../assets/images/carbonAndClimate/微信图片_20240414140955.png'
const imageData = ref([
  {id: '1', title: '物理⻛险与转型⻛险识别服务', content: `识别⽓候物理和转型⻛险，评估资产和投资组合的暴露程度。`, src: image1},
  {id: '2', title: '⽓候友好项⽬平台', content: `提供产品碳⾜迹追踪服务，涵盖⽣命周期各环节。`, src: image2},
  {id: '3', title: '供应链管理', content: `评估供应链可持续性，协助管理ESG⻛险，提升供应链透明度。`, src: image3},
{id: '4', title: '碳中和路线图/SBTi', content: `评估碳排放，制定减排⽬标和计划，确保与全球⽓候⽬标⼀致。`, src: image4}
])
</script>

<template>
  <main class="main">
    <section>
      <article>
        <div class="content">
          <h2>Smart ESG与MSCI、标普全球合作，提供⽓候⻛险量化、碳⾜迹追踪、供应链管理及碳中和服务。</h2>
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