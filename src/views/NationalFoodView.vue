<template>
     <div class="py-24 px-6 bg-[#0a0a0a]">
        <div class="container mx-auto max-w-6xl">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <h2 class="text-orange-500 uppercase tracking-[0.2em] text-sm font-bold mb-3">
                Authentic Khmer Taste
              </h2>
              <h3 class="text-white text-5xl md:text-6xl font-bold tracking-tight">National Food</h3>
            </div>
            <p class="text-gray-400 max-w-md text-lg leading-relaxed">
              Explore the rich culinary heritage of Cambodia through these iconic national dishes.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
            
              <div 
                v-for="(food, index) in nationalFoods"
                :key="index"
                class="group relative h-112.5 rounded-[2.5rem] overflow-hidden bg-[#1a1a1a] border border-white/5 transition-all duration-700 hover:shadow-2xl hover:shadow-orange-500/10"
              >
              
                <img
                  :src="food.image"
                  :alt="food.name"
                  class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Gradient overlays */}
                <div class="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"></div>

                {/* Glassmorphism content container */}
                <div class="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                  <div class="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-2xl">
                    <div class="flex items-start justify-between gap-4">
                      <div>
                        <h4 class="text-white text-2xl font-bold mb-3 tracking-tight group-hover:text-orange-400 transition-colors">
                          {{ food.name }}
                        </h4>
                        <p class="text-gray-300 text-sm leading-relaxed opacity-90 group-hover:opacity-100">
                          {{ food.description }}
                        </p>
                      </div>
                      <button
                        class="shrink-0 w-12 h-12 bg-orange-600 hover:bg-orange-500 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg shadow-orange-950/50 hover:scale-110 active:scale-95"
                        
                      >
                        <ArrowRight class="w-6 h-6 text-white" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Subtle border highlight on hover */}
                <div className="absolute inset-0 border-2 border-orange-500/0 rounded-[2.5rem] transition-colors duration-500 group-hover:border-orange-500/20 pointer-events-none"></div>
              </div>
          </div>
        </div>
      </div>
</template>
<script lang="ts" setup>

import { nationalFoods } from "@/store";
import { ArrowRight } from "lucide-vue-next";


</script>
<style>
    
</style>