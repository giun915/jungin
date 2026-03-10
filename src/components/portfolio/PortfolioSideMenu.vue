<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { portfolioCategories } from '@/constants/portfolio/portfolioData'

type Props = {
  activeKey?: string
}

defineProps<Props>()
</script>

<template>
    <aside class="side_menu_wrap">
        <p class="side_header">
            PORTFOLIO
        </p>
        <ul class="side_menu_list">
            <li v-for="item in portfolioCategories" :key="item.key" :class="{ menu_sel: item.key === activeKey }">
                <RouterLink :to="`/${item.key}`">
                    {{ item.label }}
                </RouterLink>
            </li>
        </ul>
    </aside>
</template>

<style scoped>
.side_menu_wrap {
    width: 10rem;
    text-align: center;
    flex: 0 0 auto;
}

p {
    color: #fff;
    background: #474747;
    font-size: 1rem;
    line-height: 2.5rem;
}

.side_menu_list {
    margin-top: 0.25rem;
}

li {
    width: 85%;
    margin: 0 auto;
    font-size: 1rem;
    line-height: 3rem;
    border-bottom: 1px solid var(--main-color);
}

.menu_sel a {
    color: var(--main-color);
}
</style>