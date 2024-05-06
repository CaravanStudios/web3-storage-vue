<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { create } from '@web3-storage/w3up-client'
import { useUserStore } from './stores/user';

useHead({
  bodyAttrs: {
    class: 'h-full',
  },
  htmlAttrs: {
    class: 'h-full bg-white'
  }
});
</script>
