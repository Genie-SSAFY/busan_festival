import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import CommunityView from './views/CommunityView.vue'
import ChatBotView from './views/ChatBotView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/community', name: 'Community', component: CommunityView },
  { path: '/chatbot', name: 'ChatBot', component: ChatBotView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router