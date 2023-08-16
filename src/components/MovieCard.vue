<script setup>
defineProps({
  item: {
    type: Object,
    default: () => {}
  }
})
defineEmits(['openMovie'])
</script>
<template>
  <el-card class="card">
    <div class="card-wrapper">
      <div class="card-info">
        <div>
          <h4 class="small justify-center" text="3xl">{{ item.Title }}</h4>
          <p class="year">{{ item.Year }}</p>
        </div>
        <el-button rounded type="warning" @click="$emit('openMovie', item.imdbID)">View</el-button>
      </div>
      <img :src="item.Poster"/>
    </div>
  </el-card>
</template>
<style scoped>

.card {
  height: 100%;
  background-color: #000000;
  border: none;
  color: white;
}
.card-wrapper {
  padding: 16px;
  width: 100%;
  height: 100%;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  /* align-items: flex-start; */
}

.card-wrapper img {
  height: 350px;
  /* width: 100%; */
  object-fit: contain;
}

.card-info {
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.year {
  margin: 20px 0;
}
</style>
