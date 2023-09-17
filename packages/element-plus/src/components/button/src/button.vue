<template>
  <button class="ea-button" :class="buttonStyle" @click="click">
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useExpose } from '@rookie-ui/utils'
defineOptions({ name: 'ea-button' });
let emits = defineEmits(['click'])
type ButtonProps = {
  type?: string;
  size?: string;
};
const buttonProps = defineProps<ButtonProps>();

const buttonStyle = computed(() => {
  return { [`ea-button--${buttonProps.type}`]: buttonProps.type };
});
const click = (string: string) => {
  console.log('click', string, 'string')
  emits('click')
}

useExpose({ click })
</script>
