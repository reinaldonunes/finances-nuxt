<template>
  <header class="bg-darkness">
    <nav>
      <div class="container py-3 px-2 d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center">
          <figure class="mb-0 me-1">
            <img class="img-fluid d-block" style="width:42px" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
          </figure>
          
          <ul class="mb-0">
            <NuxtLink to="/" class="btn btn-sm mb-0 text-white" :class="{'btn-dark': $route.name === 'index'}">Home</NuxtLink>
            <NuxtLink to="/categories" class="btn btn-sm mb-0 text-white" :class="{'btn-dark': $route.name === 'categories'}">Categorias</NuxtLink>
          </ul>
        </div>

        <div class="d-flex">  
          <button type="button" style="width:44px;height:44px;" class="border-0 p-0 overflow-hidden rounded-circle" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
            <img class="img-fluid rounded-circle p-0" width="52px" height="52px" src="https://avatars.githubusercontent.com/u/14979987?v=4" alt="">
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderBar'
}
</script>
