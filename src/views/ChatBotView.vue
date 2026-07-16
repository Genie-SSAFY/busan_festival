<template>
  <div class="container">
    <button @click="$router.push('/')" class="back-btn">← 홈으로 돌아가기</button>
    <div class="placeholder-box">
      <h2>✨ 축제 AI 비서 (챗봇)</h2>
      <p>여기서부터 다른 팀원이 제미나이 연동 챗봇 UI를 개발할 예정입니다!</p>
    </div>
  </div>
</template>

<style scoped>
/* 커뮤니티 뷰와 동일한 임시 스타일 */
.container { max-width: 800px; margin: 40px auto; padding: 20px; }
.back-btn { background: none; border: none; color: #1a73e8; cursor: pointer; font-size: 1rem; margin-bottom: 20px; }
.placeholder-box { text-align: center; padding: 60px; background: #e8f0fe; border-radius: 16px; border: 2px dashed #1a73e8; }
</style>