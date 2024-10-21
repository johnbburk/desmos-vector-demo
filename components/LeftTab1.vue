<template>
      <div class="left-tab-1">
        <h1>   Vector Subtraction Minus the Confusion</h1>
        <h2> Let's build an understanding of vector subtraction</h2>
                <p>Start with two random vectors, \(\vec{a}\) and \(\vec{b}\). What do we mean when we subtract these two vectors, as in?</p>

                \[
                \vec{c} = \vec{a} - \vec{b}
                \]
                
             <p>Let's explore what this means graphically</p>
              <p>You might remember that any subtraction problem can be rewritten as adding a negative (opposite). For example</p>

              \[
              6-2=4 
              \]
              is the same as
              \[
              6+(-2)=4
              \]

            <p>We can rewrite  \(\vec{a} - \vec{b}\) as \(\vec{a} + \left( -\vec{b} \right)\). But what do we mean by \(-\vec{b}&nbsp;?\)</p>

            Think for a moment about the meaning of the negative sign here.
            <div class="button-container">
                <button id="toggleNegativeBButton" @click="toggleNegativeB" v-text="showNegativeB ? 'Hide \\(-\\vec{b}\\)' : 'Show \\(-\\vec{b}\\)'"></button>
            

                <div v-show="showNegativeB" id="negativeB-explanation">
                    <p><i> \(-\vec{b}\) just points in the opposite direction of  \(\vec{b}\).</i></p>
                    <p> Now let's add these two vectors. Click the next step button.</p>
    

              <div class="button-container fade-in  right-align">
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
    }
    
    p {
      margin-bottom: 10px;
    }

    .button-container {
      margin: 10px 0px;
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
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    </style>


