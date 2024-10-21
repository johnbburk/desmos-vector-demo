<template>
  <div class="right-tab-1">
    <div id="calculator-container" class="content">
      <div id="calculator" ref="calculatorRef" class="calculator"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, markRaw } from 'vue'
import { useDesmos } from '~/composables/useDesmos'

const calculatorRef = ref(null)
const { $desmos } = useNuxtApp()
const { setCalculator } = useDesmos()

onMounted(async () => {
  if (process.client && calculatorRef.value) {
    try {
      const Desmos = await $desmos.load()
      const calculator = Desmos.Geometry(calculatorRef.value, {
        settingsMenu: false,
        expressions: false,
        expressionsTopbar: false,
        zoomButtons: false,
      })
      setCalculator(markRaw(calculator))
    } catch (error) {
      console.error('Error initializing Desmos:', error)
    }
  }
})
</script>

<style scoped>
.right-tab-1 {
  padding: 20px;
}
.content {
  height: 400px;
}
.calculator {
  height: 100%;
}
</style>
