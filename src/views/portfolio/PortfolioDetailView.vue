<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import {
  getPortfolioCategory,
  getPortfolioDetail,
} from '@/constants/portfolio/portfolioData'
import SubHeroBanner from '@/components/hero/SubHeroBanner.vue'
import PortfolioSideMenu from '@/components/portfolio/PortfolioSideMenu.vue'
import SectionBoundry from '@/components/common/SectionBoundry.vue'

const route = useRoute()

const categoryKey = computed(() => String(route.params.category ?? ''))
const slug = computed(() => String(route.params.slug ?? ''))

const category = computed(() => getPortfolioCategory(categoryKey.value))
const detailItem = computed(() => getPortfolioDetail(categoryKey.value, slug.value))
</script>

<template>
    <main v-if="category && detailItem">
        <SubHeroBanner
            :title="category.cardTitle"
            :label="category.label"
            :desc="category.desc"
            :cardImage="category.cardImage"
            :cardAlt="category.cardAlt"
        />
        <div class="page_inner">
            <PortfolioSideMenu :active-key="category.key" />
            <div class="content_wrap">
                <SectionBoundry />
                <div
                    v-for="detail in detailItem.detailList"
                    :key="detail.id"
                    class="contents">
                    <h2 class="content_title">
                        <span>{{ detail.id }}</span>
                        {{ detail.title }}
                    </h2>
                    <div class="image_list">
                        <img
                            v-for="image in detail.images"
                            :key="image.src"
                            :src="image.src"
                            :alt="image.alt">
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.page_inner {
    padding: 1.25rem 1.5rem;
    gap: 2rem
}
.content_wrap {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

h2 {
    display: flex;
    align-items: baseline;
        gap: 0.5rem;
    font-size: 1.5rem;
    color: #555;
    letter-spacing: 0.25rem;
    margin-bottom: 1.25rem;
}

span {
    font-size: 3rem;
    font-weight: 500;
    color: #828282;
}

.image_list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
</style>