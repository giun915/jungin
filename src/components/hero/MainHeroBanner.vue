<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules'

import 'swiper/swiper-bundle.css'

import type { PortfolioCategoryPageData } from '@/constants/portfolio/portfolioData'

const props = defineProps<{
  slides: PortfolioCategoryPageData[]
}>()

</script>

<template>
    <section class="hero">
        <h6 class="blind">메인 슬라이더</h6>

        <Swiper
            class="hero_swiper"
            :modules="[Navigation, Pagination, Autoplay, EffectFade ]"
            :slides-per-view= "1"
            :speed = "1000"
            :loop="props.slides.length > 1"
            :pagination="{el: '.swiper-pagination', clickable: true }"
            :autoplay="props.slides.length > 1 
                ? {delay: 500000, disableOnInteraction: false}
                :false"
            :navigation = "{nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}"
            effect="fade"
            :fade-effect="{crossFade: true}"
        >
            <SwiperSlide v-for="slide in props.slides" :key="slide.key" class="swiper-slide">
                <img :src="slide.cardImage" :alt="slide.cardAlt" />
                <div class="slide_content">
                    <h5> {{ slide.cardTitle }}</h5>
                    <p class="main_txt">
                        <p v-for="(line, i) in slide.desc" :key="i">
                            {{ line }}
                        </p>
                    </p>
                    <RouterLink :to="`/${slide.key}`">
                        VIEW PORTFOLIO
                    </RouterLink>
                </div>
            </SwiperSlide>
        </Swiper>
        <div v-if="props.slides.length > 1" class="swiper-pagination"></div>
        <div v-if="props.slides.length > 1" class="slider_arrow swiper-button-prev"></div>
    <div v-if="props.slides.length > 1" class="slider_arrow swiper-button-next"></div>
    </section>
</template>

<style scoped>
.hero_swiper {
    height: 31.25rem;
}

.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.swiper-slide:before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.25);
    z-index: 2;
}

img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.slide_content {
    display: flex;
    gap: 3.5rem;
    flex-direction: column;
    align-items: center;
    z-index: 2;
}

.slide_content * {
    color: #fff;
}

h5 {
    font-size: 4rem;
    text-shadow: 0 0 0.75rem var(--shadow-color);
}

.main_txt {
    display: flex;
    flex-direction: column;
    gap: 1rem;
} 

p {
    font-size: 2rem;
    font-weight: 300;
    text-shadow: 0 0 0.75rem var(--shadow-color);
}

a {
    display: inline-block;
    font-size: 1rem;
    font-weight: 200;
    border: 2px solid #fff;
    border-radius: 9999px;
    padding: 0.875rem 1.5rem;
}

.swiper-pagination {
    bottom: 1rem;
}

:deep(.swiper-pagination-bullet) {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 0.625rem;
    opacity: 1;
    background: #fff;
    transition: width 0.4s ease;
}

:deep(.swiper-pagination-bullet-active) {
    width: 1.5rem;
    background: #f8b126;
}

.slider_arrow {
    color: var(--main-color);
}

.swiper-button-prev {
    left: 3.125rem;
}

.swiper-button-next {
    right: 3.125rem;
}
</style>