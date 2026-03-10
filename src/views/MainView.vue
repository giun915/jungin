<script setup lang="ts">
import MainHeroBanner from '@/components/hero/MainHeroBanner.vue';
import { heroSlides } from '@/constants/hero/heroSlides'
import AboutSection from '@/components/main/AboutSection.vue';
import PortfolioSection from '@/components/main/PortfolioSection.vue';
</script>

<template>
    <main>
        <MainHeroBanner :slides="heroSlides"/>
        <AboutSection/>
        <PortfolioSection/>
    </main>
</template>

<style scoped>
    main {
        margin-bottom: 5rem;
    }
</style>