<template>
  <div class="home-container">
    <div class="main-content-wrapper">
      
      <!-- 상단 영역: 화면 기준 가로/세로 완벽한 정중앙 정렬 배치의 중심 -->
      <section class="hero-section">
        
        <!-- 왼쪽 콘텐츠 세로 배열 (우측으로 5% 이동 레이아웃 반영) -->
        <div class="left-content">
          <!-- 메인 타이틀 -->
          <h1 class="main-title">축제, 어디까지 가는 거예요?</h1>
          
          <!-- 기존보다 1.5배 굵어진 회색 윤곽선 + 곡선형 말풍선 꼬리 -->
          <div class="speech-bubble-container">
            <div class="speech-bubble glass-panel text-gray-border">
              <ChatBotSearch />
              <!-- 캐릭터 쪽 모서리가 강조된 자연스러운 말풍선 꼬리 -->
              <div class="bubble-tail text-gray-border"></div>
            </div>
          </div>

          <!-- 기존보다 1.5배 굵어진 회색 윤곽선 적용 오늘의 인기글 영역 -->
          <div class="popular-posts-box glass-panel text-gray-border">
            <div class="posts-header">
              <span class="live-badge">LIVE</span>
              <span class="posts-title">오늘의 인기글 🔥</span>
            </div>
            <div class="posts-carousel-placeholder">
              <p class="placeholder-text">💬 광안리 드론쇼 명당 실시간 공유합니다! (조원 코드 연동 영역)</p>
            </div>
          </div>

          <!-- 현재 정렬 상태에서 왼쪽으로 5% 이동된 수다 떨기 버튼 -->
          <div class="button-container">
            <button class="community-tag-btn" @click="goToPage('/community')">
              👥 시민들과 수다 떨기
            </button>
          </div>
        </div>

        <!-- 오른쪽 캐릭터 이미지 영역 -->
        <div class="right-content">
          <div class="character-wrapper">
            <img src="/char-busan.webp" alt="부산 축제 마스코트 캐릭터" class="character-img" />
          </div>
        </div>
      </section>

      <!-- 하단 영역: 폰트 1.2배 확대 및 기존보다 10% 더 상단으로 밀어올린 축제 카드 섹션 -->
      <section class="festival-section">
        <!-- 1. 폰트 크기 1.2배 상향 적용 완료 -->
        <h2 class="festival-section-title">✨ 지금 주목받는 부산 축제</h2>
        <div class="festival-grid">
          
          <!-- 축제 카드 1 -->
          <div class="festival-card glass-panel text-gray-border">
            <div class="card-image-placeholder">🌊 FESTIVAL IMAGE 01</div>
            <div class="card-info">
              <div class="card-title-row">
                <h3>부산 락 페스티벌</h3>
                <span class="date-tag">D-7</span>
              </div>
              <p class="desc">삼락생태공원을 뜨겁게 달굴 음악의 향연</p>
            </div>
          </div>
          
          <!-- 축제 카드 2 -->
          <div class="festival-card glass-panel text-gray-border">
            <div class="card-image-placeholder">🎆 FESTIVAL IMAGE 02</div>
            <div class="card-info">
              <div class="card-title-row">
                <h3>광안리 M 드론 라이트쇼</h3>
                <span class="date-tag">이번 주말</span>
              </div>
              <p class="desc">매주 토요일 밤 펼쳐지는 드론 드로잉</p>
            </div>
          </div>

        </div>
      </section>

    </div>
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
/* 전체 레이아웃 (스크롤 절대 방지 고정) */
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  padding: 10px 40px;
  font-family: 'Pretendard', sans-serif;
  position: relative;
  overflow: hidden;
}

.home-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.45;
  z-index: -1;
}

/* ✨ 공통 글래스모피즘 템플릿 */
.glass-panel {
  background: rgba(255, 255, 255, 0.55) !important;
  backdrop-filter: blur(14px) !important;
  -webkit-backdrop-filter: blur(14px) !important;
  box-shadow: 0 4px 24px 0 rgba(31, 38, 135, 0.02) !important;
}

/* 윤곽선 두께 기존 1.5px에서 정확히 1.5배 올린 2.25px 커스텀 고정 */
.text-gray-border {
  border: 2.25px solid #dee2e6 !important;
}

/* 메인 구조 콘텐트 래퍼 */
.main-content-wrapper {
  max-width: 1200px; 
  width: 100%;
  height: 98%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 1;
}

/* 상단 요소 전체 정중앙 배치 */
.hero-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  width: 100%;
  flex-grow: 1;
}

@media (max-width: 1024px) {
  .hero-section {
    flex-direction: column-reverse;
    text-align: center;
    gap: 25px;
  }
}

/* 좌측 텍스트/말풍선 영역 (우측으로 5% 배율 인덴트 고정) */
.left-content {
  flex: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5%; 
}

