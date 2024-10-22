<template>
  <div class="left-tab-1">
    <h1 class="title">Vector Subtraction Minus the Confusion</h1>
    <h2 class="subtitle">Let's build an understanding of vector subtraction</h2>
    
    <div class="content">
      <p>Start with two random vectors, \(\vec{a}\) and \(\vec{b}\). What do we mean when we subtract these two vectors, as in?</p>

      <div class="equation">\[\vec{c} = \vec{a} - \vec{b}\]</div>
      
      <p>Let's explore what this means graphically</p>
      <p>You might remember that any subtraction problem can be rewritten as adding a negative (opposite). For example</p>

      <div class="equation">
        \[6-2=4\]
        is the same as
        \[6+(-2)=4\]
      </div>

      <p>We can rewrite  \(\vec{a} - \vec{b}\) as \(\vec{a} + \left( -\vec{b} \right)\). But what do we mean by \(-\vec{b}\)?</p>

      <p>Think for a moment about the meaning of the negative sign here.</p>
      
      <div class="button-container">
        <button id="toggleNegativeBButton" @click="toggleNegativeB" v-text="showNegativeB ? 'Hide \\(-\\vec{b}\\)' : 'Show \\(-\\vec{b}\\)'"></button>
      </div>

      <div v-show="showNegativeB" id="negativeB-explanation" class="explanation">
        <p><i> \(-\vec{b}\) just points in the opposite direction of  \(\vec{b}\).</i></p>
        <p> Now let's add these two vectors. Click the next step button.</p>

        <div class="button-container fade-in right-align">
          <button id="nextStepButton" @click="nextStep">Next Step</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue'
import { useDesmos } from '~/composables/useDesmos'
import { useTabSwitcher } from '~/composables/useTabSwitcher'
    
const inlineMath = ref('$E = mc^2$')
const displayMath = ref('\\[\n\\frac{d}{dx}\\left( \\int_{0}^{x} f(u)\\,du\\right)=f(x)\n\\]')
const { $mathjax } = useNuxtApp()
const { calculator, waitForCalculator, initializeCalculator, showNegativeBVector, hideNegativeB } = useDesmos()
const showNegativeB = ref(false)
    
const renderMath = async () => {
  await nextTick()
  const elements = document.querySelectorAll('.left-tab-1, #negativeB-explanation')
  for (const element of elements) {
    await $mathjax.render(element)
  }
}
    
function toggleNegativeB() {
  console.log('toggleNegativeB', showNegativeB.value)
  showNegativeB.value = !showNegativeB.value
  if (showNegativeB.value) {
    showNegativeBVector()
  } else {
    hideNegativeB()
  }
  nextTick(() => renderMath())
}

watch(showNegativeB, () => {
  nextTick(() => renderMath())
})

const { switchLeftTab } = useTabSwitcher()

function nextStep() {
  console.log('nextStep')
  switchLeftTab('left2')
}

onMounted(async () => {
  await initializeCalculator()
  renderMath()
})
</script>

<style scoped>
.left-tab-1 {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.title {
  font-size: 2em;
  margin-bottom: 0.5em;
  color: #ffffff; /* White text for better contrast on blue background */
}

.subtitle {
  font-size: 1.5em;
  margin-bottom: 1em;
  color: #e0e0e0; /* Light gray for better readability on blue background */
}

.content {
  line-height: 1.6;
  color: #ffffff; /* White text for better contrast on blue background */
}

p {
  margin-bottom: 1em;
}

.equation {
  margin: 1.5em 0;
  text-align: center;
}

.button-container {
  margin: 1.5em 0;
}

.explanation {
  background-color: rgba(255, 255, 255, 0.1); /* Semi-transparent white */
  padding: 1em;
  border-radius: 5px;
  margin-top: 1em;
  color: #ffffff; /* Ensure text is white for contrast */
}

.fade-in {
  opacity: 0;
  animation: fadeIn 1s ease-in-out forwards;
}

.right-align {
  display: flex;
  justify-content: flex-end;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
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
