<script setup>
import { useRouter } from 'vue-router'
import {usemovieStore} from '../store/movie.store'
const store = usemovieStore()
const router = useRouter()
const handleSearch = async({search, type}) => {
  const result = await store.fetchMovies({search, type})
  if(result) {
    router.push({path: '/movies', query: {search, type}})
    console.log('done');
  }
}
</script>
<template>
  <div class="page-block">
    <div class="mt-4 search-wrapper">
      <search-input @searchData="handleSearch"/>
    </div>
  </div>
</template>

<style lang="css" scoped>
.search-wrapper {
  margin-top: -80px;
  min-width: 750px;
}
</style>