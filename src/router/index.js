import AppLayout from '@/layouts/AppLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/register',
            name: 'register',
            component: () => import('@/view/guest/RegisterView.vue'),
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/view/guest/LoginView.vue'),
        },
        {
            path: '/dashboard',
            component: AppLayout,
            children: [
                {
                    path: '/feed',
                    name: 'feed',
                    component: () => import('@/view/authenticated/FeedView.vue'),
                },
                {
                    path: '/communities',
                    name: 'communities',
                    component: () => import('@/view/authenticated/CommunitiesView.vue'),
                },
                {
                    path: '/assignments',
                    name: 'assignments',
                    component: () => import('@/view/authenticated/AssignmentsView.vue'),
                },
                {
                    path: '/events',
                    name: 'events',
                    component: () => import('@/view/authenticated/EventsView.vue'),
                },
                {
                    path: '/chats',
                    name: 'chats',
                    component: () => import('@/view/authenticated/ChatsView.vue'),
                },
                 {
                    path: '/profile',
                    name: 'profile',
                    component: () => import('@/view/authenticated/ProfileView.vue'),
                },
            ],
        },
    ],
})

export default router
