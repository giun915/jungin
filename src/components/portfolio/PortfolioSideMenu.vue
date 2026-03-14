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
    display: flex;
    flex-direction: column;
    margin-top: 0.25rem;
}

li {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85%;
    margin: 0 auto;
    font-size: 1rem;
    line-height: 3rem;
    border-bottom: 1px solid var(--main-color);
}

.menu_sel a {
    color: var(--main-color);
}

/* 반응형 */
@media (max-width: 1024px) {
  .side_menu_wrap {
    width: 100%;
  }

  .side_menu_list {
    flex-direction: row;
    margin-top: 0.75rem;
  }

  li {
    border-bottom: none;
  }

  li:after {
    content: "";
    position: absolute;
    display: block;
    width: 1px;
    height: 1.5rem;
    background-color: var(--main-color);
    right: 0;
  }

  li:last-child:after {
    content: none;
  }
}

</style>