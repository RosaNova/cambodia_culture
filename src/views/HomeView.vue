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
</template>
