<script setup lang="ts">
import type { ProcessStep } from '@/constants/main/aboutData'

defineProps<{
  steps: ProcessStep[]
}>()
</script>

<template>
    <div class="process_wrap">
        <img src="/imgs/main/process_back.jpg" alt="프로세스 배경이미지">
        <div class="step_area">
            <div class="page_inner">
                <ul class="step_wrap">
                    <li v-for="step in steps" :key="step.id" class="step">
                        <p>
                            {{ step.id }}.
                            <template v-for="(line, i) in step.text" :key="i">
                                {{ line }}
                                <br v-if="i !== step.text.length - 1"/>
                            </template>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
.process_wrap {
    position: relative;
}

.step_area {
    position: absolute;
    display: flex;
    align-items: center;
    top: 0;
    width: 100%;
    height: 100%;
}

.step_wrap {
  --gap-x: 5rem;
  --gap-y: 5rem;

  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  column-gap: var(--gap-x);
  row-gap: var(--gap-y);
}

.step {
  position: relative;
  width: 100%;
  aspect-ratio: 210 / 165; 
}

p {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  border: 2px solid #fff;
  border-radius: 1rem;
  box-sizing: border-box;
  line-height: 1.5rem;
  font-size: 1rem;
}

p::after {
  content: '';
  position: absolute;
  inset: 0.75rem;
  border: 2px solid rgba(255, 255, 255, 0.9);
  border-radius: 0.75rem;
  pointer-events: none;
}

.process_wrap .step:nth-child(1) { grid-column: 1; grid-row: 1; }
.process_wrap .step:nth-child(2) { grid-column: 2; grid-row: 1; }
.process_wrap .step:nth-child(3) { grid-column: 3; grid-row: 1; }
.process_wrap .step:nth-child(4) { grid-column: 4; grid-row: 1; }

.process_wrap .step:nth-child(5) { grid-column: 4; grid-row: 2; }
.process_wrap .step:nth-child(6) { grid-column: 4; grid-row: 3; }

.process_wrap .step:nth-child(7) { grid-column: 3; grid-row: 3; }
.process_wrap .step:nth-child(8) { grid-column: 2; grid-row: 3; }

.process_wrap .step::after {
  content: '';
  position: absolute;
  z-index: 1;
  background: #fff;
}

.process_wrap .step:nth-child(1)::after,
.process_wrap .step:nth-child(2)::after,
.process_wrap .step:nth-child(3)::after {
  top: 50%;
  left: 100%;
  width: var(--gap-x);
  height: 1px;
}

.process_wrap .step:nth-child(4)::after,
.process_wrap .step:nth-child(5)::after {
  left: 50%;
  width: 1px;
  height: var(--gap-y);
}

.process_wrap .step:nth-child(6)::after,
.process_wrap .step:nth-child(7)::after {
  top: 50%;
  right: 100%;
  width: var(--gap-x);
  height: 1px;
}

.process_wrap .step:nth-child(8)::after {
  content: none;
}
</style>