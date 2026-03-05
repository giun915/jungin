<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import HeroBanner from '@/components/hero/HeroBanner.vue';
import { heroSlides } from '@/constants/hero/heroSlides'
import AboutSection from '@/components/main/AboutSection.vue';
import PortfolioSection from '@/components/main/PortfolioSection.vue';
</script>

<template>
    <AppHeader />
    <main>
        <HeroBanner :slides="heroSlides"/>
        <AboutSection/>
        <PortfolioSection/>
    </main>
</template>