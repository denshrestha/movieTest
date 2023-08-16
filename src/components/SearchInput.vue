<script setup>
import {ref} from 'vue'
import { Search } from '@element-plus/icons-vue'

const emit = defineEmits(['searchData'])

const search = ref('')
const select = ref('movie')

const submitSearch = () => {
  if(!search.value) return
  emit('searchData', {search: search.value, type: select.value})
}

</script>
<template>
  <el-input
    v-model="search"
    :placeholder="`Search by ${select} name`"
    class="input-with-select"
  >
    <template #prepend>
      <el-select v-model="select" placeholder="Select" style="width: 115px">
        <el-option label="movie" value="movie" />
        <el-option label="series" value="series" />
      </el-select>
    </template>
    <template #append>
      <el-button 
        :icon="Search" 
        @click="submitSearch"
      />
    </template>
  </el-input>
</template>