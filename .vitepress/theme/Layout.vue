<template>
  <Layout>
    <template #layout-bottom>
      <footer class="VPFooter custom-footer">
        <div class="container">
          <p class="message" v-html="footerMsg"></p>
        </div>
      </footer>
    </template>
    <template #not-found>
      <NotFound />
    </template>
  </Layout>
</template>

<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

const { Layout, NotFound } = DefaultTheme
const { theme } = useData()

const footerMsg = computed(() => {
  const msg = theme.value.footer?.message || ''
  return msg.replace(
    /闽ICP备\d+号-\d+/,
    '<a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener" style="color:inherit;text-decoration:none;">$&</a>'
  )
})
</script>
