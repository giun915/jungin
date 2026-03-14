<script setup lang="ts">

type Props = {
    title: string
    label: string
    desc: string[]
    cardImage: string
    cardAlt: string
}

defineProps<Props>()

</script>

<template>
    <section class="sub_hero_banner">
        <h5 class="blind">서브페이지 히어로 배너</h5>
        <img :src="cardImage" :alt="cardAlt">
        <div class="banner_badge">
            <div class="txt_wrap">
                <h4 class="title">
                    {{ title }}
                </h4>
                <p class="label">
                    {{ label }}
                </p>
                <p class="desc">
                    <template v-for="(line, index) in desc" :key="index">
                        {{ line }}
                        <br v-if="index !== desc.length - 1">
                    </template>
                </p>
            </div>
        </div>
    </section>
</template>

<style scoped>
.sub_hero_banner {
    display: flex;
    justify-content: center;
    align-items: center;
}

.sub_hero_banner:before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.11);
    z-index: 2;
}

img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.banner_badge {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20rem;
    height: 20rem;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 100%;
    text-align: center;
    color: #fff;
    z-index: 3;
    margin: 2.5rem 0;
}

.txt_wrap {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
}

.txt_wrap:before, .txt_wrap:after {
    content: "";
    position: absolute;
    height: 1px;
    background-color: #fff;
}

.txt_wrap:before {
    top: -1.5rem;
    width: 12rem;
}

.txt_wrap:after {
    bottom: -1.5rem;
    width: 8rem;
}

h4 {
    font-size: 1.75rem;
    text-shadow: 0 0 0.75rem var(--shadow-color);
}

.label {
    font-size: 1.25rem;
}

.desc {
    font-size: 1rem;
    line-height: 1.5rem;
}

@media (max-width: 768px) {
    .banner_badge {
        width: 18rem;
        height: 18rem;
    }

    h4 {
        font-size: 1.5rem;
    }

    .label {
        font-size: 1.125rem;
    }
}
</style>