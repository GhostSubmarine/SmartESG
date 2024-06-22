<script setup>
import { ref } from 'vue'
import image1 from '../../../assets/images/comprehensiveRating/20240414135957.png'
import image2 from '../../../assets/images/comprehensiveRating/20240414140004.png'
import image3 from '../../../assets/images/comprehensiveRating/20240414140007.png'
const imageData = ref([
  {id: '1', title: 'MSCI预评级服务', content: `帮助⾮上市公司了解MSCI ESG评级，预评级周期约3个⽉。`, src: image1},
  {id: '2', title: '标普企业基准报告服务', content: `提供标普CSA评估报告，评估可持续发展绩效，识别改进领域。`, src: image2},
  {id: '3', title: 'CDP预评分', content: `提供CDP预评分⼯具和优化建议，提前掌握年度得分情况。`, src: image3}
])
</script>

<template>
  <div class="idx-sct3" style="padding-top: 17rem;;">
    <div class="idx-sct-title">评级综合解决⽅案</div>
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