<template>
  <div class="container">
    <button @click="$router.push('/')" class="back-btn">← 홈으로 돌아가기</button>
    <div class="placeholder-box">
      <h2>👥 축제 톡톡 커뮤니티</h2>
      <p>여기서부터 다른 팀원이 커뮤니티 게시판을 개발할 예정입니다!</p>
    </div>
  </div>
</template>

<style scoped>
.container { max-width: 800px; margin: 40px auto; padding: 20px; }
.back-btn { background: none; border: none; color: #1a73e8; cursor: pointer; font-size: 1rem; margin-bottom: 20px; }
.placeholder-box { text-align: center; padding: 60px; background: #f8f9fa; border-radius: 16px; border: 2px dashed #dadce0; }
</style>