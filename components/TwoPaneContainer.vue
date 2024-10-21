<template>
  <div class="two-pane-container">
    <div class="pane left-pane">
      <component :is="activeLeftComponent" />
    </div>
    <div class="pane right-pane">
      <component :is="activeRightComponent" />
    </div>
  </div>
</template>

<script setup>
import { computed, markRaw } from 'vue'
import { useTabSwitcher } from '~/composables/useTabSwitcher'

const props = defineProps({
  leftTabs: {
    type: Array,
    required: true
  },
  rightTabs: {
    type: Array,
    required: true
  }
})

const { activeLeftTab, activeRightTab } = useTabSwitcher()

const activeLeftComponent = computed(() => 
  markRaw(props.leftTabs.find(tab => tab.name === activeLeftTab.value)?.component)
)

const activeRightComponent = computed(() => 
  markRaw(props.rightTabs.find(tab => tab.name === activeRightTab.value)?.component)
)
</script>

<style scoped>
.two-pane-container {
  display: flex;
  height: 100%;
}

.pane {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.tab-buttons {
  display: flex;
  background-color: #f0f0f0;
}

button {
  padding: 10px 15px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

button.active {
  background-color: #fff;
  border-bottom: 2px solid #007bff;
}

.left-pane {
  margin-right: 5px;
}

.right-pane {
  margin-left: 5px;
}
</style>
