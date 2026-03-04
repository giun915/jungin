<script setup lang="ts">
defineProps<{
    lines: string[]
}>()
</script>

<template>
    <p class="section_txt">
        <template v-for="(line, index) in lines" :key="index">
            {{ line }}
            <br v-if="index !== lines.length - 1" />
        </template>
    </p>
</template>

<style scoped>
.section_txt {
    text-align: center;
    font-size: 1.125rem;
    line-height: 2rem;
}
</style>