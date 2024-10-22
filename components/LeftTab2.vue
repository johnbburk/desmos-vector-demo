<template>
  <div class="left-tab-2">
    <h2 class="title">Adding the negative vector</h2>
    <div class="content">
      <p>We can add the \(-\vec{b}\) vector by moving it to the tip of the \(\vec{a}\) vector. Remember that we need to keep the length and direction of the vector the same.</p>
      
      <div class="button-container">
        <button id="moveBButton" @click="moveNegativeBVector()">Move \(-\vec{b}\)</button>
      </div>
      
      <p v-show="hasBmoved">Now the sum of the vectors \(\vec{a}\) and \(-\vec{b}\) is just an arrow pointing from the tail of \(\vec{a}\) to the tip of \(-\vec{b}\).</p>
      
      <div class="button-container" v-show="hasBmoved">
        <button id="drawResultantButton" @click="drawResultantVector()">Draw \(\vec{a}-\vec{b}\)</button>
      </div>
      
      <p id="closing" v-show="hasBmoved" class="explanation">
        And that's it! You can now visualize vector subtraction in terms of addition.
      </p>
    </div>
  </div>
</template>

<script setup>
  import { useDesmos } from '~/composables/useDesmos'
  import { useTabSwitcher } from '~/composables/useTabSwitcher'

  import { ref, onMounted, nextTick } from 'vue'
  const { $mathjax } = useNuxtApp()
  const { calculator, waitForCalculator, moveNegativeBToA, drawResultant } = useDesmos()
  const hasBmoved = ref(false)


  function moveNegativeBVector() {
    moveNegativeBToA()
    hasBmoved.value = true
  }

  function drawResultantVector() {
    drawResultant()
  }

    const renderMath = async () => {
      await nextTick()
      const elements = document.querySelectorAll('.left-tab-2')
      for (const element of elements) {
        await $mathjax.render(element)
      }
    }

    const initializeCalculator = async () => {
      const calculator = await waitForCalculator()
      
    }

    onMounted(async () => {
      await initializeCalculator()
      renderMath()
    })


</script>

<style scoped>
.left-tab-2 {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.title {
  font-size: 1.8em;
  margin-bottom: 0.8em;
  color: #ffffff;
}

.content {
  line-height: 1.6;
  color: #ffffff;
}

p {
  margin-bottom: 1em;
}

.button-container {
  margin: 1.5em 0;
}

.explanation {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 1em;
  border-radius: 5px;
  margin-top: 1em;
}

button {
  padding: 0.5em 1em;
  font-size: 1em;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}
</style>
