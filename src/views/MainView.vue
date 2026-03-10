<script setup lang="ts">
import MainHeroBanner from '@/components/hero/MainHeroBanner.vue';
import { portfolioCategories } from '@/constants/portfolio/portfolioData'
import AboutSection from '@/components/main/AboutSection.vue';
import PortfolioSection from '@/components/main/PortfolioSection.vue';
</script>

<template>
    <main>
        <MainHeroBanner :slides="portfolioCategories"/>
        <AboutSection/>
        <PortfolioSection/>
    </main>
</template>

<style scoped>
    main {
        margin-bottom: 5rem;
    }
</style>