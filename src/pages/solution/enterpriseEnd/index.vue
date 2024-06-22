<script setup>
import { ref } from 'vue'
import image1 from '../../../assets/images/enterpriseEnd/20240414132032.jpg'
import image2 from '../../../assets/images/enterpriseEnd/20240414132103.png'
import image3 from '../../../assets/images/enterpriseEnd/20240414132110.png'
import image4 from '../../../assets/images/enterpriseEnd/20240414132113.png'
import image5 from '../../../assets/images/enterpriseEnd/20240414132115.png'
import image6 from '../../../assets/images/enterpriseEnd/20240414132126.png'
import image7 from '../../../assets/images/enterpriseEnd/20240414132128.png'
import image8 from '../../../assets/images/enterpriseEnd/20240414132135.png'
import image9 from '../../../assets/images/enterpriseEnd/20240414132138.png'
const imageData = ref([
  { id: '1', title: '同⾏最佳实践：ESG指标对标分析服务', content: `深⼊研究同⾏业的ESG指标体系，帮助企业制定符合中国市场和资本市场需求的ESG策略，提升⾏业竞争⼒。`, src: image1 },
  { id: '2', title: 'ESG披露与报告', content: `提供全⾯的ESG报告服务，满⾜合规需求并回应各利益相关⽅的关切，展⽰企业在可持续发展⽅⾯的绩效。`, src: image2 },
  { id: '3', title: 'ESG内部管理体系', content: `建⽴符合中国特⾊的ESG管理矩阵，分配ESG议题与监测指标，提升企业在可持续发展⽅⾯的表现和市场竞争⼒。`, src: image3 },
  { id: '4', title: 'ESG投资⼈沟通与互动', content: `根据不同投资⼈的ESG倾向，定制沟通策略，包括ESG路演和股东⼤会议案投票，确保有效传达企业的ESG信息。`, src: image4 },
  { id: '5', title: 'ESG专题研究服务', content: `根据企业需求，提供定制化的专题研究服务，如⽓候⻛险评估、绿⾊建筑和治理架构，帮助企业实现可持续发展⽬标。`, src: image5 },
  { id: '6', title: '能⼒建设与培训', content: `提供ESG基础知识和专题培训，帮助企业员⼯全⾯了解ESG概念和实践，并通过认证课程和⾏业研讨会提升企业整体ESG能⼒。`, src: image6 },
  { id: '7', title: '数智化产品研发', content: `利⽤数智化⼿段，开发定制化⼯具，帮助企业应对不同利益相关⽅的需求，提⾼管理效率，聚焦⾼附加值⼯作。`, src: image7 },
  { id: '8', title: 'ESG战略', content: `评估与企业⻓期价值和可持续发展最为重要的ESG议题，制定战略⽬标和可衡量的KPI，推动企业在可持续发展道路上的前进。`, src: image8 },
  { id: '9', title: '实质性议题影响分析', content: `通过双重重要性原则，识别与企业战略⽬标和利益相关⽅⾼度相关的实质性议题，制定优先应对策略，确保企业有效回应最重要的挑战和机遇。`, src: image9 }
])
</script>


<template>
  <div class="idx-sct3" style="padding-top: 17rem;;">
    <div class="idx-sct-title">ESG企业端解决⽅案</div>
    <div class="idx-sct-areas-list">
      <div class="idx-sct-areas-row">
        <div class="idx-sct-area-itm" v-for="(item, index) in imageData" :key="item.id">
          <div class="idx-sct-area-itm-top">
            <div class="idx-sct-area-itm-img" :style="`background-image: url(${item.src})`"></div>
            <div class="idx-sct-area-itm-shadow"></div>
            <div class="idx-sct-area-itm-txt">
              <ul>
                <li>{{item.content}}</li>
              </ul>
            </div>
          </div>
          <div class="idx-sct-area-itm-inf">
            <div class="idx-sct-area-itm-no">
              {{index + 1}}
            </div>
            <div class="idx-sct-area-itm-title">
              {{item.title}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>