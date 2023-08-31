<template>
  <div class="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm" v-if="isShow" @click = "close">
    <div class="bg-amber-200 border-[5px] border-amber-700 px-8 py-4 rounded-[25px]">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isShow = ref(false)

function open() { isShow.value = true }

function close(e: Event) {
  if (e.currentTarget === e.target) {
    isShow.value = false
  }
}

defineExpose({ open })
</script>
