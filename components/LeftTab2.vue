<template>
  <div class="left-tab-2">
    <h2>Adding the negative vector</h2>
    <p>We can add the  \(-\vec{b}\) vector by moving it to the tip of the  \(\vec{a}\) vector. Remember that we need to keep the length and direction of the vector the same.</p>
                <div class="button-container">
                    <button id="moveBButton" @click="moveNegativeBVector()">Move \(-\vec{b}\)</button>
                    </div>
                    <p v-show="hasBmoved">Now the sum the vectors \(\vec{a}\)  and \(-\vec{b}\) is just an arrow pointing from the tail of \(\vec{a}\)  to the tip of \(-\vec{b}\).  </p>
 <button v-show="hasBmoved" id="drawResultantButton" @click="drawResultantVector()">Draw \(\vec{a}-\vec{b}\)</button>
 <p id="closing"  v-show="hasBmoved">
                  And that's it! You can now visualize vector subtraction in terms of addition. 
                </p>
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
}
</style>
