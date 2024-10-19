<template>
  <div class="left-tab-1">
    <h2>Left Tab 1 - Math Examples</h2>
    <p>Inline math: <span v-html="inlineMath"></span></p>
    <p>Display math:</p>
    <div v-html="displayMath"></div>
  </div>
</template>

<script>
import { ref, onMounted, nextTick } from 'vue'

export default {
  name: 'LeftTab1',
  setup() {
    const inlineMath = ref('$E = mc^2$')
    const displayMath = ref('\\[\n\\frac{d}{dx}\\left( \\int_{0}^{x} f(u)\\,du\\right)=f(x)\n\\]')
    const { $mathjax } = useNuxtApp()

    const renderMath = async () => {
      await nextTick()
      $mathjax.render(document.querySelector('.left-tab-1'))
    }

    onMounted(renderMath)

    return {
      inlineMath,
      displayMath,
      renderMath
    }
  }
}
</script>

<style scoped>
.left-tab-1 {
  padding: 20px;
}
</style>
