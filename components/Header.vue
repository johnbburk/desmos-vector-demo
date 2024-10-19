<template>
      <header class="dcg-header-container">
        <DesmosLogo />
      </header>
    </template>
    


<script setup>
import DesmosLogo from './DesmosLogo.vue'; // Adjust the path as needed
</script>



<style lang="css" scoped>
.dcg-header-container {
      position: sticky;
    top: -1px;
    z-index: 10;

    border: 1px solid transparent;
    height: 50px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #eff2f3;
    border-bottom: 1px solid rgba(0,0,0,.04);
    box-sizing: border-box;
}
</style>
