import { createRouter, createWebHistory } from 'vue-router'
import Directory from '../pages/Directory.vue'
import AddNew from '../pages/AddNew.vue'
import ModifyEntry from '../pages/ModifyEntry.vue'
import ProfileView from '../modules/ProfileView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Directory', component: Directory },
        { path: '/person/:pid', name: 'Profile', component: ProfileView },
        { path: '/add', name: 'AddNew', component: AddNew },
        { path: '/modify/:pid', name: 'Modify', component: ModifyEntry }
    ]
})

export default router
