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
    const { calculator, waitForCalculator } = useDesmos()
    const showNegativeB = ref(false)
    
    const renderMath = async () => {
      await nextTick()
      const elements = document.querySelectorAll('.left-tab-1, #negativeB-explanation')
      for (const element of elements) {
        await $mathjax.render(element)
      }
    }
    
    const addGraphToCalculator = () => {
      console.log('addGraphToCalculator', calculator.value)
      if (calculator.value) {
        calculator.value.setExpression({ id: 'graph1', latex: 'y=x^2' })
      } else {
        console.error('Calculator not initialized')
      }
    }

  function randomCoordinate(bounds = [-5, 5]) {
    const [min, max] = bounds;
    return (Math.random() * (max - min) + min).toFixed(2);
  }

var x1 = randomCoordinate()
var y1 = randomCoordinate([0, 5])
var x2 = randomCoordinate()
var y2 = randomCoordinate([0, 5])
var x3 = randomCoordinate()
var y3 = randomCoordinate([-5, 0])
var x4 = randomCoordinate()
var y4 = randomCoordinate([-5, 0])

const initializeCalculator = async () => {
  const calculator = await waitForCalculator()
  calculator.setState({
    version: 11,
    randomSeed: "38e794736b926039ebab4a7eb869b483",
    graph: {
      viewport: {
        xmin: -10,
        ymin: -37.41935483870967,
        xmax: 10,
        ymax: 37.41935483870967,
      },
      showGrid: false,
      showXAxis: false,
      showYAxis: false,
      degreeMode: true,
      product: "geometry-calculator",
    },
    expressions: {
      list: [
        {
          type: "folder",
          id: "**dcg_geo_folder**",
          title: "geometry",
          secret: true,
        },
        {
          type: "expression",
          id: "p1",
          color: "#6042a6",
          latex: `p_1=\\left(${x1},${y1}\\right)`,
          showLabel: false,
          hidden: true,
        },
        {
          type: "expression",
          id: "p2",
          color: "#6042a6",
          latex: `p_2=\\left(${x2},${y2}\\right)`,
          showLabel: false,
          hidden: true,
        },
        {
          type: "expression",
          id: "p3",
          color: "#6042a6",
          latex: `p_3=\\left(${x3},${y3}\\right)`,
          showLabel: false,
          hidden: true,
        },
        {
          type: "expression",
          id: "p4",
          color: "#6042a6",
          latex: `p_4=\\left(${x4},${y4}\\right)`,
          showLabel: false,
          hidden: true,
        },
        {
          type: "expression",
          id: "a",
          color: "#c74440",
          latex: "a=\\operatorname{vector}\\left(p_{1},p_{2}\\right)",
        },
        {
          type: "expression",
          id: "b",
          color: "#c74440",
          latex: "b=\\operatorname{vector}\\left(p_{3},p_{4}\\right)",
        },
        {
          type: "expression",
          id: "a_label",
          color: "#c74440",
          latex: "p_5=\\operatorname{translate}\\left(p_{1},\\frac{a}{2}\\right)",
          showLabel: true,
          label: "`\\vec{a}`",
          dragMode: "NONE",
          pointOpacity: "1",
          pointSize: "0",
          movablePointSize: "0",
        },
        {
          type: "expression",
          id: "b_label",
          color: "#c74440",
          latex: "p_6=\\operatorname{translate}\\left(p_{3},\\frac{b}{2}\\right)",
          showLabel: true,
          label: "`\\vec{b}`",
          dragMode: "NONE",
          pointOpacity: "1",
          pointSize: "0",
          movablePointSize: "0",
        },
      ],
    },
    includeFunctionParametersInRandomSeed: true,
    geometryToolbar: {
      visible: false,
      toolbar: "custom",
      toolbarState: {
        point: {
          visible: false,
        },
        line: {
          visible: false,
        },
        segment: {
          visible: false,
        },
        ray: {
          visible: false,
        },
        circle: {
          visible: false,
        },
        select: {
          visible: false,
        },
      },
      allowUndo: false,
    },
  })
}

function showNegativeBVector() {
  calculator.value.setExpression({
    type: "expression",
    id: "neg_b",
    color: "#2d70b3",
    latex: `c=-b`,
  })
  calculator.value.setExpression({
    type: "expression",
    id: "neg_b_label",
    color: "#2d70b3",
    latex: "p_7=\\operatorname{translate}\\left(p_{3},-\\frac{b}{2}\\right)",
    showLabel: true,
    label: "`-\\vec{b}`",
    dragMode: "NONE",
    pointOpacity: "1",
    pointSize: "0",
    movablePointSize: "0",
  })
}

function hideNegativeB() {
  console.log('hideNegativeB')
  calculator.value.removeExpressions([{ id: "neg_b" }, { id: "neg_b_label" }])
}

function toggleNegativeB() {
  console.log('toggleNegativeB', showNegativeB.value)
  showNegativeB.value = !showNegativeB.value
  if (showNegativeB.value) {
  showNegativeBVector()
  } else {
    hideNegativeB()
  }
  // Add this line to re-render MathJax
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