@media (max-width: 1024px) {
  .left-content {
    padding-left: 0;
  }
}

/* 타이틀 스타일 */
.main-title {
  font-size: 30pt; 
  font-weight: 900;
  color: #1a73e8;
  margin-top: 0px;
  margin-bottom: 30px; 
  letter-spacing: -0.5px;
  text-align: center;
  line-height: 1.2;
}

/* 말풍선 컨테이너 */
.speech-bubble-container {
  width: 100%;
  margin-bottom: 24px; 
}

.speech-bubble {
  position: relative;
  border-radius: 24px;
  padding: 14px 24px;
  width: 100%;
  box-sizing: border-box;
}

/* 윤곽선 두께가 2.25px로 두꺼워진 말풍선 꼬리 디자인 */
.bubble-tail {
  position: absolute;
  top: 50%;
  right: -11.2px; 
  transform: translateY(-50%) rotate(45deg);
  width: 19.2px;  
  height: 19.2px; 
  background: rgba(255, 255, 255, 0.55); 
  border-top: 2.25px solid #dee2e6 !important; 
  border-right: 2.25px solid #dee2e6 !important;
  border-bottom: transparent !important;
  border-left: transparent !important;
  border-radius: 3.5px; 
  z-index: 2;
}

@media (max-width: 1024px) {
  .bubble-tail {
    top: -11.2px;
    right: 50%;
    transform: translateX(50%) rotate(-45deg);
    border-top: 2.25px solid #dee2e6 !important;
    border-left: 2.25px solid #dee2e6 !important;
    border-right: transparent !important;
    border-bottom: transparent !important;
  }
}

/* 오늘의 인기글 박스 */
.popular-posts-box {
  border-radius: 20px;
  padding: 16px 25px;
  margin-bottom: 24px; 
  text-align: left;
}

.posts-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 6px;
}

.live-badge {
  background: #ea4335;
  color: white;
  font-size: 0.75rem;
  font-weight: 800;
  padding: 2px 7px;
  border-radius: 5px;
}

.posts-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: #334155;
}

.posts-carousel-placeholder {
  min-height: 70px; 
  display: flex;
  align-items: center;
}

.placeholder-text {
  margin: 0;
  font-size: 1rem;
  color: #475569;
  font-weight: 600;
}

/* 부모 플렉스 상자 내부에서 왼쪽으로 5% 마진을 당겨 좌측 이동 보정 */
.button-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-left: -5%; 
}

@media (max-width: 1024px) {
  .button-container {
    margin-left: 0;
  }
}

/* #dee2e6 색상 솔리드 버튼 스타일 */
.community-tag-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #dee2e6; 
  border: 2.25px solid #dee2e6; 
  padding: 8px 24px;
  border-radius: 20px;
  font-size: 0.85rem; 
  font-weight: 800;
  color: #334155;
  cursor: pointer;
  transition: all 0.2s ease;
}

.community-tag-btn:hover {
  color: #1a73e8;
  background: #cbd5e1; 
  border-color: #cbd5e1;
}

/* 오른쪽 마스코트 캐릭터 영역 */
.right-content {
  flex: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
}

.character-img {
  width: 480px; 
  height: auto;
  object-fit: contain;
}

/* 2. 하단 축제 카드 영역: 기존 위치(-240px)보다 10% 추가 상단화 적용 (-265px) */
.festival-section {
  width: 100%;
  margin-top: -265px; 
  padding-bottom: 5px;
}

/* 1. 타이틀 폰트 크기 기존 1.25rem에서 1.2배 늘어난 1.5rem으로 고도화 */
.festival-section-title {
  font-size: 1.5rem;
  font-weight: 900;
  color: #1e293b;
  margin-bottom: 12px;
  text-align: left;
}

.festival-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.festival-card {
  border-radius: 24px;
  padding: 12px;
  transition: transform 0.2s;
}

.festival-card:hover {
  transform: translateY(-2px);
}

/* 280px 고유 카드 비율 유지 */
.card-image-placeholder {
  width: 100%;
  height: 280px; 
  background: rgba(226, 232, 240, 0.7);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #64748b;
  font-size: 0.95rem;
  margin-bottom: 10px;
}

.card-info {
  text-align: left;
  padding: 2px 4px;
}

.card-title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 4px;
}

.card-title-row h3 {
  font-size: 1.1rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0;
}

.date-tag {
  background: rgba(224, 242, 254, 0.9);
  color: #0369a1;
  font-size: 0.72rem;
  font-weight: 800;
  padding: 3px 8px;
  border-radius: 6px;
  white-space: nowrap;
}

.card-info .desc {
  font-size: 0.82rem;
  color: #475569;
  margin: 0;
  line-height: 1.4;
}
</style>