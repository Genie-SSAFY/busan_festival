<template>
  <div class="home-container">
    <div class="main-content-wrapper">
      
      <!-- 상단 영역: 하단 4*6 카드의 긴 세로 비율에 맞추어 자연스럽게 상단으로 정렬 유도 -->
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

      <!-- 하단 영역: 4*6 비율 카드 적용 및 최적화된 상단 배치 레이아웃 -->
      <section class="festival-section">
        <h2 class="festival-section-title">✨ 지금 주목받는 부산 축제</h2>
        <div class="festival-grid">
          
          <!-- 축제 카드 반복 구간 -->
          <div 
            v-for="(festival, index) in selectedFestivals" 
            :key="festival.contentid || index" 
            class="festival-card glass-panel text-gray-border"
          >
            <!-- 4:6 세로 비율 이미지 영역 -->
            <div class="card-image-placeholder">
              <img 
                v-if="festival.firstimage" 
                :src="festival.firstimage" 
                :alt="festival.title" 
                class="festival-img"
              />
              <span v-else>🌊 {{ festival.title }}</span>
            </div>
            
            <div class="card-info">
              <div class="card-title-row">
                <h3 class="festival-title-text">{{ festival.title }}</h3>
                <!-- 1. 오늘 날짜 기준 실시간 상태 배지 바인딩 -->
                <span 
                  :class="['status-tag', getFestivalStatus(festival).className]"
                >
                  {{ getFestivalStatus(festival).text }}
                </span>
              </div>
              <!-- 3. 주요 프로그램 첫 \n 이전 텍스트 맵핑 -->
              <p class="desc">{{ getShortProgram(festival) }}</p>
              <p class="location-text">📍 {{ festival.eventplace || festival.addr1 }}</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import ChatBotSearch from '../components/ChatBotSearch.vue'

const router = useRouter()
const selectedFestivals = ref([])

// 💡 2026년 7월 16일 기준 고정 객체화
const TODAY = new Date('2026-07-16')

