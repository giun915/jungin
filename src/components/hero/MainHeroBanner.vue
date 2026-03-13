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
            :speed = "1000"
            :rewind="props.slides.length > 1"
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
                        <template v-for="(line, i) in slide.desc" :key="i">
                            {{ line }}
                            <br v-if="i !== slide.desc.length - 1">
                        </template>
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
    background: rgba(0, 0, 0, 0.35);
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
    line-height: 1.5;
} 

p {
    font-size: 2rem;
    font-weight: 500;
    text-shadow: 0 0 0.75rem var(--shadow-color);
}

a {
    display: inline-block;
    font-size: 1rem;
    font-weight: 500;
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

@media (max-width: 1024px) {
    h5 {
        font-size: 3.5rem;
    }

    p {
        font-size: 1.875rem;
    }

    .slider_arrow {
        display: none;
    }
}

@media (max-width: 768px) {
    .hero_swiper {
        height: 55vh;
    }
    h5 {
        font-size: 2.875rem;
    }

    p {
        font-size: 1.5rem;
    }

    a {
        font-size: 0.875rem;
        padding: 0.75rem 1.25rem;
    }
}

@media (max-width: 500px) {
    .slide_content {
        gap: 2.5rem;
    }

    h5 {
        font-size: 2.25rem;
    }

    p {
        font-size: 1.25rem;
    }

    a {
        font-size: 0.75rem;
    }
}
</style>