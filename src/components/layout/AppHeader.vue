<script setup lang="ts">
import IconEmail from '@/components/icons/common/IconEmail.vue'
import IconPhone from '@/components/icons/common/IconPhone.vue'
import { snsLinks, gnbItems } from '@/constants/headerData'
</script>

<template>
  <!-- PC HEADER -->
  <header id="header">
    <div class="header_top">
      <div class="page_inner">
        <ul class="sns_wrap">
          <li v-for="sns in snsLinks" :key="sns.id" class="sns">
            <img :src="sns.icon" :alt="sns.alt">
          </li>
        </ul>

        <ul class="contact_wrap">
          <li class="contact">
            <i>
                <IconEmail class="contact_icon" />
            </i>
            <p class="txt">giun915@gmail.com</p>
          </li>

          <li class="contact">
            <IconPhone class="contact_icon" />
            <p class="txt">010-8984-2401</p>
          </li>
        </ul>
      </div>
    </div>

    <div class="header_bottom">
      <div class="page_inner">
        <h2 class="logo">
          <a href="/">
            <img src="/imgs/logo/logo.png" alt="로고" />
          </a>
        </h2>

        <ul class="gnb_wrap">
          <li v-for="item in gnbItems" :key="item.id" class="gnb">
            <a :href="item.href">{{ item.label }}</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped>
#header {
    box-shadow: 0 2px 2px #e3e3e3;
}
.header_top {
    border-bottom: 1px solid var(--border-color);
}

.page_inner {
    justify-content: space-between;
    align-items: center;
}

.header_top .page_inner {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}

.sns_wrap {
    display: flex;
    gap: 0.5rem;
}

.sns {
    width: 1.75rem;
}

.contact_wrap {
    display: flex;
    gap: 1.5rem;
}

.contact {
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

.contact i {
    font-size: 1.25rem;
}

.header_bottom .page_inner {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
}

.logo {
    width: 10rem;
}

.gnb_wrap {
    display: flex;
    gap: 2rem;
}
.gnb a {
    font-size: 1rem;
    transition: color 0.4s ease;
}

.gnb a:hover {
    color: #f8b126;
}
</style>