// 제공해주신 신규 일정/프로그램 포함 백엔드 데이터 구조 매핑
const festivalData = {
  "region": "부산",
  "contentType": "축제공연행사",
  "contentTypeId": 15,
  "total": 72,
  "items": [
    { "addr1": "부산광역시 해운대구 APEC로 55 (우동)", "firstimage": "https://tong.visitkorea.or.kr/cms/resource/92/4077792_image2_1.jpg", "title": "2026 부산국제불교박람회", "contentid": "2644679", "eventstartdate": "20260806", "eventenddate": "20260809", "eventplace": "BEXCO 부산 벡스코 제1전시장(3홀)", "program": "- 주요 프로그램 : 주제전 / 명상문화전 및 명상 공예전 / 명상 예술전 / 선명상 체험전 / 발우공양 및 사찰음식전 / 무대 프로그램 / 체험 프로그램 등\n\n1. 주제전" },
    { "addr1": "부산광역시 수영구 광안해변로 219 (광안동)", "firstimage": "https://tong.visitkorea.or.kr/cms/resource/41/4065341_image2_1.jpg", "title": "2026 나이트레이스 인 부산", "contentid": "3498395", "eventstartdate": "20260801", "eventenddate": "20260801", "eventplace": "광안리 해수욕장 / 벡스코", "program": "1. 주요 프로그램 : 나이트레이스 (광안대교를 배경으로 하는 야간 러닝 이벤트)\n- 티켓 구매자에 한하여 참여 가능" },
    { "addr1": "부산광역시 해운대구 APEC로 55 (우동)", "firstimage": "https://tong.visitkorea.or.kr/cms/resource/57/4077757_image2_1.jpg", "title": "제48차 유네스코 세계유산위원회 특별공연 산화비 : HEXAGRAM 22", "contentid": "4077756", "eventstartdate": "20260723", "eventenddate": "20260724", "eventplace": "벡스코 오디토리움", "program": "- 주요 프로그램 : 공연\n- 부대 행사 및 프로그램" },
    { "addr1": "부산광역시 사상구 삼락동", "firstimage": "https://tong.visitkorea.or.kr/cms/resource/06/4040606_image2_1.jpg", "title": "부산국제록페스티벌", "contentid": "140799", "eventstartdate": "20261002", "eventenddate": "20261004", "eventplace": "삼락생태공원", "program": "1. 메인프로그램 : 부산국제록페스티벌\n2. 부대프로그램" },
    { "addr1": "부산광역시 동구 이순신대로 164 (초량동)", "firstimage": "https://tong.visitkorea.or.kr/cms/resource/70/4058670_image2_1.jpg", "title": "부산항축제", "contentid": "1007868", "eventstartdate": "20260619", "eventenddate": "20260620", "eventplace": "북항 친수공원 일원", "program": "개막행사, 부산항불꽃쇼, 부산항투어, 보트투어, 기타 체험·참여 프로그램 등" },
    { "addr1": "부산광역시 수영구 광안해변로 219 (광안동)", "firstimage": "https://tong.visitkorea.or.kr/cms/resource/10/4066810_image2_1.JPG", "title": "광안리어방축제", "contentid": "506545", "eventstartdate": "20260612", "eventenddate": "20260614", "eventplace": "광안리해변 및 수영사적공원 일원", "program": "1. 메인프로그램 : 뮤지컬어방, 경상좌수사행렬 퍼레이드, 어방민속마을\n2. 부대프로그램" },
    { "addr1": "부산광역시 해운대구 수영강변대로 85 (우동)", "firstimage": "https://tong.visitkorea.or.kr/cms/resource/37/4069137_image2_1.jpg", "title": "2026 부산나이트워크42K", "contentid": "2991394", "eventstartdate": "20260829", "eventenddate": "20260830", "eventplace": "APEC나루공원", "program": "- 주요 프로그램 : 수영강 및 온천천 코스 걷기 (8K·16K·24K·42K) / 워밍업 스트레칭 등\n- 부대 행사" },
    { "addr1": "부산광역시 수영구 민락동 110-19", "firstimage": "https://tong.visitkorea.or.kr/cms/resource/73/4070173_image2_1.jpg", "title": "2026 부산바다도서관", "contentid": "3497353", "eventstartdate": "20260613", "eventenddate": "20260705", "eventplace": "민락수변공원 일원", "program": "- 주요 프로그램 : 커뮤니티존(북스팟)\n- 부대 행사 및 프로그램" },
    { "addr1": "부산광역시 중구 용두산길 37-55 (광복동2가)", "firstimage": "https://tong.visitkorea.or.kr/cms/resource/73/4067473_image2_1.jpg", "title": "2026 용골 댄스 페스타", "contentid": "2952109", "eventstartdate": "20260620", "eventenddate": "20260620", "eventplace": "용두산공원 일원", "program": "- 주요 프로그램 : 청소년 댄스 경연대회\n- 부대 행사" },
    { "addr1": "부산광역시 해운대구 APEC로 55 (우동)", "firstimage": "https://tong.visitkorea.or.kr/cms/resource/26/4055726_image2_1.jpeg", "title": "세계유산위원회 대한민국관(K-Heritage House)", "contentid": "4055637", "eventstartdate": "20260720", "eventenddate": "20260729", "eventplace": "부산 벡스코 제1전시장 2B, 3", "program": "1. 유산의 과거·현재·미래\n-세계유산&유네스코관: 17개 세계유산" },
    { "addr1": "부산광역시 사하구 다대포 해수욕장", "firstimage": "http://tong.visitkorea.or.kr/cms/resource/58/3504958_image2_1.jpg", "title": "부산바다축제", "contentid": "142080", "eventstartdate": "20260807", "eventenddate": "20260813", "eventplace": "다대포 해수욕장 일원", "program": "1. 메인프로그램\n- 개막행사" },
    { "addr1": "부산광역시 해운대구 APEC로 30 (우동)", "firstimage": "https://tong.visitkorea.or.kr/cms/resource/66/4059066_image2_1.jpg", "title": "K-핸드메이드페어 부산 2026", "contentid": "2523149", "eventstartdate": "20260724", "eventenddate": "20260726", "eventplace": "벡스코 제2전시장", "program": "- 주요 프로그램 : 휴꾸존 기획존" },
    { "addr1": "부산광역시 해운대구 APEC로 30 (우동)", "firstimage": "", "title": "K-일러스트레이션페어 부산 2026", "contentid": "2704473", "eventstartdate": "20260724", "eventenddate": "20260726", "eventplace": "벡스코 제2전시장 A, B홀", "program": "- 주요 프로그램 : 일러스트레이션 관련 개인 및 기업 브랜드 전시 부스\n- 부대 행사" }
  ]
}

// YYYYMMDD 형태 문자열을 Date 객체로 파싱 변환
const parseDateString = (dateStr) => {
  if (!dateStr) return null
  const year = parseInt(dateStr.substring(0, 4))
  const month = parseInt(dateStr.substring(4, 6)) - 1
  const day = parseInt(dateStr.substring(6, 8))
  return new Date(year, month, day)
}

