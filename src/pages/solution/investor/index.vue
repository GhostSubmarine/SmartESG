<script setup>
import { ref } from 'vue'
import image1 from '../../../assets/images/investor/20240414134148.png'
import image2 from '../../../assets/images/investor/20240414134219.png'
import image3 from '../../../assets/images/investor/20240414134227.png'
import image4 from '../../../assets/images/investor/20240414134230.png'
import image5 from '../../../assets/images/investor/20240414135109.png'
const imageData = ref([
  {id: '1', title: 'ESG尽调与市场分析', content: `基于IFC标准，定制ESG尽调⽅案，全⾯扫描⻛险并提供决策⽀持。`, src: image1},
  {id: '2', title: 'ESG投资策略整合', content: `根据需求和偏好，提供ESG投资策略选择、产品搭建和技术研究服务。`, src: image2},
  {id: '3', title: 'ESG投资组合⽓候⻛险管理', content: `利⽤数据库，识别和管理⽓候与治理⻛险，推动投资组合优化。`, src: image3},
  {id: '4', title: '投后管理与尽职调查', content: `提供ESG DNA数据、路演协助、股东投票分析及与ISS和Glass Lewis的沟通服务。`, src: image4},
{id: '5', title: '绿⾊信贷与压⼒测试', content: `选择压⼒测试框架和情景，分析表现，帮助管理绿⾊信贷⻛险。`, src: image5}
])
</script>


<template>
  <div class="idx-sct3" style="padding-top: 17rem;;">
    <div class="idx-sct-title">ESG投资⼈解决⽅案</div>
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