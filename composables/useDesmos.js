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

      return {
            calculator,
            isReady,
            setCalculator,
            waitForCalculator
      }
}
