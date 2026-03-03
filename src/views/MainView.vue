<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import HeroBanner from '@/components/common/HeroBanner.vue';
import { heroSlides } from '@/constants/heroSlides'
</script>

<template>
    <AppHeader />
    <main>
        <HeroBanner :slides="heroSlides"/>
    </main>
</template>