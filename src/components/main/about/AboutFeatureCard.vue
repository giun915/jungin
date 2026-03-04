<script setup lang="ts">
import type { AboutFeature } from '@/constants/main/aboutData';

import IconBulb from '@/components/icons/main/IconBulb.vue'
import IconHome from '@/components/icons/main/IconHome.vue'
import IconTools from '@/components/icons/main/IconTools.vue'

defineProps<{
    feature: AboutFeature
}>()

const iconMap = {
  bulb: IconBulb,
  home: IconHome,
  tools: IconTools,
} as const
</script>

<template>
    <li class="icon_box">
        <div class="box">
            <i class="box_icon" aria-hidden="true">
                <component :is="iconMap[feature.icon]" />
            </i>
            <p class="box_txt">
                <template v-for="(t, i) in feature.title" :key="i">
                {{ t }}<br v-if="i !== feature.title.length - 1" />
                </template>
            </p>
        </div>
        <p class="icon_txt">
            <template v-for="(line, lineIdx) in feature.desc" :key="lineIdx">
                <template v-for="(chunk, chunkIdx) in line" :key="chunkIdx">
                    <span v-if="typeof chunk === 'object'">{{ chunk.highlight }}</span>
                    <template v-else>{{ chunk }}</template>
                </template>
                <br v-if="lineIdx !== feature.desc.length - 1" />
            </template>
        </p>
    </li>
</template>

<style scoped>
    .icon_box {
        flex: 1;
        text-align: center;
    }

    .icon_box1 .box {
        background-color: #acb693;
    }

    .icon_box2 .box {
        background-color: #e7a930;
    }

    .icon_box3 .box {
        background-color: #b19c87;
    }

    .box {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2.25rem 0;
        gap: 1.25rem;
    }

    svg {
        width: 3em;
        height: 3em;
    }

    .box_txt {
        color: #fff;
        font-size: 1.125rem;
        line-height: 1.5rem;
    }

    .icon_txt {
        margin-top: 1.5rem;
        font-size: 1rem;
        line-height: 1.75rem;
    }

    .icon_box1 .icon_txt  {
        color: #acb693;
    }

    .icon_box2 .icon_txt {
        color: #e7a930;
    }

    .icon_box3 .icon_txt {
        color: #b19c87;
    }

    span {
        font-size: 1.125rem;
        font-weight: 700;
        vertical-align: baseline;
    }
</style>