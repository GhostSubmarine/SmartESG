<script setup>
import { ref } from 'vue'
import image1 from '../../assets/images/stage/20240414141203.png'
import image2 from '../../assets/images/stage/20240414141212.png'
import image3 from '../../assets/images/stage/20240414141216.png'
const imageData = ref([
  { 
    id: '1', 
    title: 'ESG信息化管理平台', content: `提供数据采集、整合和清洗服务，确保ESG数据⾼质量和报告精准。`, 
    src: image1
  },
  { id: '2', title: 'ESG企业服务平台⼯具与云计算平台', content: `提供定制化报告服务，帮助企业塑造可持续发展形象，增强竞争⼒。`, src: image2 },
  { id: '3', title: 'ESG投资与投后管理平台', content: `分析投资⼈ESG倾向，调整沟通策略与披露重点。`, src: image3 }
])
</script>

<template>
  <main class="main">
    <section>
      <article>
        <div class="content">
          <h2>SmartESG提供全⽅位ESG服务，助⼒企业推进可持续发展战略，涵盖策略规划、实施⽀持及监测报告</h2>
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
@import url(../../assets/grid.scss);
</style>