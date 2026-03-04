<script setup lang="ts">
import { aboutIntro, aboutFeatures, processSteps } from '@/constants/main/aboutData'
import SectionBoundry from '@/components/common/SectionBoundry.vue';
import AboutIntroText from './about/AboutIntroText.vue';
import AboutFeatureList from './about/AboutFeatureList.vue';
import AboutProcess from './about/AboutProcess.vue';
</script>

<template>
    <section id="about">
        <h6 class="blind">어바웃섹션</h6>
        <div class="page_inner">
            <SectionBoundry/>
            <AboutIntroText :lines = "aboutIntro" />
            <AboutFeatureList :features = "aboutFeatures" />
        </div>
        <AboutProcess :steps="processSteps" />
    </section>
</template>

<style scoped>
#about {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin-top: 2rem;
}

.page_inner {
    flex-direction: column;
    gap: 4rem;
}
</style>