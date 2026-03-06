<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import HeroBanner from '@/components/hero/HeroBanner.vue';
import { heroSlides } from '@/constants/hero/heroSlides'
import AboutSection from '@/components/main/AboutSection.vue';
import PortfolioSection from '@/components/main/PortfolioSection.vue';
import AppFooter from '@/components/layout/AppFooter.vue';
</script>

<template>
    <AppHeader />
    <main>
        <HeroBanner :slides="heroSlides"/>
        <AboutSection/>
        <PortfolioSection/>
    </main>
    <AppFooter />
</template>

<style scoped>
    main {
        margin-bottom: 5rem;
    }
</style>