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
    word-break: keep-all;
}

@media (max-width: 768px) {
    .section_txt {
        font-size: 1rem;
        line-height: 1.75rem;
    }
}

@media (max-width: 500px) {
    .section_txt {
        font-size: 0.875rem;
        line-height: 1.75rem;
    }
}
</style>