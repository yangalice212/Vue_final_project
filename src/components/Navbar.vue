<template>
  <div class="fixed-top container-fluid bg-white">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Shop</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <router-link to="/" class="nav-link">About</router-link>
              <router-link to="/products" class="nav-link">Products</router-link>
              <router-link to="/cart" class="nav-link">Cart
                <span class="text-danger">({{ cart?.carts?.length }})</span>
              </router-link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import emitter from '../assets/js/emitter';

export default {
  data() {
    return {
      cart: {},
    };
  },
  methods: {
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url).then((res) => {
        this.cart = res.data.data;
      });
    },
  },
  mounted() {
    this.getCart();
    emitter.on('update-cart', () => {
      this.getCart();
    });
  },

};
</script>
