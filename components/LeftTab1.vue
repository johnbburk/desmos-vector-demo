<template>
      <div class="left-tab-1">
        <h2>Left Tab 1 - Math Examples</h2>
        <p>Inline math: <span v-html="inlineMath"></span></p>
        <p>Display math:</p>
        <div v-html="displayMath"></div>
        <button @click="addGraphToCalculator">Add Graph to Calculator</button>
      </div>
    </template>
    
    <script setup>
    import { ref, onMounted } from 'vue'
    import { useDesmos } from '~/composables/useDesmos'
    
    const inlineMath = ref('$E = mc^2$')
    const displayMath = ref('\\[\n\\frac{d}{dx}\\left( \\int_{0}^{x} f(u)\\,du\\right)=f(x)\n\\]')
    const { $mathjax } = useNuxtApp()
    const { calculator } = useDesmos()
    
    const renderMath = async () => {
      await nextTick()
      $mathjax.render(document.querySelector('.left-tab-1'))
    }
    
    const addGraphToCalculator = () => {
      console.log('addGraphToCalculator', calculator.value)
      if (calculator.value) {
        calculator.value.setExpression({ id: 'graph1', latex: 'y=x^2' })
      } else {
        console.error('Calculator not initialized')
      }
    }
    
    onMounted(renderMath)
    </script>
    
    <style scoped>
    .left-tab-1 {
      padding: 20px;
    }
    </style>