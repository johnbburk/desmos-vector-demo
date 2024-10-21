import { ref } from 'vue'

const activeLeftTab = ref('left1')
const activeRightTab = ref('right1')

export function useTabSwitcher() {
      const switchLeftTab = (tabName) => {
            activeLeftTab.value = tabName
      }

      const switchRightTab = (tabName) => {
            activeRightTab.value = tabName
      }

      return {
            activeLeftTab,
            activeRightTab,
            switchLeftTab,
            switchRightTab
      }
}
