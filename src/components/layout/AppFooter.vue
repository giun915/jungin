<script setup lang="ts">
import { footerContactList } from '@/constants/layout/footerData'
</script>

<template>
    <footer id="footer">
        <div class="page_inner">
            <ul class="info_list">
                <li v-for="(item, index) in footerContactList" :key="index" class="info" :class="item.className">
                    <i class="icon">
                        <component :is="item.icon" />
                    </i>
                    <p class="txt">
                        <template v-for="(line, i) in item.text" :key="i">
                            {{ line }}
                            <br v-if="i !== item.text.length - 1" />
                        </template> 
                    </p>
                </li>
            </ul>
        </div>
        <p class="copyright">
            Copyright 2018 © 정인Co. Ltd. All rights reserved.
        </p>
    </footer>
</template>

<style scoped>
#footer {
    width: 100%;
    background: #333333;
    box-shadow: inset 0px 20px 25px 10px rgba(0, 0, 0, 0.3);
}
.page_inner {
    flex-direction: column;
}
.info_list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 3rem 0 1.5rem;
    row-gap: 3rem;
}
.info {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #adadad;
    text-align: center;
    gap: 1rem;
    padding: 0 0.25rem;
    word-break: keep-all;
}

svg {
    width: 2.5rem;
    height: 2.5rem;
}

.txt {
    font-size: 1rem;
    line-height: 1.5rem;
}

.copyright {
    width: 100%;
    text-align: center;
    padding: 1rem 0;
    border-top: 1px solid #777;
    color: #fff;
}

@media (max-width: 768px) {
    .info_list {
            grid-template-columns: repeat(3, 1fr);
    }

    svg {
        width: 1.75rem;
        height: 1.75rem;
    }
    .txt {
        font-size: 0.875rem;
        line-height: 1.25rem;
    }
}
</style>