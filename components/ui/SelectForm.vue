<template>
  <select
    class="form-control"
    @change="onChange"
  >
    <option value="">Selecione</option>
    <option
      v-for="option in options"
      :key="option.id"
      :value="option.id"
      :selected="value === option.id"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
  export default {
    name: 'SelectForm',

    props: {
      value: {
        type: [String, Number, Object, Boolean],
        default: undefined,
      },
      options: {
        type: Array,
        default: () => [],
      },
    },

    data() {
      return {
        localValue: this.value,
      };
    },

    watch: {
      value(value) {
        this.localValue = value;
      },
    },

    methods: {
      onChange($evt) {
        this.$emit('input', $evt.target.value);
      }
    },
  };
</script>
