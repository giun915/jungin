<script setup lang="ts">
import {RouterView} from "vue-router";
import AppHeader from "./components/layout/AppHeader.vue";
import AppFooter from "./components/layout/AppFooter.vue";
import BackToTopButton from "./components/common/BackToTopButton.vue";
</script>

<template>
  <AppHeader />
  <RouterView />
  <AppFooter />
  <BackToTopButton />
</template>

<style scoped>
</style>
