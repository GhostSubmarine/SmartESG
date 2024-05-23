<script setup>
import { ref } from 'vue'
import image1 from '../../../assets/images/comprehensiveRating/微信图片_20240414135957.png'
import image2 from '../../../assets/images/comprehensiveRating/微信图片_20240414140004.png'
import image3 from '../../../assets/images/comprehensiveRating/微信图片_20240414140007.png'
const imageData = ref([
  {id: '1', title: 'MSCI预评级服务', content: `帮助⾮上市公司了解MSCI ESG评级，预评级周期约3个⽉。`, src: image1},
  {id: '2', title: '标普企业基准报告服务', content: `提供标普CSA评估报告，评估可持续发展绩效，识别改进领域。`, src: image2},
  {id: '3', title: 'CDP预评分', content: `提供CDP预评分⼯具和优化建议，提前掌握年度得分情况。`, src: image3}
])
</script>

<template>
  <main class="main">
    <section>
      <article>
        <div class="content">
          <h2>Smart ESG提供评级综合解决⽅案</h2>
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