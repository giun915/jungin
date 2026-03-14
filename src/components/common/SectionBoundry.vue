<template>
    <div class="section_boundry">
        <span class="line"></span>
        <div class="dots">
            <span class="dot green"></span>
            <span class="dot yellow"></span>
            <span class="dot brown"></span>
        </div>
        <span class="line"></span>
    </div>
</template>

<style scoped>
.section_boundry {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.line {
  flex: 1;
  height: 1px;
  background: #333;
  max-width: 7.5rem;
}

.dots {
  display: flex;
  gap: 0.625rem;
}

.dot {
  width: 0.75rem;
  height: 0.75rem;
  border: 0.25rem solid #c5c5c5;
  border-radius: 0.25rem;
  background: transparent;
}

.green {
  border-color: #acb693;
}

.yellow {
  border-color: #e7a930;
}

.brown {
  border-color: #b19c87;
}

@media (max-width: 768px) {
  .dot {
    width: 0.75rem;
    height: 0.75rem;
  }
}

@media (max-width: 500px) {
  .line {
    max-width: 5.5rem;
  }
}
</style>