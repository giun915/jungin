import {createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import MainView from '@/views/MainView.vue';

const routes: RouteRecordRaw[] = [{ path: "/", name: "main", component: MainView}];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to) {
        if (to.hash) return {el: to.hash, behavior: "smooth"}
        return {top: 0}
    },
})

export default router