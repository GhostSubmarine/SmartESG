<script setup lang="ts">
import 'element-plus/es/components/container/style/css'
import 'element-plus/es/components/main/style/css'
import 'element-plus/es/components/header/style/css'
import 'element-plus/es/components/col/style/css'
import 'element-plus/es/components/row/style/css'
import { ElContainer, ElMain, ElHeader, ElCol, ElRow } from 'element-plus'
</script>

<template>
  <ElContainer class="container">
    <ElHeader>
      <ElRow :gutter="10" class="header">
        <ElCol :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
          ><div class="grid-content ep-bg-purple"
        /></ElCol>
        <ElCol :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
          ><div class="grid-content ep-bg-purple-light"
        /></ElCol>
        <ElCol :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
          ><div class="grid-content ep-bg-purple"
        /></ElCol>
        <ElCol :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
          ><div class="grid-content ep-bg-purple-light"
        /></ElCol>
      </ElRow>
    </ElHeader>
    <ElMain style="height: 100vh;">Main</ElMain>
  </ElContainer>
  <!-- <RouterView /> -->
</template>

<style lang="scss" scoped>
.container {
  height: 100vh;
  overflow: auto; 
  .header {
    position: sticky;
    // top: 0;
  }
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  background-color: aquamarine;
}
</style>
