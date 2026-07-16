<template>
  <div class="home-container">
    <!-- 캐릭터 및 타이틀 헤더 -->
    <header class="hero-section">
      <div class="character-wrapper">
        <!-- public 폴더에 다운받은 이미지를 넣고 연결합니다 -->
        <img src="/char-busan.webp" alt="부산 축제 캐릭터" class="character-img" />
      </div>
      <h1 class="main-title">축제 어디까지 가는 거예요?</h1>
      <p class="sub-title">부산 시민과 여행자를 위한 똑똑한 축제 가이드</p>
    </header>

    <!-- 제미나이 감성 검색 영역 -->
    <section class="search-section">
      <ChatBotSearch />
    </section>

    <!-- 핵심 바로가기 카드 영역 -->
    <section class="menu-grid">
      <!-- 1. 커뮤니티 바로가기 카드 -->
      <div class="menu-card" @click="goToPage('/community')">
        <div class="card-icon">👥</div>
        <div class="card-content">
          <h3>축제 톡톡 (커뮤니티)</h3>
          <p>부산 시민들과 실시간 축제 후기 및 꿀팁을 나누어 보세요.</p>
        </div>
        <span class="arrow-icon">→</span>
      </div>

      <!-- 2. AI 챗봇 바로가기 카드 -->
      <div class="menu-card highlighted" @click="goToPage('/chatbot')">
        <div class="card-icon">✨</div>
        <div class="card-content">
          <h3>축제 AI 비서</h3>
          <p>일정부터 맛집, 동선까지 제미나이 기반 챗봇에게 물어보세요.</p>
        </div>
        <span class="arrow-icon">→</span>
      </div>
    </section>

    <!-- 미리보기용 부산 축제 리스트 카드 -->
    <section class="festival-preview">
      <h2>🔥 지금 주목받는 부산 축제</h2>
      <div class="festival-grid">
        <div class="festival-card">
          <span class="tag">인기</span>
          <h3>부산 락 페스티벌</h3>
          <p>삼락생태공원을 뜨겁게 달굴 음악의 향연</p>
        </div>
        <div class="festival-card">
          <span class="tag">여름</span>
          <h3>광안리 M 드론 라이트쇼</h3>
          <p>매주 토요일 밤 펼쳐지는 광안대교 앞 드론 드로잉</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import ChatBotSearch from '../components/ChatBotSearch.vue'

const router = useRouter()

const goToPage = (path) => {
  router.push(path)
}
</script>

<style scoped>
.home-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Pretendard', sans-serif;
  color: #1f1f1f;
}

.hero-section {
  text-align: center;
  margin-bottom: 40px;
}

.character-wrapper {
  margin-bottom: 16px;
}

.character-img {
  width: 150px;
  height: 150px;
  object-fit: contain;
  border-radius: 50%;
  background: #f8f9fa;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
}

.character-img:hover {
  transform: scale(1.05);
}

.main-title {
  font-size: 2.2rem;
  font-weight: 800;
  background: linear-gradient(45deg, #1a73e8, #4285f4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
}

.sub-title {
  color: #5f6368;
  font-size: 1rem;
}

.menu-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 40px;
}

@media (max-width: 600px) {
  .menu-grid {
    grid-template-columns: 1fr;
  }
}

.menu-card {
  display: flex;
  align-items: center;
  padding: 24px;
  background: #f8f9fa;
  border-radius: 16px;
  border: 1px solid #e9ecef;
  cursor: pointer;
  transition: all 0.25s ease;
  position: relative;
}

.menu-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.06);
}

.menu-card.highlighted {
  background: linear-gradient(135deg, #e8f0fe 0%, #ffffff 100%);
  border-color: #d2e3fc;
}

.card-icon {
  font-size: 2rem;
  margin-right: 16px;
}

.card-content h3 {
  margin: 0 0 6px 0;
  font-size: 1.2rem;
  font-weight: 700;
}

.card-content p {
  margin: 0;
  font-size: 0.9rem;
  color: #5f6368;
  line-height: 1.4;
}

.arrow-icon {
  position: absolute;
  right: 20px;
  font-weight: bold;
  color: #1a73e8;
  font-size: 1.2rem;
  transition: transform 0.2s ease;
}

.menu-card:hover .arrow-icon {
  transform: translateX(5px);
}

/* 아래는 데코레이션용 임시 섹션 */
.festival-preview {
  margin-top: 50px;
}
.festival-preview h2 {
  font-size: 1.3rem;
  margin-bottom: 16px;
}
.festival-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.festival-card {
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #f1f3f4;
  background: white;
}
.tag {
  background: #e8f0fe;
  color: #1a73e8;
  padding: 4px 8px;
  font-size: 0.75rem;
  border-radius: 4px;
  font-weight: bold;
}
.festival-card h3 {
  margin: 8px 0 4px 0;
  font-size: 1.1rem;
}
.festival-card p {
  margin: 0;
  font-size: 0.85rem;
  color: #70757a;
}
</style>