import {defineStore} from 'pinia';
import { computed, ref } from 'vue';
import $axios from '../plugins/axios';

export const usemovieStore = defineStore('movie', () => {
  const movies = ref([]);
  const localMovies = ref([]);

  const getMovies = computed(() => movies.value)
  const getLocalMovies = computed(() => localMovies.value)

  const fetchMovies = async ({search, type}) => {
    try {
      const { data = {}} = await $axios.get('', {
        params: {
          s: search,
          type
        }
      })
      if(data.Response === 'True') {
        movies.value = [...data.Search]
        console.log(movies.value)
        return true
      }
      return false
    } catch (e) {
      console.error(e.message)
    }
  }

  const fetchMovieById = async (id) => {
    try {
      const { data = {}} = await $axios.get('', {
        params: { i: id }
      })
      if(data.Response === 'True') {
        return data
      }
      return false
    } catch (e) {
      console.error(e.message)
    }
  }

  const createMovieData = (data) => {
    console.log(data)
    localMovies.value.push(data)
  }

  return {getMovies, getLocalMovies, fetchMovies, fetchMovieById, createMovieData}
})