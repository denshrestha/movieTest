<script setup>
import { usemovieStore } from '../../store/movie.store';

const store = usemovieStore()

const addMovie = (movie) => store.createMovieData(movie)
</script>
<template>
    <div>
        <create-form @add-new-movie="addMovie"/>
        <el-row v-if="store.getLocalMovies">
            <el-col v-for="(movie, index) in store.getLocalMovies" :key="index" span="8">
                <movie-card :item="movie"/>
            </el-col>
        </el-row>
    </div>
</template>