// 1. 디데이 상태 및 CSS 클래스 도출 핸들러
const getFestivalStatus = (festival) => {
  const start = parseDateString(festival.eventstartdate)
  const end = parseDateString(festival.eventenddate)
  
  if (!start || !end) return { text: '미정', className: 'bg-slate-200 text-slate-600' }
  
  // 시간 정규화 처리 (날짜 차이만 추출)
  const sDate = new Date(start.getFullYear(), start.getMonth(), start.getDate())
  const eDate = new Date(end.getFullYear(), end.getMonth(), end.getDate())
  const tDate = new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate())
  
  if (tDate >= sDate && tDate <= eDate) {
    return { text: '진행중', className: 'bg-emerald-100 text-emerald-700 font-extrabold' }
  } else if (tDate < sDate) {
    const diffTime = sDate.getTime() - tDate.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return { text: `D-${diffDays}`, className: 'bg-blue-100 text-blue-700 font-extrabold' }
  } else {
    return { text: '종료', className: 'bg-rose-100 text-gray-400' }
  }
}

// 3. 주요 프로그램 텍스트 필터링 (\n 기점 가공)
const getShortProgram = (festival) => {
  if (!festival.program) return '상세 프로그램 정보 준비 중입니다.'
  return festival.program.split('\n')[0]
}

onMounted(() => {
  const items = festivalData.items
  
  // 2. 오늘 기점 한 달 이내의 기간 조건 충족하는 필터링 로직 구현
  const oneMonthLater = new Date(TODAY)
  oneMonthLater.setMonth(TODAY.getMonth() + 1)
  
  const eligibleFestivals = items.filter(item => {
    const start = parseDateString(item.eventstartdate)
    const end = parseDateString(item.eventenddate)
    if (!start || !end) return false
    
    // 조건: 현재 진행 중이거나, 오늘 기점 한 달 이내에 시작하는 축제
    const isOngoing = (TODAY >= start && TODAY <= end)
    const isWithinOneMonth = (start >= TODAY && start <= oneMonthLater)
    
    return isOngoing || isWithinOneMonth
  })
  
  // 매칭 풀에서 무작위 2개 선별
  if (eligibleFestivals.length >= 2) {
    const shuffled = [...eligibleFestivals].sort(() => 0.5 - Math.random())
    selectedFestivals.value = shuffled.slice(0, 2)
  } else {
    selectedFestivals.value = eligibleFestivals
  }
})

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
  opacity: 0.3; 
  z-index: -1;
}

/* ✨ 공통 글래스모피즘 템플릿 */
.glass-panel {
  background: rgba(255, 255, 255, 0.55) !important;
  backdrop-filter: blur(14px) !important;
  -webkit-backdrop-filter: blur(14px) !important;
  box-shadow: 0 4px 24px 0 rgba(31, 38, 135, 0.02) !important;
}

/* 윤곽선 두께 2.25px 커스텀 고정 */
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

/* 상단 요소 정렬 배정 */
.hero-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  width: 100%;
  flex-grow: 1;
  margin-top: -20px; 
}

@media (max-width: 1024px) {
  .hero-section {
    flex-direction: column-reverse;
    text-align: center;
    gap: 20px;
  }
}

/* 좌측 텍스트/말풍선 영역 */
.left-content {
  flex: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5%; 
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

/* 말풍선 꼬리 디자인 */
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

/* 버튼 컨테이너 */
.button-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-left: -5%; 
}

/* 수다 떨기 버튼 스타일 */
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

/* 하단 축제 카드 영역 */
.festival-section {
  width: 100%;
  margin-top: -265px; 
  padding-bottom: 5px;
}

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

/* 4:6 세로 비율 이미지 플레이스홀더 규격 고수 */
.card-image-placeholder {
  width: 100%;
  height: 340px; 
  background: rgba(226, 232, 240, 0.7);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #64748b;
  font-size: 0.95rem;
  margin-bottom: 10px;
  overflow: hidden; 
}

.festival-img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
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
  margin-bottom: 6px;
}

.festival-title-text {
  font-size: 1.1rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
}

/* 동적 D-Day 상태 배지 스타일 */
.status-tag {
  font-size: 0.72rem;
  padding: 3px 10px;
  border-radius: 6px;
  white-space: nowrap;
}

.card-info .desc {
  font-size: 0.82rem;
  color: #475569;
  margin: 0 0 4px 0;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; 
}

.location-text {
  font-size: 0.78rem;
  color: #94a3b8;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>