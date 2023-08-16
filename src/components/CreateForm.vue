<script setup>
import { reactive } from 'vue';

defineEmits(['addNewMovie'])

const movie = reactive({
  Title: '',
  Poster: '',
  Director: '',
  Year: ''
})

</script>
<template>
  <el-form :inline="true" :model="movie" class="form">
    <el-form-item label="Title">
      <el-input v-model="movie.Title" placeholder="Title" clearable />
    </el-form-item>
    <el-form-item label="Director">
      <el-input v-model="movie.Director" placeholder="Director" clearable />
    </el-form-item>
    <el-form-item label="Year">
      <el-date-picker
        v-model="movie.Year"
        type="date"
        placeholder="Pick a date"
        clearable
      />
    </el-form-item>
    <el-form-item label="Poster">
      <el-input v-model="movie.Poster" placeholder="Poster" type="file" clearable />
    </el-form-item>
    <el-form-item >
      <el-button type="primary" @click="$emit('addNewMovie', movie)">Create</el-button>
    </el-form-item>
  </el-form>
</template>
<style scoped>
.form {
  width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.form .el-input {
  --el-input-width: 100%;
}
</style>