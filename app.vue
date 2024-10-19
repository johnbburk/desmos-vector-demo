<template>
  <div>
    <div ref="calculator" style="width: 600px; height: 400px;"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const calculator = ref(null)
const { $desmos } = useNuxtApp()

onMounted(async () => {
  if (process.client && calculator.value) {
    const Desmos = await $desmos
    const desmosCalculator = Desmos.GraphingCalculator(calculator.value)
    // Use desmosCalculator as needed
    console.log('Desmos calculator initialized:', desmosCalculator)
  }
})
</script>
