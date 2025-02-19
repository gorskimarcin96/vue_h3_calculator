import {createRouter, createWebHistory} from 'vue-router'
import DemonCalculator from "../components/DemonCalculator.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [{
        path: '/',
        redirect: to => ({path: '/demon-calculator'})
    }, {
        path: '/demon-calculator',
        name: 'Demon-calculator',
        component: DemonCalculator
    }],
    linkActiveClass: "btn-success text-light",
});

export default router
