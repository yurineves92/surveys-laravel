<template>
   <PageComponent>
      <template v-slot:header>
         <div class="flex justify-between items-center">
            <h1 class="text-3x1 font-bold text-gray-900">Surveys</h1>
            <router-link
            :to="{ name: 'SurveyCreate' }"
            class="py-2 px-3 text-white bg-emerald-500 rounded-md hover:bg-emerald-600"
         >
            <svg
               xmlns="http://www.w3.org/2000/svg"
               class="h-4 w-4 -mt-1 inline-block"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
            >
               <path
               stroke-linecap="round"
               stroke-linejoin="round"
               stroke-width="2"
               d="M12 4v16m8-8H4"
               />
            </svg>
            Add new Survey
            </router-link>
         </div>
      </template>
      <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
         <div
            v-for="survey in surveys"
            :key="survey.id"
            class="flex flex-col py-4 py-6 shadow-md bg-white hover:bg-gray-50 h-[470px]"
         >
            <img :src="survey.image" alt="" class="w-full h-48 object cover"/>
            <h4 class="mt-4 text-lg font-bold">{{ survey.title }}</h4>
            <div v-html="survey.description" class="overflow-hidden flex-1"></div>
            <div class="flex justify-between items-center mt-3">
               <router-link
                  :to="{ name: 'SurveyView', params: { id: survey.id }}"
                  class="flex py-2 px-4 border border-transparent text-sm rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
               >Edit
               </router-link>
            </div>
         </div>
      </div>
   </PageComponent>
</template>

<script setup>
import store from '../store';
import { computed } from 'vue';
import PageComponent from '../components/PageComponent.vue';

const surveys = computed(() => store.state.surveys);
</script>

<style scoped>

</style>