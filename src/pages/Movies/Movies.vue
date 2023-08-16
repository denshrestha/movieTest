<script setup>
import { onMounted } from 'vue';
import {usemovieStore} from '../../store/movie.store'
import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
const router = useRouter()
const store = usemovieStore()

onMounted(() => {
  if(store.getMovies.length) return
  store.fetchMovies(route.query)
})

const openMovie = (id) => router.push(`/movies/${id}`)

</script>
<template>
  <div class="movies text-center" m="t-4">
    <p class="demonstration">Results by "{{ route.query.search }}"</p>
    <el-carousel :interval="4000" type="card" height="400px" class="block">
      <el-carousel-item v-for="item in store.getMovies" :key="item">
        <movie-card :item="item" @open-movie="openMovie"/>
      </el-carousel-item>
    </el-carousel>
		<go-home />
  </div>
</template>

<style scoped>
.demonstration {
  margin-bottom: 20px;
  text-align: center;
}
.block {
  min-height: 100%;
}

.el-carousel__item {
	height: 100%;
}

.el-carousel__item {
  background-color: #000000;
}
</style>