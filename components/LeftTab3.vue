<template>
  <div class="left-tab-3">
    <h2 class="title">Test Your Understanding</h2>
    <div class="content">
      <p>Now, let's test your understanding of vector subtraction.</p>
      
      <div class="question-container">
        <!-- Questions will be added here -->
      </div>
      
\      
      <p id="feedback" v-show="showFeedback" class="feedback">
        {{ feedbackMessage }}
      </p>
   
      <button id="nextButton" @click="nextTab()" v-show="showNextButton">Next</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useDesmos } from '~/composables/useDesmos'
import { useTabSwitcher } from '~/composables/useTabSwitcher'

const { $mathjax } = useNuxtApp()
const { calculator, waitForCalculator, reset } = useDesmos()
const { nextTab } = useTabSwitcher()

const showFeedback = ref(false)
const showNextButton = ref(false)
const feedbackMessage = ref('')

function checkAnswers() {
  // Implement answer checking logic here
  showFeedback.value = true
  // Set feedbackMessage based on the results
  // showNextButton.value = true // Show next button if all answers are correct
}

const renderMath = async () => {
  await nextTick()
  const elements = document.querySelectorAll('.left-tab-3')
  for (const element of elements) {
    await $mathjax.render(element)
  }
}


onMounted(async () => {
console.log('LeftTab3 mounted')
  await reset()
  console.log('Calculator reset')
  await initializeCalculator()
  console.log('Calculator initialized')
  renderMath()
})
</script>

<style scoped>
.left-tab-3 {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.title {
  font-size: 1.5em;
  margin-bottom: 1em;
}

.content {
  font-size: 1.1em;
}

.question-container {
  margin: 1em 0;
}

button {
  margin-top: 1em;
  padding: 0.5em 1em;
  font-size: 1em;
  cursor: pointer;
}

.feedback {
  margin-top: 1em;
  font-weight: bold;
}
</style>
