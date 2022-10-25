<template>
  <button class="d-flex justify-content-center btn btn-primary ml-2 mr-2" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ButtonAct'
}
</script>
