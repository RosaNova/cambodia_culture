<script setup lang="ts">
import { NAV_ITEMS } from './../config/navigation'
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="fixed top-0 w-full   z-50 bg-black/30 backdrop-blur-sm">
    <div class="container-fluid p-0 h-full flex items-center justify-between relative">
      
      <!-- Left Links -->
      <div class="flex h-full ">
        <RouterLink
          v-for="item in NAV_ITEMS.slice(0,4)" 
          :key="item.path"
          :to="item.path"
          class="text-xl text-gray-300 py-10 h-full px-3 hover:bg-white hover:text-black transition"
        >
          {{ item.label }}
        </RouterLink>
      </div>

      <!-- Center Logo -->
      <div class="absolute left-1/2 transform -translate-x-1/2">
        <img src="/src/assets/logo.jpg" class="w-25" alt="Logo" />
      </div>

      <!-- Right Links -->
      <div class="flex h-full ">
        <RouterLink
          v-for="item in NAV_ITEMS.slice(4,8)" 
          :key="item.path"
          :to="item.path"
          class="text-xl text-gray-300 py-10 h-full px-3 hover:bg-white hover:text-black transition"
        >
          {{ item.label }}
        </RouterLink>
      </div>
    </div>
  </nav>
</template>