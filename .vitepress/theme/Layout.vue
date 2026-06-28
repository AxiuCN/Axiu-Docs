<template>
  <!-- 背景（对齐主站 axiu.uno） -->
  <div class="bg-glow"></div>
  <div class="bg-grid"></div>
  <Layout>
    <template #layout-bottom>
      <footer class="VPFooter custom-footer">
        <div class="footer-content">
          <span>© 2026 阿修Axiu</span>
          <span class="footer-divider">·</span>
          <span>Axiu Network</span>
          <span class="footer-divider">·</span>
          <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">闽ICP备2026017611号-1</a>
        </div>
      </footer>
    </template>
    <template #not-found>
      <NotFound />
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout, NotFound } = DefaultTheme
</script>
