<template>
  <button class="d-flex justify-content-center btn btn-primary" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ButtonAct'
}
</script>
