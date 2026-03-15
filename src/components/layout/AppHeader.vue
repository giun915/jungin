<script setup lang="ts">
import { ref } from 'vue'
import IconEmail from '@/components/icons/common/IconEmail.vue'
import IconPhone from '@/components/icons/common/IconPhone.vue'
import { snsLinks, gnbItems } from '@/constants/layout/headerData'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <!-- PC HEADER -->
  <header id="header">
    <div class="header_top">
      <div class="page_inner">
        <ul class="sns_wrap">
          <li v-for="sns in snsLinks" :key="sns.id" class="sns">
            <a
              :href="sns.href"
              target="_blank"
              rel="noopener"
              :aria-label="sns.alt"
            >
              <img :src="sns.icon" :alt="sns.alt">
            </a>
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
  <!-- PC HEADER -->
  <header id="mHeader">
    <div class="page_inner">
      <div class="content_wrap">
        <ul class="sns_wrap">
          <li v-for="sns in snsLinks" :key="sns.id" class="sns">
            <a
              :href="sns.href"
              target="_blank"
              rel="noopener"
              :aria-label="sns.alt"
            >
              <img :src="sns.icon" :alt="sns.alt">
            </a>
          </li>
        </ul>
        <h2 class="logo">
          <a href="/">
            <img src="/imgs/logo/logo.png" alt="로고" />
          </a>
        </h2>
        <button
          type="button"
          class="menu_btn"
          aria-label="모바일 메뉴 열기"
          @click="toggleMobileMenu"
          :class="{ active: isMobileMenuOpen }"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <ul class="gnb_wrap" :class="{ on: isMobileMenuOpen }">
        <li v-for="item in gnbItems" :key="item.id" class="gnb">
          <a :href="item.href">{{ item.label }}</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
#header {
  box-shadow: 0 2px 2px #e3e3e3;
}

#mHeader {
  display: none;
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

/* 반응형 */
@media (max-width: 768px) {
  #header {
    display: none;
  }

  #mHeader {
    display: block;
    z-index: 4;
  }

  .page_inner {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  .content_wrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 3;
    background-color: #fff;
  }

  .menu_btn {
    position: relative;
    width: 1.75rem;
    height: 1.25rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .menu_btn span {
    display: block;
    width: 100%;
    height: 3px;
    background: var(--main-color);

    transition: all 0.3s ease;
  }

  .menu_btn.active span:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
  }

  .menu_btn.active span:nth-child(2) {
    opacity: 0;
  }

  .menu_btn.active span:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
  }

  .gnb_wrap {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    padding: 1.5rem 1.5rem;
    box-sizing: border-box;
    background-color: #fff;
    z-index: 2;
    transition: top 0.4s ease;
    justify-content: space-between;
  }

  .gnb_wrap.on {
    top:79px;
  }
}

@media (max-width: 500px) {
  .sns {
    width: 1.5rem;
  }

  .logo {
    width: 8rem;
  }

  .menu_btn {
    width: 1.5rem;
    height: 1rem;
  }

  .menu_btn.active span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }

  .menu_btn.active span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }

  .gnb_wrap.on {
    top:73px;
  }

  .gnb a {
    font-size: 0.875rem
  }
}
</style>