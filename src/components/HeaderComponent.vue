<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>
<template>
  <el-row justify="center">
    <el-col :span="24">
      <div class="header-content">
        <el-button type="primary">
          <router-link class="link" to="/movies/create">+ Add movie</router-link>
        </el-button>
        <p>{{ route.name }}</p>
      </div>
    </el-col>
  </el-row>
</template>
<style scoped>
.header-content {
  padding: 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;
  color: white;
}
</style>