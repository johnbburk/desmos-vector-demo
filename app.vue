<template>
  <Header />
  <Background />
  <div>
    <NuxtPage />
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
    console.log('Desmos calculator initialized:', desmosCalculator)
  }
})
</script>
