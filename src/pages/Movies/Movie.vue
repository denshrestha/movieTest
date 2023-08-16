<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { usemovieStore } from '../../store/movie.store';
import { Picture as IconPicture } from '@element-plus/icons-vue'

const route = useRoute()
const store = usemovieStore()

const movie = ref(null)
onMounted(async () => {
    movie.value = await store.fetchMovieById(route.params.id)
})
</script>
<template>
    <div v-if="movie">
        <div  class="movie">
            <el-image :src="movie.Poster" fit="contain">
                <template #error>
                    <div class="image-slot">
                        <el-icon>
                            <icon-picture />
                        </el-icon>
                    </div>
                </template>
            </el-image>
            <div class="movie-details">
                <h2>{{ movie.Title }}</h2>
                <el-button round type="primary">{{ movie.Year }}</el-button>
                <h5>{{ movie.Director }}</h5>
            </div>
        </div>
        <go-home />
    </div>
    <div v-else>
        ...loading
    </div>
</template>

<style scoped>
.movie {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}

.movie-details {
    margin-left: 40px;
}
</style>