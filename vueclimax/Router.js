import Vue from 'vue';
import Router from '../node_modules/vue-router';
import ClimbUebersicht from './views/ClimbUebersicht.vue';
import ClimbErstellen from './views/ClimbErstellen.vue';
import ClimbZeigen from './views/ClimbZeigen.vue';
import ClimbZeigen from './views/ClimbZeigen.vue';
import ClimbAendern from '/.views/ClimbAendern.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            redirect: '/climbUebersicht'
        },
        {
            path: '/climbUebersicht',
            name: 'climbUebersicht',
            component: ClimbUebersicht
        },
        {
            path: '/climbUebersicht/climbErstellen',
            name: 'climbErstellen',
            component: ClimbErstellen
        },
        {
            path: '/climbUebersicht/:id',
            name: 'climbZeigen',
            component: ClimbZeigen
        },
        {
            path: '/climbUebersicht/:id/climbAendern',
            name: 'climbAendern',
            component: ClimbAendern
        }
    ]

});