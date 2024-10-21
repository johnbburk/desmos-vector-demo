<template>
  <div class="container">
      <TwoPaneContainer :leftTabs="leftTabs" :rightTabs="rightTabs" />
  </div>
</template>

<script>
import { defineAsyncComponent, markRaw } from 'vue'
import TwoPaneContainer from '~/components/TwoPaneContainer.vue'

export default {
  components: {
    TwoPaneContainer
  },
  data() {
    return {
      leftTabs: [
        { name: 'left1', label: 'Left Tab 1', component: markRaw(defineAsyncComponent(() => import('~/components/LeftTab1.vue'))) },
        { name: 'left2', label: 'Left Tab 2', component: markRaw(defineAsyncComponent(() => import('~/components/LeftTab2.vue'))) }
      ],
      rightTabs: [
        { name: 'right1', label: 'Right Tab 1', component: markRaw(defineAsyncComponent(() => import('~/components/RightTab1.vue'))) },
        { name: 'right2', label: 'Right Tab 2', component: markRaw(defineAsyncComponent(() => import('~/components/RightTab2.vue'))) }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  height: 100vh;
}
</style>
