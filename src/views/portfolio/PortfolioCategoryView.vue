<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { getPortfolioCategory  } from '@/constants/portfolio/portfolioData'
import SubHeroBanner from '@/components/hero/SubHeroBanner.vue'
import PortfolioSideMenu from '@/components/portfolio/PortfolioSideMenu.vue'

const route = useRoute()

const categoryKey = computed(() => String(route.params.category))
const category = computed(() => getPortfolioCategory(categoryKey.value))

</script>

<template>
    <main v-if="category" :id="category.key === 'commercial' ? 'commercial' : 'residential'">
        <SubHeroBanner
            :title="category.cardTitle"
            :label="category.label"
            :desc="category.desc"
            :cardImage="category.cardImage"
            :cardAlt="category.cardAlt"
        />
        <div class="page_inner">
            <PortfolioSideMenu :active-key="category?.key" />
            <ul class="item_list">
                <li v-for="item in category.items" :key="item.slug" class="item" :class="item.itemClass">
                    <RouterLink
                                class="more_btn"
                                :to="`/${category.key}/${item.slug}`">
                        <img :src="item.itemMainImage" :alt="item.slug">
                        <div class="cover">
                            <div class="content">
                                <p class="txt">
                                    <template v-for="(line, index) in item.title" :key="`${item.slug}-${index}`">
                                        {{ line }}
                                        <br v-if="index !== item.title.length - 1">
                                    </template>
                                </p>
                                <button>
                                    VIEW MORE
                                </button>
                            </div>
                        </div>
                    </RouterLink>
                </li>
            </ul>
        </div>
    </main>
</template>

<style scoped>
.page_inner {
    padding: 1.25rem 1.5rem;
    gap: 2rem
}

.item_list {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
}

.item {
    position: relative;
    aspect-ratio: 3 / 2;
    overflow: hidden;
}

img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

a {
    display: block;
    width: 100%;
    height: 100%;
}

.cover {
    width: 100%;
    height: 100%;
    border: 0.5rem solid transparent;
    box-sizing: border-box;
    opacity: 0;
    visibility: hidden;
    transition: all 0.6s ease;
}

.item:hover .cover {
    opacity: 1;
    visibility: visible;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.75);
    color: #fff;
    gap: 1.5rem;
}

p {
    font-size: 1rem;
    text-align: center;
    line-height: 1.5rem;
    margin-top: 1.5rem;
}

button {
    color: #fff;
    padding: 0.25rem 1.5rem;
    border: 1px solid #fff;
    border-radius: 9999px;
    margin-top: auto;
    margin-bottom: 1rem;
}

</style>