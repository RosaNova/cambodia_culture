<template>
  <div class="min-h-screen bg-black text-white font-sans">
    <!-- Navbar -->
    <BaseHeader />

    <!-- Hero Section -->
   <HomeView />

    <!-- Destination Recommendations -->
    <section class="py-20 bg-black">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <p class="text-gray-400 text-sm mb-2">confusion? These recommendation</p>
          <h2 class="text-4xl font-bold">destination recommendations</h2>
        </div>

        <div class="grid grid-cols-4 gap-6">
          <!-- Card 1 -->
          <div class="group cursor-pointer">
            <div class="relative h-80 overflow-hidden rounded-lg mb-4">
              <img 
                src="https://res.cloudinary.com/dnfahcxo3/image/upload/v1765686549/visiting-4949379_xgizh6.jpg" 
                alt="Nusa Lembongan"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <h3 class="text-2xl font-bold mb-1">1st place</h3>
            <p class="text-gray-400">Nusa Lembongan island</p>
          </div>

          <!-- Card 2 -->
          <div class="group cursor-pointer">
            <div class="relative h-80 overflow-hidden rounded-lg mb-4">
              <img 
                src="https://res.cloudinary.com/dnfahcxo3/image/upload/v1765686549/visiting-4949379_xgizh6.jpg" 
                alt="Pura Ulun Bedugul"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <h3 class="text-2xl font-bold mb-1">2nd place</h3>
            <p class="text-gray-400">Pura ulun bedugul Bali</p>
          </div>

          <!-- Card 3 -->
          <div class="group cursor-pointer">
            <div class="relative h-80 overflow-hidden rounded-lg mb-4">
              <img 
                src="https://res.cloudinary.com/dnfahcxo3/image/upload/v1765686549/visiting-4949379_xgizh6.jpg" 
                alt="Piyynemo Raja Ampat"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <h3 class="text-2xl font-bold mb-1">3rd place</h3>
            <p class="text-gray-400">Piyynemo raja Ampat</p>
          </div>

          <!-- Card 4 -->
          <div class="group cursor-pointer">
            <div class="relative h-80 overflow-hidden rounded-lg mb-4">
              <img 
                src="https://res.cloudinary.com/dnfahcxo3/image/upload/v1765686549/visiting-4949379_xgizh6.jpg" 
                alt="Gunung Kelimuttu"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            <h3 class="text-2xl font-bold mb-1">4th place</h3>
            <p class="text-gray-400">Gunung Kelimuttu</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Travel and Enjoy Section -->
    <section class="relative min-h-screen py-20">
      <img 
        src="https://res.cloudinary.com/dnfahcxo3/image/upload/v1765686549/visiting-4949379_xgizh6.jpg" 
        alt="Travel Background"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/50"></div>
      
      <div class="relative container mx-auto px-6">
        <div class="grid grid-cols-2 gap-12 items-start">
          <!-- Left Content -->
          <div>
            <h2 class="text-7xl font-bold leading-tight mb-12">
              TRAVEL AND<br/>ENJOY YOUR<br/>HOLIDAY
            </h2>
            
            <div class="flex items-center gap-4 mb-8">
              <div class="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center cursor-pointer hover:bg-white/20 transition">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                </svg>
              </div>
              <span class="text-lg">choose your fun holiday</span>
            </div>

            <p class="text-gray-200 leading-relaxed max-w-md">
              The Raja Ampat Islands are a group of islands located in the western part of the Bird's Head Peninsula on the island of New Guinea. Administratively, this cluster is under Raja Ampat Regency and Soron City
            </p>
          </div>

          <!-- Right Content - Images -->
          <div class="space-y-6">
            <div class="relative h-64 rounded-lg overflow-hidden">
              <img 
                src="https://res.cloudinary.com/dnfahcxo3/image/upload/v1765686549/visiting-4949379_xgizh6.jpg" 
                alt="Paragliding"
                class="w-full h-full object-cover"
              />
            </div>
            
            <div class="grid grid-cols-2 gap-6">
              <div class="relative h-48 rounded-lg overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dnfahcxo3/image/upload/v1765686549/visiting-4949379_xgizh6.jpg" 
                  alt="Swimming"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="relative h-48 rounded-lg overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dnfahcxo3/image/upload/v1765686549/visiting-4949379_xgizh6.jpg" 
                  alt="Resort"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>

            <div class="text-right text-sm text-gray-300">
             
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import BaseHeader from './components/BaseHeader.vue';
import HomeView from './views/HomeView.vue';

</script>

<style scoped>
</style>