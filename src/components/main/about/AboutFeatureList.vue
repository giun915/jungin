<script setup lang="ts">
import type { AboutFeature } from '@/constants/main/aboutData';
import AboutFeatureCard from './AboutFeatureCard.vue';

defineProps<{
    features: AboutFeature[]
}>()
</script>

<template>
    <ul class="icon_box_wrap">
        <AboutFeatureCard
            v-for="feature in features"
            :key=" feature.id"
            :feature="feature"
            :class="`icon_box${feature.id}`"
        />
    </ul>
</template>

<style scoped>
.icon_box_wrap {
    display: flex;
    gap: 1.25rem;
}

@media (max-width: 768px) {
  .icon_box_wrap {
    flex-direction: column;
    gap: 2rem;
  }
}
</style>