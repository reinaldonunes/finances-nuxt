<template>
  <button
    class="d-flex justify-content-center btn btn-primary ml-2 mr-2" 
    @click="$emit('click')"
    :class="style"  
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ButtonAct',
  props: {
    style: {
      type: String,
      default: undefined,
    },
  }
}
</script>
