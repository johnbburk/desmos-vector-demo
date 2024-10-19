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

<script>
export default {
  props: {
    leftTabs: {
      type: Array,
      required: true
    },
    rightTabs: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeLeftTab: this.leftTabs[0]?.name || '',
      activeRightTab: this.rightTabs[0]?.name || ''
    }
  },
  computed: {
    activeLeftComponent() {
      return this.leftTabs.find(tab => tab.name === this.activeLeftTab)?.component
    },
    activeRightComponent() {
      return this.rightTabs.find(tab => tab.name === this.activeRightTab)?.component
    }
  }
}
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
  border: 1px solid #ccc;
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
