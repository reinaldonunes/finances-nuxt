<template>
  <div>
    <HeaderBar />
    <Nuxt class="container py-4 px-3" />
  </div>
</template>

<script>
  import HeaderBar from '../components/HeaderBar.vue'
  export default {
    name: '',
    components:{
      HeaderBar
    },
    data() {
        return {
        };
    },
    methods: {},
};
</script>
<style>
  .bg-darkness{
    background:#202020;
  }

  .text-nuxt-indigo{
    color:  #6366f1;
  }

  .bg-light-gray{
    background:#e7ebfc;
  }

  .rounded-8{
    border-radius:8px;
  }

  .dashed-border{
    border:1px dashed #a7aece;
  }

</style>
