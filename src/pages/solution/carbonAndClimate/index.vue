<script setup>
import { ref } from 'vue'
import image1 from '../../../assets/images/carbonAndClimate/20240414140939.png'
import image2 from '../../../assets/images/carbonAndClimate/20240414140949.png'
import image3 from '../../../assets/images/carbonAndClimate/20240414140952.png'
import image4 from '../../../assets/images/carbonAndClimate/20240414140955.png'
const imageData = ref([
  {id: '1', title: '物理⻛险与转型⻛险识别服务', content: `识别⽓候物理和转型⻛险，评估资产和投资组合的暴露程度。`, src: image1},
  {id: '2', title: '⽓候友好项⽬平台', content: `提供产品碳⾜迹追踪服务，涵盖⽣命周期各环节。`, src: image2},
  {id: '3', title: '供应链管理', content: `评估供应链可持续性，协助管理ESG⻛险，提升供应链透明度。`, src: image3},
{id: '4', title: '碳中和路线图/SBTi', content: `评估碳排放，制定减排⽬标和计划，确保与全球⽓候⽬标⼀致。`, src: image4}
])
</script>

<template>
  <div class="idx-sct3" style="padding-top: 17rem;;">
    <div class="idx-sct-title">碳与⽓候解决⽅案</div>
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