<script setup lang="ts">
import { portfolioIntro, portfolioCategories } from '@/constants/main/portfolioData'
import SectionBoundry from '../common/SectionBoundry.vue';
</script>

<template>
    <section id="portfolio">
        <h4 class="blind">포트폴리오 섹션</h4>
        <div class="page_inner">
            <SectionBoundry/>
            <p class="section_txt">
                <template v-for="(item, index) in portfolioIntro" :key="index">
                    <span>{{ item.highlight }}</span>
                    {{ item.text }}
                    <br v-if="index !== portfolioIntro.length - 1" />
                </template>
            </p>
            <ul class="pf_list">
                <li v-for="(item, index) in portfolioCategories" :key="item.key" class="pf">
                    <RouterLink :to="`/portfolio/${item.key}`">
                        <img :src="item.cardImage" :alt="item.cardAlt">
                        <div class="content">
                            <h5 class="title">{{ item.cardTitle }}</h5>
                            <p class="content_txt">
                                <template v-for="(line, i ) in item.cardText" :key="i">
                                    {{ line }}
                                    <br v-if="i !== item.cardText.length - 1">
                                </template>
                            </p>
                            <button class="view_btn">
                                VIEW PORTFOLIO
                            </button>
                        </div>
                    </RouterLink>
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
.section_txt {
    text-align: center;
    font-size: 1.125rem;
    line-height: 2rem;
}

.section_txt span {
    font-weight: 700;
}

.pf_list {
    display: flex;
    gap: 3rem;
}

.pf {
    position: relative;
    display: flex;
    flex: 1;
    border: 0.75rem solid #333;
    height: 30rem;
    overflow: hidden;
}

a {
    display: flex;
    width: 100%;
}

img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.content {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    text-align: center;
    color: #fff;
    transition: all 0.4s ease;
    visibility: hidden;
    opacity: 0;
    background: rgba(0, 0, 0, 0.8);
}

a:hover .content {
    visibility: visible;
    opacity: 1;
}

.content p {
    font-size: 1.125rem;
    line-height: 1.75rem;
}

h5 {
    font-size: 2.5rem;
    text-shadow: 0 0 0.75rem #000;
}

button {
    margin-top: 5rem;
    padding: 0.25rem 1.5rem;
    color: var(--main-color);
    border: 2px solid var(--main-color);
    border-radius: 9999px;
    font-size: 1.125rem;
}
</style>