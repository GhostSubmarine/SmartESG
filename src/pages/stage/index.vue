<script setup>
import { ref } from 'vue'
import image1 from '../../assets/images/stage/微信图片_20240414141203.png'
import image2 from '../../assets/images/stage/微信图片_20240414141212.png'
import image3 from '../../assets/images/stage/微信图片_20240414141216.png'
const imageData = ref([
  {id: '1', title: ' ESG信息化管理平台', content: `提供全⾯的数据管理服务，包括数据采集、整合与清洗，以确保ESG数据的⾼质量和报告的精准性，从⽽为ESG评级提升打下坚实的数据基础。`, src: image1},
  {id: '2', title: 'ESG企业服务平台⼯具与云计算平台', content: `深⼊洞察并全⾯满⾜客⼾的特定需求，提供与全球ESG动态标准同步的定制化报告服务。通过引导客⼾遵循国际最佳实践并在报告中突出其独特价值，我们的服务旨在帮助企业塑造其可持续发展的形象，并在激烈的⾏业竞争中增强其竞争⼒和影响⼒，从⽽促进其⻓期成功和增⻓。`, src: image2},
  {id: '3', title: 'ESG投资与投后管理平台', content: `根据数据库找到⾏业关注投资⼈，分析其ESG倾向，协助调整沟通策略与披露重点.`, src: image3}
])
</script>

<template>
  <main class="main">
    <section class="section-full-width">
      <article class="container">
        <div class="content container">
          <div class="section-body">
            <!-- <h3 class="ng-star-inserted">关于我们</h3> -->
            <p>SmartESG致⼒于提供全⽅位的ESG服务，以助⼒企业持续、系统地推进其可持续发展战略。服务覆盖了ESG策略规划、实施⽀持到后期的监测与报告，构建了⼀个结构化的服务体系。</p>
          </div>
        </div>
      </article>
    </section>
    <section class="grid popout">
      <article class="container">
        <!-- <div class="content">
          <p>SmartESG致⼒于提供全⽅位的ESG服务，以助⼒企业持续、系统地推进
其可持续发展战略。服务覆盖了ESG策略规划、实施⽀持到后期的监测与报告，构建
了⼀个结构化的服务体系。
          </p>
        </div> -->
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
@import url(../../assets/grid.scss);
</style>