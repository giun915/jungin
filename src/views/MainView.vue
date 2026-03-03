<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import HeroBanner from '@/components/hero/HeroBanner.vue';
import { heroSlides } from '@/constants/hero/heroSlides'
</script>

<template>
    <AppHeader />
    <main>
        <HeroBanner :slides="heroSlides"/>
    </main>
</template>