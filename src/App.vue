<template>
  <div class="min-h-screen bg-black text-white font-sans">
    <!-- Navbar -->
    <BaseHeader />

    <!-- Hero Section -->
      <router-view />
   

  </div>
</template>

<script setup>
import BaseHeader from './components/BaseHeader.vue';
import HomeView from './views/HomeView.vue';

</script>

<style scoped>
</style>