<template>
  <Navbar />
  <router-view></router-view>
  <footer class="bg-dark text-white py-3">
    <div class="container d-flex align-items-center">
      <p class="mb-0">&copy; 2021 All rights reserved</p>
      <router-link to="/admin/products" class="btn btn-sm btn-outline-primary ms-auto">
        Admin
      </router-link>
    </div>
  </footer>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>
