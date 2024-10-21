import { ref, watch } from 'vue'

const calculator = ref(null)
const isReady = ref(false)

export const useDesmos = () => {
      const setCalculator = (calc) => {
            calculator.value = calc
            isReady.value = true
      }

      const waitForCalculator = () => {
            return new Promise((resolve) => {
                  if (isReady.value) {
                        resolve(calculator.value)
                  } else {
                        watch(isReady, (newValue) => {
                              if (newValue) {
                                    resolve(calculator.value)
                              }
                        })
                  }
            })
      }

      function randomCoordinate(bounds = [-5, 5]) {
            const [min, max] = bounds;
            return (Math.random() * (max - min) + min).toFixed(2);
      }

      const initializeCalculator = async () => {
            const calc = await waitForCalculator()
            const x1 = randomCoordinate()
            const y1 = randomCoordinate([0, 5])
            const x2 = randomCoordinate()
            const y2 = randomCoordinate([0, 5])
            const x3 = randomCoordinate()
            const y3 = randomCoordinate([-5, 0])
            const x4 = randomCoordinate()
            const y4 = randomCoordinate([-5, 0])

            calc.setState({
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
                              point: { visible: false },
                              line: { visible: false },
                              segment: { visible: false },
                              ray: { visible: false },
                              circle: { visible: false },
                              select: { visible: false },
                        },
                        allowUndo: false,
                  },
            })
      }

      const showNegativeBVector = () => {
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

      const hideNegativeB = () => {
            calculator.value.removeExpressions([{ id: "neg_b" }, { id: "neg_b_label" }])
      }

      return {
            calculator,
            isReady,
            setCalculator,
            waitForCalculator,
            initializeCalculator,
            showNegativeBVector,
            hideNegativeB
      }
}
