<template>
  <div class="search-container">
    <div class="search-box" @click="goToChatBot">
      <span class="search-icon">🔍</span>
      <input 
        type="text" 
        :placeholder="currentPlaceholder" 
        readonly
        class="search-input"
      />
      <button class="search-btn">질문하기</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const placeholders = [
  "광안리 놀러 갈 때 가 볼 축제 추천해 줘.",
  "부산 락 페스티벌 숙소 추천해줘.",
  "올해 여름 축제 일정 알려줘."
]

const currentPlaceholder = ref(placeholders[0])
let currentIndex = 0
let timer = null

onMounted(() => {
  timer = setInterval(() => {
    currentIndex = (currentIndex + 1) % placeholders.length
    currentPlaceholder.value = placeholders[currentIndex]
  }, 3000) // 3초마다 문구 순환
})

onUnmounted(() => {
  clearInterval(timer)
})

const goToChatBot = () => {
  router.push('/chatbot')
}
</script>

<style scoped>
.search-container {
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
}
.search-box {
  display: flex;
  align-items: center;
  background: #f1f3f4;
  border-radius: 30px;
  padding: 8px 16px;
  border: 1px solid #e0e0e0;
  cursor: pointer;
  transition: all 0.3s ease;
}
.search-box:hover {
  box-shadow: 0 1px 6px rgba(32,33,36,0.28);
  background: #ffffff;
}
.search-icon {
  margin-right: 10px;
  font-size: 1.1rem;
}
.search-input {
  border: none;
  background: transparent;
  outline: none;
  width: 100%;
  font-size: 1rem;
  color: #3c4043;
  cursor: pointer;
}
.search-btn {
  background: #1a73e8;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  white-space: nowrap;
}
.search-btn:hover {
  background: #1557b0;
}
</style>