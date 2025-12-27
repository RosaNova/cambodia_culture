<script setup>
import { ref } from 'vue'
import { slides } from '../store'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const currentSlide = ref(0)

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + slides.length) % slides.length
}

const goToSlide = (index) => {
  currentSlide.value = index
}
</script>

<template>
  <div class="relative h-screen overflow-hidden">
    <!-- Background Image -->
    <img
      :src="slides[currentSlide].background"
      :alt="slides[currentSlide].title"
      class="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
      :key="currentSlide"
    />

    <div class="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/60"></div>

    <!-- Content -->
    <div class="relative container mx-auto px-6 h-full flex items-center">
      <div class="flex justify-between items-center w-full gap-12">
        <div>
          <h1 class="text-6xl md:text-8xl uppercase font-bold leading-tight tracking-tight text-white">
            VISIT<br />Cambodia
          </h1>
          <p class="text-2xl text-white/90 mt-4 font-light">
            {{ slides[currentSlide].title }}
          </p>
        </div>

        <div class="flex-1 max-w-2xl">
          <div class="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
            <div class="text-white text-5xl font-bold mb-4">
              {{ String(currentSlide + 1).padStart(2, '0') }}
            </div>
            <h3 class="text-white text-3xl font-bold mb-4">
              {{ slides[currentSlide].title }}
            </h3>
            <p class="text-gray-200 text-lg leading-relaxed mb-4">
              {{ slides[currentSlide].description }}
            </p>
            <p class="text-gray-300 leading-relaxed">
              {{ slides[currentSlide].info }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Buttons -->
    <div class="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4">
      <button
        @click="prevSlide"
        class="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-4 rounded-full border border-white/40 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft class="w-6 h-6 text-white" />
      </button>

      <button
        @click="nextSlide"
        class="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-4 rounded-full border border-white/40 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight class="w-6 h-6 text-white" />
      </button>
    </div>

    <!-- Indicators -->
    <div class="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
      <button
        v-for="(_, index) in slides"
        :key="index"
        @click="goToSlide(index)"
        :class="[
          'h-3 rounded-full transition-all',
          index === currentSlide
            ? 'bg-white w-8'
            : 'bg-white/50 hover:bg-white/70 w-3'
        ]"
        :aria-label="`Go to slide ${index + 1}`"
      />
    </div>
  </div>
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
</template>
