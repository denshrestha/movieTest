<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <header-component />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.header {
  background-color: var(--el-color-primary);
}
</style>
