<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import IconArrow from '../icons/common/IconArrow.vue'

const isVisible = ref(false)

const toggleButton = () => {
  isVisible.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', toggleButton)
  toggleButton()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', toggleButton)
})
</script>

<template>
  <button
    v-show="isVisible"
    type="button"
    class="button_back_top"
    @click="scrollToTop"
    aria-label="맨 위로 이동"
  >
    <IconArrow />
  </button>
</template>

<style scoped>
.button_back_top {
    position: fixed;
    bottom: 3rem;
    right: calc((100vw - 1000px) / 2 - 5rem);
    width: 2.5rem;
    height: 2.5rem;
    background: #191919b3;
    display: flex;
    justify-content: center;
    align-items: center;
}

svg {
    width: 0.75rem;
    color: var(--main-color);
    transform: rotate(-90deg);
}

/* 반응형 */
@media (max-width: 1200px) {
  .button_back_top {
    right: 1rem;
  }
}

</style>