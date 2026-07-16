<template>
  <div id="app">
    <!-- 현재 라우트 경로에 맞는 컴포넌트(HomeView, CommunityView, ChatBotView 등)가 여기에 렌더링됩니다 -->
    <router-view />
  </div>
</template>

<style>
/* 전역 기본 폰트 및 배경 설정 */
body {
  margin: 0;
  font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
  background-color: #ffffff;
  -webkit-font-smoothing: antialiased;
}
</style>